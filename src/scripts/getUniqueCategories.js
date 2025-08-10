import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/products.js';

const getUniqueCategories = async () => {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const parsedData = JSON.parse(data);

    return parsedData.reduce((acc, product) => { 
        if (!acc.includes(product.category)) {
            acc.push(product.category);
        }
            return acc;
    }, []);
};

console.log(await getUniqueCategories());