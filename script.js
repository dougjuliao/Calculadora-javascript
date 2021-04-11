/*-----------------------------------------CALCULADORA----------------------------------------------------------*/
// pego os elementos li e div input
var btn 	  = document.querySelectorAll(".key li"),
	input 	  = document.querySelector(".input-valor"),
	operador  = document.querySelectorAll(".operador");

// Percorro o array para usar todas as informações
for(var i = 0; i < btn.length; i++){
	document.onkeydown = function(event){// Usando o onkeydown para poder usar o Backspace, pois o onkeypress não tem 
		var key = event.key; // Usando o comando key, por esse comando retornar uma string com o nome da tecla selecionada
		//console.log(key);
		for(var e = 0; e <= 9; e++){
			if(key == e){
				input.innerHTML += e; 
			}
		}
		switch (key){
			case "*":
				input.innerHTML += "*";
				break;
			case "+":
				input.innerHTML += "+";
				break;
			case "-":
				input.innerHTML += "-";
				break;
			case ".":
				input.innerHTML += ".";
				break;
			case "/":
				input.innerHTML += "/";
				break;
			case "Backspace":
				let str = "";
				str = input.innerHTML;
				input.innerHTML = str.slice(0, -1);
			break;	
			case "Enter":
				var equacao = input.innerHTML;
				if(equacao){
					try {
						input.innerHTML = eval(equacao);
					} catch (e) {
						alert('Erro na expressão');

					} 
				}
				break;
			case "c":
			case "C":
				input.innerHTML = "";
				break;						
			default:
				//console.log("Procurando erros?");
				break;
		}
	};
	btn[i].addEventListener('click',function(){
		var btnVal 	 = this.innerHTML,
			inputVal = input.innerHTML;
		//console.log(btnVal);

		// crio um clear caso o c for clicado
		switch (btnVal){
			case "c":
				input.innerHTML = "";
				break;
			case "=":
				// Crio a variável de equação aqui eu utilizo a função eval do javascript
				var equacao = inputVal;
				
				if(equacao){
					try {
						input.innerHTML = eval(equacao);
					} catch (e) {
						alert('Erro na expressão');

					} 
				}
				break;
			default:
				input.innerHTML += btnVal;
				break;	
		}

	});
}
