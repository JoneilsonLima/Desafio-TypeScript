import { Funcionario } from "./Funcionario";
import { Endereco } from "./Endereco";
import { contaCorrente } from "./ContaCorrente";
import { Cliente } from "./Cliente";
import { contapoupanca } from "./ContaPoupanca";


/****************************  APLICAÇÃO 1  ***************************/
//Crie dois funcionários do banco, um gerente e um atendente.
 
const funcionario1 = new Funcionario('Pedro', '273-485-789-07', '(98) 99634-8566', 1250);
funcionario1.addCargo('Gerente');
const funcionario2 = new Funcionario('Pedro', '273-485-789-07', '(98) 99634-8566', 1250);
funcionario2.addCargo('Atendente');


/****************************  APLICAÇÃO 2  ***************************/
const endereco1 = new Endereco('64057-034', 'rua-9', '12', 'casa', 'São Luís', 'MA');
const contaCorrenteEndereco = new contaCorrente(2000, '222')
// Crie um cliente e adicione 3 endereços a ele
const clienteEndereco1 = new Cliente(true, '234-458-487-01' ,'(98) 98849-5432', 'Joneilson', endereco1, contaCorrenteEndereco);
// Imprima os endereços desse cliente
console.log(clienteEndereco1.listarEnderecos())
 

/****************************  APLICAÇÃO 3  ***************************/
//  Crie um cliente que possua uma ContaCorrente
const enderecoCliente1 = new Endereco('64057-034', 'rua-9', '12', 'casa', 'São Luís', 'MA');
const contaCorrenteCliente1 = new contaCorrente(5000, '111');
const cliente1 = new Cliente(true, '234-458-487-01' ,'(98) 98849-5432', 'Joneilson', enderecoCliente1, contaCorrenteCliente1);
// Efetue três depósitos de 100 nessa ContaCorrente
contaCorrenteCliente1.depositar(100);
contaCorrenteCliente1.depositar(100);
contaCorrenteCliente1.depositar(100);
// Efetue um saque de 50 reais nessa ContaCorrente
contaCorrenteCliente1.sacar(50);
// Imprima o valor do saldo dessa ContaCorrente
console.log(contaCorrenteCliente1.calcularSaldo())


/****************************  APLICAÇÃO 4  ***************************/
// Crie um cliente que possua uma ContaCorrente
const contaCorrenteCliente4 = new contaCorrente(2000, '333');
// Efetue um depósito de 1000 nessa ContaCorrente
contaCorrenteCliente4.depositar(1000);
// Crie um cliente que possua uma ContaPoupanca
const contapoupancaCliente4 = new contapoupanca(0, '333');
// Efetue um depósito de 1000 reais nessa conta Poupanca
contapoupancaCliente4.depositar(1000);
// Efetue uma transferência de 500 reais da ContaCorrente para ContaPoupanca
contaCorrenteCliente4.transferir(contapoupancaCliente4, 500);


/****************************  APLICAÇÃO 5  ***************************/
// Crie um cliente que possua uma ContaPoupanca
// Defina a rentabilidadeMensal em 1%
// Efetue 1 depósito por mês de 200 reais do dia 01/01/2022 até 31/12/2022
// Efetue um saque de 100 reais no dia 05/03/2022
// Efetue um saque de 200 reais no dia 08/07/2022
// Calcule o saldo da conta poupança considerando os rendimentos