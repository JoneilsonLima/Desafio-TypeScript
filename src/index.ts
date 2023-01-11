import { Funcionario } from "./Funcionario";
import { Endereco } from "./Endereco";


/****************  APLICAÇÃO 1  *****************/
//Crie dois funcionários do banco, um gerente e um atendente.
 
const funcionario1 = new Funcionario('Pedro', '273-485-789-07', '(98) 99634-8566', 1250);
funcionario1.addCargo('Gerente');
const funcionario2 = new Funcionario('Pedro', '273-485-789-07', '(98) 99634-8566', 1250);
funcionario2.addCargo('Atendente');


/****************  APLICAÇÃO 2  *****************/
//Crie um cliente e adicione 3 endereços a ele

const endereco1 = new Endereco('64057-034', 'rua-9', '12', 'casa', 'São Luís', 'MA');
 

