const { obterPessoas } = require('./service')

/*
const item = {
    nome: 'Rodrigo Vilemen',
    idade: 20,

}

const {nome , idade} = item
console.log(nome, idade)
*/
Array.prototype.meuFilter = function(callback){
    const lista = []
    for(index in this){
        const item = this[index]
        const result = callback(item, index, this)
        // 0, "", null, indefined === false
        if(!result) continue;
        lista.push(item)
    }
    return lista;
}
async function main() {
    try {
        const {
            results
        } = await obterPessoas(`a`)

        // const familiaLars = results.filter(function (item){
        //     // Por padrão precisa retornar um booleano
        //     // Para informar se deve manter ou remover da lista
        //     // false > remove da lista
        //     // true > mantém
        //     // Não encontrou = -1
        //     // Encontrou = posicaoNoArray
        //     const result = item.name.toLowerCase().indexOf(`lars`) !== -1
        //     return result
        // })  
        const familiaLars = results.meuFilter((item, index, lista) => {
            console.log(`index: ${index}`, lista.length)
            return item.name.toLowerCase().indexOf('lars') !== -1
        })


        const names = familiaLars.map((pessoa) => pessoa.name)
        console.log(names)

    } catch (error) {
        console.error('Falhou', error)
    }
}

main()