

let hornerOutput = document.getElementById("hornerOutput")
let expression = ""

function input() {
    expression = ""
    let input;
    let compteur = 0
    let liste = [];
	
	
	
	
	y = prompt(`Entrez le degrée maximal (entre 0 et n) \n` )
		
		
		
		
    while (y !== -1) {
        var puissance =  y
		expressionShow = expression.replaceAll('</sup>','') // sert juste pour la fenêtre d'input
        input = prompt(`Entrez le nombre de degré  ${y} \n ${expressionShow} \n  Entrez le caractère "p", "P" ou "." pour placer le point ` )
        inputNbr = parseInt(input)
        if (input == "p"  || input=="P" || input=="." || isNaN(input) || input.length == 0) { // Si un nombre n'est pas entré, on passe à l'input qui demande le point
            while (liste.length <= y) {
                liste.push(0) // Ajoute des 0 quand on quitte car mon script horner se sert de la length de la liste afin de déterminer l'exponentiel : si on ajoute pas de 0 le calcul serait faux
                // de base l'alerte ne demandais pas le degrés maximal mais finalement la demande de degré maximal permet d'afficher l'expression en cours de saisie


            }
            break
        } else { // si un nombre est entré, on update l'expression et on update y
            liste.push(inputNbr)
			 y--
            compteur++
			
			
			
			
				let number = liste[liste.length -1 ]
				if (number < 0) {
                expression += `${Math.abs(number)} x^${puissance}</sup> - ` // Math.abs : retourne la valeur absolue du nombre , Présnece du </sup> pour plus tard pour que ce sois joli avec les petits nombres la 
				
				} else {
				
                expression += `${number}x^${puissance}</sup> + `
				}

				// y++ ancienne méthode
				 
				
		
            

        }

	// ANCIENNE METHODE D'INPUT
	// let y = 1
		 
        
        
    }
    
    expression =  expression.slice(0, -2) // Supprime le dernier + (pour la lisibilité)
    expressionShow = expression.replaceAll('</sup>','') // Pour avoir l'expression dans l'alerte qui demande le point
    console.log(expression)

    point = parseInt(prompt(`Entrez le point \n P(X) = ${expressionShow} \n x = ...`));

    if (isNaN(y) || isNaN(point)) { // Si on met des lettres alors qu'il faut mettre des nombres en inputs
        let phrase = ` <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"> Cliquez ici pour voir le résultat</a> `;
        hornerOutput.innerHTML = phrase;

    } else {
    
        horner(liste, point);
        console.log(liste);

    }
    
    


}




let listeTest = [-2,3,11,-6,0]




let pointTest = -2

function horner(liste, point) {
    i = 0
    let l2
    let l3 = liste[0] // liste des coefficients
    while (i+1 < liste.length) {

        console.log(l3)
        l2 = l3 * point
        l3 = liste[i+1] + l2
        console.log(l3)
        i++

    }
    result = l3
	expression = expression.replaceAll("^","<sup>") // pour mettre les minis nombres exponentiel : https://fr.wikipedia.org/wiki/Exposant_(typographie)#:~:text=En%20typographie%2C%20on%20appelle%20exposant,sym%C3%A9trique%20de%20l'indice).
    let phrase = `Soit P(x) = ${expression} : <br> P(${point}) = ${result} `
    hornerOutput.innerHTML = phrase;


    
}