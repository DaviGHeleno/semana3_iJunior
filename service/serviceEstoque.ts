import readCSV from "../model/readCSV";
import writeCVS from "../model/writeCSV";
import { Produto } from "../model/interfaceData";
import fs from 'fs';

const filePath = './model/estoque.csv';
const receber = require('prompt-sync')({sigint: true});

class estoqueService{
    async criar(data: Produto){
        if(typeof data.nome != 'string' || isNaN(data.peso) || isNaN(data.valor) || isNaN(data.quantidade)){
            throw new Error("Os dados do produto são invalidos");
        }
        else{
            const produtoAtuais: Produto[] = await readCSV(filePath);
            produtoAtuais.push(data);
            await writeCVS(filePath, produtoAtuais);
        }
    }

    async remover(nome: string){
        const produtos: Produto[] = await readCSV(filePath);

        const produtoEncontrado = produtos.find(p => p.nome === nome);
        if(!produtoEncontrado){
            throw new Error("Produto " + nome + " não encontrado");
            return;
        }

        console.log("Produto encontrado com sucesso:");
        console.log(produtoEncontrado.nome + " ," + produtoEncontrado.peso + " ," + produtoEncontrado.valor + " ," + produtoEncontrado.quantidade);

        let confirmacao = ''; // Initialize it
        do {
            confirmacao = receber("Tem certeza que deseja remover este produto? (s/n): ").toLowerCase();
            if (confirmacao !== "s" && confirmacao !== "n") {
                console.log("Opçao invalida");
            }
        } while (confirmacao !== "s" && confirmacao !== "n");


        if (confirmacao !== 's') {
            throw new Error("Remoção cancelada");
            return;
        }

        const produtosAtualizados = produtos.filter(p => p.nome !== nome);

        try{
            await writeCVS(filePath, produtosAtualizados);
        } catch(erro){
            throw new Error("Erro ao salvar produto no CSV");
        }


    }

    async listar(){
        const listaProdutos: Produto[] = await readCSV(filePath);
        console.log(listaProdutos);
    }

    async valorTotal(){
        const todosProdutos: Produto[] = await readCSV(filePath);

        var valorTotal = 0;
        for(var i = 0; i < todosProdutos.length; i++){
            valorTotal += todosProdutos[i].quantidade*todosProdutos[i].valor;
        }

        return valorTotal;
    }


}

export default estoqueService;
