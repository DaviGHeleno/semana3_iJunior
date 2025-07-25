import readCSV from "../model/readCSV";
import writeCVS from "../model/writeCSV";
import { Produto } from "../model/interfaceData";
import fs from 'fs';

const filePath = './model/estoque.csv';

class estoqueService{
    async criar(data: Produto){
        if(typeof data.nome != 'string' || isNaN(data.peso) || isNaN(data.valor) || isNaN(data.quantidade)){
            throw new Error("Os dados do produto são invalidos");
        }
        else{
            await writeCVS(filePath, [data]);
        }
    }
}

export default estoqueService;
