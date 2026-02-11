import fs from 'fs';
import path from 'path';

const PUBLIC_DIR = 'public';
const CARDS_DIR = path.join(PUBLIC_DIR, 'images/cards');

const checkFile = (relativePath) => {
    const fullPath = path.join(PUBLIC_DIR, relativePath);
    return fs.existsSync(fullPath);
};

let missingCount = 0;
let foundCount = 0;

console.log('Verifying all 78 card images...');

// Check Major Arcana (00-21)
for (let i = 0; i <= 21; i++) {
    const name = `major_${String(i).padStart(2, '0')}.webp`;
    if (checkFile(`images/cards/${name}`)) {
        foundCount++;
    } else {
        console.error(`MISSING: ${name}`);
        missingCount++;
    }
}

// Check Minor Arcana Suits
const suits = ['crystals', 'cups', 'wands', 'worlds'];
for (const suit of suits) {
    for (let i = 1; i <= 14; i++) {
        const name = `${suit}_${String(i).padStart(2, '0')}.webp`;
        if (checkFile(`images/cards/${name}`)) {
            foundCount++;
        } else {
            console.error(`MISSING: ${name}`);
            missingCount++;
        }
    }
}

console.log(`\nVerification Complete.`);
console.log(`Found: ${foundCount}`);
console.log(`Missing: ${missingCount}`);

if (foundCount === 78 && missingCount === 0) {
    console.log('SUCCESS: All 78 images are present.');
} else {
    console.error(`FAILURE: Expected 78 images, found ${foundCount}.`);
    process.exit(1);
}
