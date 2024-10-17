function preencherDados(pc){
    pc.modelo = prompt('Digite o modelo do PC: ')
    pc.processador = prompt('Digite o Processador do PC: ')
    pc.ram = prompt('Digite a quantidade de memória ram: ')
    pc.hd = prompt('Digite a quantidade de armazenamento: ')

    return pc
}

function attDados(pc){
    preencherDados(pc)
}

function imprimirDados(pc){
    console.log('Hardware do PC:')
    console.log(pc)
}

let compiuter = {}
let option

while(true){
    option = Number(prompt('1- Preencher dados do PC\n2- Atualizar dados do PC\n3- Imprimir dados\n4- Sair\nDigite a opção: '))

    switch(option){
        case 1:
            preencherDados(compiuter)
            break
        case 2:
            attDados(compiuter)
            break
        case 3:
            imprimirDados(compiuter)
            break
        default:
            break;
    }
    if(option != 1  && option != 2){
        break
    }
}