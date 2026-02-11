import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const SOURCE_DIR = 'public/images/cards';
const BACKUP_DIR = path.join(SOURCE_DIR, '_backup');

if (!fs.existsSync(BACKUP_DIR)) {
    fs.mkdirSync(BACKUP_DIR);
}

const files = fs.readdirSync(SOURCE_DIR).filter(file => /\.(jpg|jpeg|png)$/i.test(file));

console.log(`Found ${files.length} images to process.`);

const processFile = async (file) => {
    const filePath = path.join(SOURCE_DIR, file);
    let newName = '';

    // Determine new filename
    if (file.startsWith('arcana')) {
        const number = file.replace('arcana', '').split('.')[0];
        newName = `major_${number}.webp`;
    } else if (file.startsWith('crystals')) {
        const number = file.replace('crystals', '').split('.')[0];
        newName = `crystals_${number}.webp`;
    } else if (file.startsWith('cups')) {
        const number = file.replace('cups', '').split('.')[0];
        newName = `cups_${number}.webp`;
    } else if (file.startsWith('wands')) {
        const number = file.replace('wands', '').split('.')[0];
        newName = `wands_${number}.webp`;
    } else if (file.startsWith('worlds')) {
        const number = file.replace('worlds', '').split('.')[0];
        newName = `worlds_${number}.webp`;
    } else {
        console.log(`Skipping unknown file format: ${file}`);
        return;
    }

    const outputFilePath = path.join(SOURCE_DIR, newName);

    try {
        // Convert to WebP
        await sharp(filePath)
            .webp({ quality: 80 })
            .toFile(outputFilePath);

        console.log(`Processed: ${file} -> ${newName}`);

        // Move original to backup
        const backupPath = path.join(BACKUP_DIR, file);
        fs.renameSync(filePath, backupPath);

    } catch (error) {
        console.error(`Error processing ${file}:`, error);
    }
};

(async () => {
    for (const file of files) {
        await processFile(file);
    }
    console.log('All files processed.');
})();
