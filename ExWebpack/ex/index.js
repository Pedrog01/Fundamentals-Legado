import Pessoa from "./pessoa";


const { default: Pessoa } = require("./pessoa");

const pessoa = new Pessoa('guilherme')
console.log(pessoa.toString())