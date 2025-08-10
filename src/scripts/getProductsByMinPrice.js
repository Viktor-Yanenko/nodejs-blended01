import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/products.js';

const getProductsByMinPrice = async (minPrice) => {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const parsedData = JSON.parse(data);
    const filterData = parsedData.filter(product => product.price >= minPrice);
    return filterData;
};

console.log(await getProductsByMinPrice(300));