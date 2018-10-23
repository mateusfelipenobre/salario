declare function require(msg : string) : any;
var readline = require('readline-sync');

import {Funcionario} from "./Funcionario"; 
import {Professor} from "./Professor";
import {STA} from "./STA";
import {Terceirizado} from "./Terceirizado";

let funcionarios: Funcionario[] = new Array();   
while(true){
let comando: string = readline.question("Escolher um comando: +Professor, +Sta , +Terceirizado, +Diaria, impSalario, status ou excluir. \n");
switch(comando){
    case"addProf":
	let nomeP: string = readline.question("Digite um nome: ");
	let c: string = readline.question("Digite a categoria: ");
	let prof: Professor = new Professor(nomeP, 0, c); 
    funcionarios.push(prof);
    console.log(prof);
    break;

    case "+Sta":
	let nomeSta:string = readline.question("Digite um nome: ");
	let nv:number = readline.question("Digite o nivel: ");
	let sta: STA = new STA(nomeSta, 0, nv);
    funcionarios.push (sta);
    console.log(sta);
    "\n"
    break;


    case "+Terceirizado":
	let nomeT:string = readline.question("Digite um nome: ");
	let horas:number = readline.question("Digite as horas: ");
	let insalubre: string = readline.question("Digite se for insalubre:");
	let ter: Terceirizado = new Terceirizado(nomeT, horas, true);
	if (insalubre == "não"){
        ter.setInsalubre(false);
        console.log(ter);        
	}
    funcionarios.push (ter);
    console.log(ter);
    "\n"
    break;

    case "+Diaria":
    let nome= readline.question("Digite o seu nome: ");
    for(let d of funcionarios){
        if(d.getNome() == nome){
            d.adicionarDiaria();
        }
    } 
    break;
   
   

    case "impSalario":
    let nomes= readline.question("Digite o seu nome: ");
    let salario: number;
    for(let x of funcionarios){ 
        if(x.getNome() == nomes){
            salario = x.calcularSalario();
            console.log("Salario:" + salario);
            break;
        }
    }

    break;

    case "excluir": 
    let nomeExcluir= readline.question("nome de quem vai ser excluido:");
    for(let i:number = 0; i < funcionarios.length; i++){ 
        if(funcionarios[i].getNome() == nomeExcluir) {
            funcionarios.splice(i, 1);
            break;
        }
    }
    break;
    
    case "+Bonus": 
    break;

    case "status":
	let mostra: string = readline.question("nome do funcionario: "); 
	let f: Funcionario|undefined = undefined;
	for(let i of funcionarios){
		if(i.getNome() == mostra){
			f = i;
		}
	}if (f == undefined){
		console.log("não existe");
    }else {
        console.log ("Nome: " + f.getNome() + "\n" + "Diaria: " + f.getDiaria() + "\n"+ "Salario: " + f.calcularSalario());
        
    }
    
    break;

}
}
