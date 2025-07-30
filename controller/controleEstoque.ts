import { Produto } from "../model/interfaceData";
import estoqueService from "../service/serviceEstoque";

const estoque = new estoqueService();

export async function adicionarProduto(data: Produto) {
    try{
        await estoque.criar(data)
        console.log("Produto add")
    }
    catch(erro){
        console.log("Erro ao add")
    }
    
}


export async function removerProduto(nome: string) {
    try{
        await estoque.remover(nome);
        console.log("Produto " + nome + " removido com sucesso");
    } catch(erro: any){
        console.log(erro.message);
    }
}


export async function listaProdutos() {
    try{
        await estoque.listar();
    } catch(erro){
        console.log("Falha ao listar produtos");
    }
    
}


export async function calculoValorTotal() {
    try{
        var valorFinal = await estoque.valorTotal();
        console.log("R$" + valorFinal);
    }catch(erro){
        console.log("Falha ao calcular valor");
    }
}


export async function calculoPesoTotal() {
    try{
        var pesoFinal = await estoque.pesoTotal();
        console.log("Kg" + pesoFinal);
    }catch(erro){
        console.log("Falha ao calcular peso");
    }
}


export async function calculoMediaValor() {
    try{
        var media = await estoque.mediaValor();
        console.log("R$" + media.toFixed(2));
    }catch(erro){
        console.log("Falha ao calcular media")
    }
}


export async function calculoMediaPeso() {
    try{
        var media = await estoque.mediaPeso();
        console.log("Kg" + media.toFixed(2));
    }catch(erro){
        console.log("Falha ao calcular media")
    }
}