import { createObjectCsvWriter as createCsvWriter } from 'csv-writer';
import { Produto } from './interfaceData';

const writeCVS = async (filePath: string, data: Produto[]): Promise<void> => {
    const csvWriter = createCsvWriter({
        path: filePath,
        header:[
            {id: 'nome', title: "NOME"},
            {id: 'peso', title: "PESO Kg"},
            {id: 'valor', title: "VALOR $"},
            {id: 'quantidade', title: "QUANTIDADE"},
        ],
    })

    return csvWriter.writeRecords(data);
}

export default writeCVS;