const bcrypt = require('bcryptjs')

const encriptar = async (textoPlano) => {
    const hash = await bcrypt.hash(textoPlano,10);
    return hash;
}

const comparar = async (passText, hashPass) =>{
    return await bcrypt.compare(passText, hashPass);
}

module.exports = {
    encriptar,
    comparar
}