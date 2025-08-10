import { PATH_DB } from "../constants/products.js";
import { createFakeProduct } from "../utils/createFakeProduct.js";
import fs from 'node:fs/promises';

const generateProducts = async (count) => {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const parsedData = JSON.parse(data);

    for (let i = 0; i < count; i++) {
        const newRec = createFakeProduct();
        parsedData.push(newRec);
    }

    await fs.writeFile(PATH_DB, JSON.stringify(parsedData, null, 2), 'utf-8');
};

generateProducts(3);