import { Dao } from "./Dao";
import Concessionaria from "./Concessionaria";
import Pessoa from "./Pessoa";

let concessionaria = new Concessionaria("", []);
let pessoa = new Pessoa("", "");

let dao3 = new Dao<Concessionaria>();

dao3.inserir(concessionaria);