
var inputDisplay = document.getElementById("inputDisplay")
inputDisplay.value = ""
var Tricherie 

function verif_nbr() {
    var input = document.getElementById("input").value
    
    
    


    for(let number of input) {


    
    if (number != 1 && number != 0){
        document.getElementById("input").value = input.replace(number, "")

        } else if (number == 1 || number == 0) {
        binaryToDecimal(input)
        }
    }
    

}



function binaryToDecimal(input) {
    input = document.getElementById("input").value
    var Tricherie = false
    let binaryEquivalent
    let binaire = 0
    let i
    let puissance = input.length-1
    //  alert(input)




        for(let number of input) {

            

            if (number == 1) {
                binaryEquivalent = 2**puissance
            }

            else if (number == 0) {
                binaryEquivalent = 0
            }

            else { 
                Tricherie = true

             }
            
        
            puissance = puissance -1

            console.log(number + " / "+ binaryEquivalent)
            binaire += binaryEquivalent
            

        }

        

    if (! Tricherie) {
        
        inputDisplay.style.color = "white";
        inputDisplay.value = binaire 
        document.getElementById("input").value = input.replace(" ","0") // obligé sinon les espaces comptent pour des 0


    }
    else if (Tricherie) {
        inputDisplay.style.color = "red";
        inputDisplay.value = "Incorrect";
    }
 }

 function DecimalToBinary() {
    document.getElementById("inputDisplay").value = document.getElementById("inputDisplay").value.replace(".","") // interdit les nombres a virgules
    let nombre = document.getElementById("inputDisplay").value
    let liste = []
    resultBinaire = ""
    while (nombre !== 0) {
        liste.push(nombre %2)
        console.log(liste)
        nombre = Math.floor(nombre/2)

        console.log(nombre)
    }
    liste = liste.reverse()
    
    for(let element of liste) {
        resultBinaire += element
    }
    console.log(resultBinaire) 
    document.getElementById("input").value = resultBinaire
    

}
