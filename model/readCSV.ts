// readCSV.ts
import fs from 'fs';
import csv from 'csv-parser';
import { Produto } from './interfaceData';

const readCSV = async (filePath: string): Promise<Produto[]> => {
  return new Promise((resolve, reject) => {
    const results: Produto[] = [];

    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (data: any) => { // Use 'any' temporarily to handle raw data from parser
        // Transform keys to lowercase to match Produto interface
        const transformedData: Produto = {
          nome: data['NOME'],
          peso: parseFloat(data['PESO Kg']), // Ensure numbers are parsed
          valor: parseFloat(data['VALOR $']), // Ensure numbers are parsed
          quantidade: parseFloat(data['QUANTIDADE']), // Ensure numbers are parsed
        };
        results.push(transformedData);
      })
      .on('end', () => resolve(results))
      .on('error', (error: Error) => reject(error));
  });
};

export default readCSV;