const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sourceFolder = path.resolve(__dirname, 'src/public/images/hero');
const destinationFolder = path.resolve(__dirname, 'src/public/imagesoptimzer');

// Buat folder tujuan jika belum ada
if (!fs.existsSync(destinationFolder)) {
  // Jika belum ada, buat direktori baru
  fs.mkdirSync(destinationFolder, {
    recursive: true,
  });
}

// Hapus file lama dalam folder tujuan
fs.readdirSync(destinationFolder).forEach((file) => {
  const filePath = path.resolve(destinationFolder, file);
  fs.unlinkSync(filePath);
});

// Baca file dalam folder sumber
fs.readdirSync(sourceFolder).forEach((image) => {
  const imageFilePath = path.resolve(sourceFolder, image);
  const imageFileName = path.parse(image).name;

  sharp(imageFilePath)
    .resize(1400)
    .toFile(path.resolve(destinationFolder, `${imageFileName}-large.jpg`));

  sharp(imageFilePath)
    .resize(1200)
    .toFile(path.resolve(destinationFolder, `${imageFileName}-meduim.jpg`));

  sharp(imageFilePath)
    .resize(900)
    .toFile(path.resolve(destinationFolder, `${imageFileName}-small.jpg`));
});
