import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/products.js';

const groupProductsByCategories = async () => {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const parsedData = JSON.parse(data);
    const resultObject = {};

    for (const product of parsedData) {
        if (!resultObject[product.category]) {
            resultObject[product.category] = [];
        }
        resultObject[product.category].push(product.name);
    }
    return resultObject;
};

console.log(await groupProductsByCategories());