import readCSV from "./model/readCSV";
import writeCVS from "./model/writeCSV";
import estoqueService from "./service/serviceEstoque";
import { Produto } from "./model/interfaceData";
import fs from 'fs';
import { adicionarProduto } from "./controller/controleEstoque";
import { removerProduto } from "./controller/controleEstoque";
import { listaProdutos } from "./controller/controleEstoque";
import { calculoValorTotal } from "./controller/controleEstoque";
import { calculoPesoTotal } from "./controller/controleEstoque";
import { calculoMediaValor } from "./controller/controleEstoque";
import { calculoMediaPeso } from "./controller/controleEstoque";
import { numeroItensAcumulado } from "./controller/controleEstoque";

const receber = require('prompt-sync')({sigint: true});

console.log("\n--- MENU DE OPÇÕES ---"); 
console.log("Para adicionar produto digite: 1")
console.log("Para remover produto digite: 2")
console.log("Para listar produto digite: 3")
console.log("Para ver valor total no estoque digite: 4")
console.log("Para ver peso total no estoque digite: 5")
console.log("Para ver media do valor dos produtos digite: 6")
console.log("Para ver media do peso dos produtos digite: 7")
console.log("Para ver a quantidade total em estoque digite: 8")
console.log("Para SAIR digite: 9")

const funcao = receber("Digite ação desejada: ");
var valorFuncao = parseInt(funcao);

switch(valorFuncao) {

    case 1:
        var nome = receber("Digito o nome: ");
        var valor = receber("Digito o valor: ");
        var peso = receber("Digito o peso: ");
        var qtd= receber("Digito o quantidade: ");

        const dados = {
            nome: nome,
            peso: parseFloat(peso),
            valor: parseFloat(valor),
            quantidade: parseFloat(qtd),
        } as Produto

        adicionarProduto(dados);
        break;

    case 2:
        var itemRemovido = receber("Digite o nome do item que deseja remover: ");

        removerProduto(itemRemovido);
        break;

    case 3:
        listaProdutos();
        break;

    case 4:
        calculoValorTotal();
        break;

    case 5:
        calculoPesoTotal();
        break;
    
    case 6: 
        calculoMediaValor();
        break;

    case 7:
        calculoMediaPeso();
        break;

    case 8:
        numeroItensAcumulado();
        break;
}


