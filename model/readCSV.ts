// readCSV.ts
import fs from 'fs';
import csv from 'csv-parser';
import { Produto } from './interfaceData';

const readCSV = async (filePath: string): Promise<Produto[]> => {
  return new Promise((resolve, reject) => {
    const results: Produto[] = [];

    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (data: any) => { 
        const transformedData: Produto = {
          nome: data['NOME'],
          peso: parseFloat(data['PESO Kg']), 
          valor: parseFloat(data['VALOR $']), 
          quantidade: parseFloat(data['QUANTIDADE']), 
        };
        results.push(transformedData);
      })
      .on('end', () => resolve(results))
      .on('error', (error: Error) => reject(error));
  });
};

export default readCSV;