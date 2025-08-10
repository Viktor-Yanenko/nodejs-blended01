import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/products.js';

const getTotalPrice = async () => {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const parsedData = JSON.parse(data);
    const totalPrice = parsedData.reduce((acc, product) => (acc += Number(product.price)), 0);
    return totalPrice;
};

console.log(await getTotalPrice());