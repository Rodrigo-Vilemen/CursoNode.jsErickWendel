const {
    deepStrictEqual,
    ok,
    notStrictEqual
} = require('assert')
const database = require('./database')

const DEFAULT_ITEM_CADASTRAR = {
    nome: 'Flash',
    poder: 'Speed',
    id: 1
}

describe('Suíte de manipulação de Heróis', () => {
    before(async () => {
        await database.cadastrar(DEFAULT_ITEM_CADASTRAR)
    })

    it('Deve pedquisar um héroi usando arquivos', async () => {
        const expected = DEFAULT_ITEM_CADASTRAR
        const [resultado] = await database.listar(expected.id)

        deepStrictEqual(resultado, expected)
    })


    it('Deve cadastrar um herói, usando arquivos', async () => {
        const expected = DEFAULT_ITEM_CADASTRAR
        const resultado = await database.cadastrar(DEFAULT_ITEM_CADASTRAR)
        const [actual] = await database.listar(DEFAULT_ITEM_CADASTRAR.id)

        deepStrictEqual(actual, expected)
    })
    it('Deve excluir um herói, usando arquivos')
        const expected = DEFAULT_ITEM_CADASTRAR
        const resultado = await database.excluir(DEFAULT_ITEM_CADASTRAR)
})