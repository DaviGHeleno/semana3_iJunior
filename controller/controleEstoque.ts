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