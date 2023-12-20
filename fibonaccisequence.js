
//ACCEPT


var fibGenerator = function* () {
    /**
     * Em JavaScript, a palavra-chave yield é usada em funções geradoras para 
     * pausar a execução da função e retornar um valor. 
     * Quando você chama yield dentro de uma função geradora, ela interrompe 
     * temporariamente a execução da função e retorna o valor especificado. 
     * Isso permite que você retorne vários valores ao longo do tempo, mantendo 
     * o estado da função entre as chamadas
     */
    let prevprev = 0;
    let prev = 0;

    let callCount = 0;  // Track the number of calls to the generator
    let result = 0;
    let flag = false;
    while (callCount <= 50) {  // Adjust the limit based on your constraints

        if (prev == 0 && prevprev == 0){
            result = 0;
            prev = 1;
        }
        else if(prevprev == 0 && prev == 1){
            result = 1
            if (flag == true){
                prevprev = prev;
            }
            flag = true;
        }
        else{
            result = prev + prevprev;
            prevprev = prev;
            prev = result;
            
        }
        yield result;
        callCount++;
    }
};

/*examples */
const gen = fibGenerator();
gen.next().value; // 0
gen.next().value; // 1
gen.next().value; // 1
gen.next().value; // 2
gen.next().value; // 3


