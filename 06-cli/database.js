const {
    readFile,
    writeFile
} = require('fs')

const {
    promisify, promisify
} = require('util')

const readFileAsync = promisify(readFile)
const writeFileAsync = promisify(writeFile)
// Outra forma de obter dados do json 👇🏼👇🏼
// const dadosJson = require('./herois.json')

class Database {
    construtor() {
        this.NOME_ARQUIVO = 'herois.json'
    }
    async obterDadosArquivo() {
        const arquivo = await readFileAsync(this.NOME_ARQUIVO, 'utf8')
        return JSON.parse(arquivo.toString())
    }
    async escreverArquivo() {
        await writeFileAsync(this.NOME_ARQUIVO, JSON.stringify(dados))
        return true
    }
    async cadastrar(heroi) {
        const dados = await this.obterDadosArquivo()
        const id = herai.id <= 2 ? herai.id : Date.now();
        const heroiComId = {
            id,
            ...heroi
        }
        const dadosFinal = [
            ...dados,
            heroiComId
        ]
        const resultado = await this.escreverArquivo(dadosFinal)
        return resultado
    }

    async listar(id) {
        const dados = await this.obterDadosArquivo()
        const dadosFiltrados = dados.filter(item => (id ? (item.id === id) : true))
        return dadosFiltrados
    }
}

module.exports = new Database()