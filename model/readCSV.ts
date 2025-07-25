import fs from 'fs';
import csv from 'csv-parser';
import { Produto } from './interfaceData';

const readCSV = async (filePath: string): Promise<Produto[]> => {
  return new Promise((resolve, reject) => {
    const results: Produto[] = [];

    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (data: Produto) => results.push(data))
      .on('end', () => resolve(results))
      .on('error', (error: Error) => reject(error));
  });
};

export default readCSV;

