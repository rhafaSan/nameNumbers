const { centenas, unidade, dezenas, milhar, numerosMenoresQueDez, single } = require('./Unidades')

function menorQueDez(num){
    return numerosMenoresQueDez[num];
}

function verificarDezenas(num){
    return dezenas[num];
}

function verificarUnidades(num){
    return unidade[num];
}

function verificarSingles(num){
    return single[num];
}

function verificarCentena(num){
    return centenas[num];
}

function verificarMilhar(num){
    return milhar[num];
}

function textoDezena(num, value){
    if(num < 10) return verificarSingles(num);

    if(num < 20 && num > 10) return verificarUnidades(num);

    const newValue = value.toString();
    const prevValue = newValue.slice(-1)
    const novaDezena = newValue.substr(0,1)
    
    const dezena = verificarDezenas(novaDezena.concat('0'));
    const resto =  verificarSingles(prevValue);

    return prevValue == 0 ? `${dezena}` : `${dezena} e ${resto}`
    
}

function textoCentena(value){
    const primeiro = value.toString();
    
    const centena = primeiro.substr(0, 1);
    const dezenas = primeiro.substr(1,2);

    let textoPrimeiro = `${verificarCentena(centena.concat('00'))}`

    if(textoPrimeiro === 'cem') textoPrimeiro = 'cento'
    const resto = primeiro.substr(1);
    // console.log(resto);
    
    const dezena = textoDezena(resto, resto);

    return dezenas === '00' ? `${textoPrimeiro}` : `${textoPrimeiro} e ${dezena}`
}

function textoMilhar(value){
    const valueString = value.toString();
    const milhar = valueString.substr(0, 1);
    const centena = valueString.substr(1, 3);

    const textoDaMilhar = `${verificarSingles(milhar)} mil`
    const textoDaCentena = `${textoCentena(centena)}`

    return centena === '000' ? `${textoDaMilhar}` : `${textoDaMilhar} ${textoDaCentena}`

}

console.log(textoMilhar(1111));