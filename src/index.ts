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
const endereco1 = new Endereco('64057-784', 'rua-9', '12', 'casa', 'São Luís', 'MA');
const endereco2 = new Endereco('44097-594', 'rua-4', '10', 'casa', 'São Luís', 'MA');
const endereco3 = new Endereco('67857-334', 'rua-2', '8', 'casa', 'São Luís', 'MA');
const contaCorrenteEndereco = new contaCorrente(2000, '222')
// Crie um cliente e adicione 3 endereços a ele
const clienteEndereco1 = new Cliente(true, '234-458-487-01' ,'(98) 98849-5432', 'Joneilson', [endereco1, endereco2, endereco3], contaCorrenteEndereco);
// Imprima os endereços desse cliente
console.log(clienteEndereco1.listarEnderecos())
 

/****************************  APLICAÇÃO 3  ***************************/
//  Crie um cliente que possua uma ContaCorrente
const enderecoCliente1 = new Endereco('64057-034', 'rua-9', '12', 'casa', 'São Luís', 'MA');
const contaCorrenteCliente1 = new contaCorrente(5000, '111');
const cliente1 = new Cliente(true, '234-458-487-01' ,'(98) 98849-5432', 'Joneilson', [enderecoCliente1], contaCorrenteCliente1);
// Efetue três depósitos de 100 nessa ContaCorrente
contaCorrenteCliente1.depositar(100);
contaCorrenteCliente1.depositar(100);
contaCorrenteCliente1.depositar(100);
// Efetue um saque de 50 reais nessa ContaCorrente
contaCorrenteCliente1.sacar(50);
// Imprima o valor do saldo dessa ContaCorrente
console.log(contaCorrenteCliente1.calcularSaldo())


/****************************  APLICAÇÃO 4  ***************************/
const enderecoCliente = new Endereco('64057-034', 'rua-9', '12', 'casa', 'São Luís', 'MA');

// Crie um cliente que possua uma ContaCorrente
const contaCorrenteCliente4 = new contaCorrente(2000, '333');
const cliente4 = new Cliente(true, '234-458-487-01' ,'(98) 98849-5432', 'Joneilson', [enderecoCliente], contaCorrenteCliente4);
// Efetue um depósito de 1000 nessa ContaCorrente
contaCorrenteCliente4.depositar(1000);
// Crie um cliente que possua uma ContaPoupanca
const contapoupancaCliente5 = new contapoupanca(0, '333');
const cliente5 = new Cliente(true, '234-458-487-01' ,'(98) 98849-5432', 'Joneilson', [enderecoCliente], contapoupancaCliente5);
// Efetue um depósito de 1000 reais nessa conta Poupanca
contapoupancaCliente5.depositar(1000);
// Efetue uma transferência de 500 reais da ContaCorrente para ContaPoupanca
contaCorrenteCliente4.transferir(contapoupancaCliente5, 500);


/****************************  APLICAÇÃO 5  ***************************/
const enderecoClienteAplicacao5 = new Endereco('64057-034', 'rua-9', '12', 'casa', 'São Luís', 'MA');
const contaPoupancaAplicacao5 = new contapoupanca(1, '999');

// Crie um cliente que possua uma ContaPoupanca
const clienteAplicacao5 = new Cliente(true, '234-458-487-01' ,'(98) 98849-5432', 'Joneilson', [enderecoClienteAplicacao5], contaPoupancaAplicacao5);
// Defina a rentabilidadeMensal em 1%
// Efetue 1 depósito por mês de 200 reais do dia 01/01/2022 até 31/12/2022
for(let i = 1; i <= 12; i++) {
    // Efetue um saque de 100 reais no dia 05/03/2022
    if(i === 3) {
        contaPoupancaAplicacao5.sacar(100, new Date(2022, i, 5))
    }
    // Efetue um saque de 200 reais no dia 08/07/2022
    if(i === 7) {
        contaPoupancaAplicacao5.sacar(200, new Date(2022, i, 8))
    }
    contaPoupancaAplicacao5.depositar(200, new Date(2022, i, 1));
}

// Calcule o saldo da conta poupança considerando os rendimentos
console.log(`Saldo da conta: ${contaPoupancaAplicacao5.calcularSaldo()} ---  Rendimento: ${contaPoupancaAplicacao5.calcularRendimento()}`)