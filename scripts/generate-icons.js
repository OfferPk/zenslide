/**
 * Generates valid PNG icons for ZenSlide using Node built-in zlib & fs.
 * Zero external dependencies.
 */

const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

function crc32(buf) {
  let table = new Int32Array(256);
  for (let i = 0; i < 256; i++) {
    let c = i;
    for (let k = 0; k < 8; k++) {
      c = c & 1 ? -306674912 ^ (c >>> 1) : c >>> 1;
    }
    table[i] = c;
  }
  let crc = -1;
  for (let i = 0; i < buf.length; i++) {
    crc = (crc >>> 8) ^ table[(crc ^ buf[i]) & 0xff];
  }
  return (crc ^ -1) >>> 0;
}

function makePng(width, height, getPixelRgba) {
  const bytesPerPixel = 4;
  const scanlineLength = width * bytesPerPixel;
  const rawData = Buffer.alloc((scanlineLength + 1) * height);

  for (let y = 0; y < height; y++) {
    const scanlineOffset = y * (scanlineLength + 1);
    rawData[scanlineOffset] = 0;
    for (let x = 0; x < width; x++) {
      const [r, g, b, a] = getPixelRgba(x, y, width, height);
      const pixelOffset = scanlineOffset + 1 + x * bytesPerPixel;
      rawData[pixelOffset] = r;
      rawData[pixelOffset + 1] = g;
      rawData[pixelOffset + 2] = b;
      rawData[pixelOffset + 3] = a;
    }
  }

  const idatData = zlib.deflateSync(rawData);

  function makeChunk(type, data) {
    const typeBuf = Buffer.from(type, 'ascii');
    const lenBuf = Buffer.alloc(4);
    lenBuf.writeUInt32BE(data.length, 0);
    const body = Buffer.concat([typeBuf, data]);
    const crcVal = crc32(body);
    const crcBuf = Buffer.alloc(4);
    crcBuf.writeUInt32BE(crcVal, 0);
    return Buffer.concat([lenBuf, body, crcBuf]);
  }

  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8;
  ihdr[9] = 6;
  ihdr[10] = 0;
  ihdr[11] = 0;
  ihdr[12] = 0;

  const pngSignature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  const ihdrChunk = makeChunk('IHDR', ihdr);
  const idatChunk = makeChunk('IDAT', idatData);
  const iendChunk = makeChunk('IEND', Buffer.alloc(0));

  return Buffer.concat([pngSignature, ihdrChunk, idatChunk, iendChunk]);
}

function renderZenSlideIcon(x, y, width, height) {
  const nx = x / width;
  const ny = y / height;

  // Rounded outer rect
  const cornerR = 0.22;
  const innerX = Math.abs(nx - 0.5) - (0.5 - cornerR);
  const innerY = Math.abs(ny - 0.5) - (0.5 - cornerR);
  if (innerX > 0 && innerY > 0) {
    const d = Math.sqrt(innerX * innerX + innerY * innerY);
    if (d > cornerR) return [0, 0, 0, 0];
  }

  // Dark background gradient
  const distCenter = Math.sqrt((nx - 0.5) ** 2 + (ny - 0.5) ** 2);
  const bgR = Math.floor(9 + (30 - 9) * (1 - distCenter));
  const bgG = Math.floor(13 + (41 - 13) * (1 - distCenter));
  const bgB = Math.floor(22 + (59 - 22) * (1 - distCenter));

  // Key block (Red, horizontal, row 2 / y from 0.38 to 0.52, x from 0.25 to 0.6)
  if (ny >= 0.38 && ny <= 0.52 && nx >= 0.25 && nx <= 0.60) {
    return [255, 59, 48, 255]; // Coral Red
  }

  // Obstacle Cyan (Vertical, x from 0.64 to 0.76, y from 0.18 to 0.52)
  if (nx >= 0.64 && nx <= 0.76 && ny >= 0.18 && ny <= 0.52) {
    return [0, 199, 190, 255]; // Cyan
  }

  // Obstacle Amber (Vertical, x from 0.25 to 0.37, y from 0.56 to 0.82)
  if (nx >= 0.25 && nx <= 0.37 && ny >= 0.56 && ny <= 0.82) {
    return [255, 149, 0, 255]; // Amber
  }

  // Obstacle Purple (Horizontal, y from 0.20 to 0.34, x from 0.25 to 0.60)
  if (ny >= 0.20 && ny <= 0.34 && nx >= 0.25 && nx <= 0.60) {
    return [175, 82, 222, 255]; // Purple
  }

  // Obstacle Emerald (Horizontal, y from 0.56 to 0.70, x from 0.42 to 0.76)
  if (ny >= 0.56 && ny <= 0.70 && nx >= 0.42 && nx <= 0.76) {
    return [52, 199, 89, 255]; // Emerald
  }

  // Exit gate marker on right edge
  if (nx >= 0.88 && nx <= 0.94 && ny >= 0.38 && ny <= 0.52) {
    return [255, 59, 48, 255];
  }

  return [bgR, bgG, bgB, 255];
}

const srcDir = path.join(__dirname, '..', 'src');

console.log('Generating icon-192.png...');
const icon192 = makePng(192, 192, renderZenSlideIcon);
fs.writeFileSync(path.join(srcDir, 'icon-192.png'), icon192);

console.log('Generating icon-512.png...');
const icon512 = makePng(512, 512, renderZenSlideIcon);
fs.writeFileSync(path.join(srcDir, 'icon-512.png'), icon512);

console.log('ZenSlide PNG icons generated successfully.');
