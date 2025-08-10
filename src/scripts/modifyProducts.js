import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/products.js';


const modifyProducts = async () => {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const parsedData = JSON.parse(data);

    const newData = parsedData.map(({description, ...rest}) => rest);

    await fs.writeFile(PATH_DB, JSON.stringify(newData, null, 2), 'utf-8');
};

await modifyProducts();