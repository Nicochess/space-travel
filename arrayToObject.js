//Bom, tive algumas complicações com o Yarn, mas isto não comprometeu a qualidade e eficácia do código.
//Está aqui, convertendo o array em um objeto como pedido, normalmente.

let arrayStrange = [
    "preto-PP", 
    "preto-M", 
    "preto-G", 
    "preto-GG", 
    "preto-GG", 
    "branco-PP", 
    "branco-G", 
    "vermelho-M", 
    "azul-XG", 
    "azul-XG", 
    "azul-XG", 
    "azul-P"
]

function transformArray (arr){
    const ourObject = {}

    for(const item of arr){
        const[name,num] = item.split('-')
        if(!ourObject[name]){
            ourObject[name] = {}
        }
        ourObject[name][num] = (ourObject[name][num] || 0) + 1
    }

    return ourObject
}

console.log(transformArray(arrayStrange))