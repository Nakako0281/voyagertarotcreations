import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectRoot = path.resolve(__dirname, '..');
const publicDir = path.join(projectRoot, 'public', 'images');

// Folders to scan
const folders = [
    publicDir,
    path.join(publicDir, 'cards'),
    path.join(publicDir, 'home')
];

async function optimizeImages() {
    console.log('Starting image optimization...');

    for (const folder of folders) {
        if (!fs.existsSync(folder)) {
            console.log(`Folder not found: ${folder}, skipping.`);
            continue;
        }

        const files = fs.readdirSync(folder);

        for (const file of files) {
            const ext = path.extname(file).toLowerCase();
            if (['.jpg', '.jpeg', '.png'].includes(ext)) {
                const inputPath = path.join(folder, file);
                const outputPath = path.join(folder, path.parse(file).name + '.webp');

                // Skip if webp already exists (optional, but good for idempotency)
                // if (fs.existsSync(outputPath)) continue;

                try {
                    console.log(`Converting: ${file} ...`);
                    await sharp(inputPath)
                        .webp({ quality: 80 })
                        .toFile(outputPath);

                    console.log(`✅ Created: ${path.basename(outputPath)}`);
                } catch (error) {
                    console.error(`❌ Error converting ${file}:`, error);
                }
            }
        }
    }
    console.log('Optimization complete!');
}

optimizeImages();
