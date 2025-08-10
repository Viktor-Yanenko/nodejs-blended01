import { PATH_DB, PATH_FILES_DIR } from "../constants/products.js";
import fs from 'node:fs/promises';
import path from 'node:path';

const createProductsFiles = async () => {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const parsedData = JSON.parse(data);

    for (const product of parsedData) {
        const fileName = `${product.name.toLowerCase().replace(/\s+/g, '-')}.json`;
        const filePath = path.join(PATH_FILES_DIR, fileName);
        await fs.writeFile(filePath, JSON.stringify(product, null, 2), 'utf-8');
        console.log({fileName, filePath});
    }
};

createProductsFiles();