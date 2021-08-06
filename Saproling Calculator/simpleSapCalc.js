var nestNumber = document.getElementById("nest-number");

nestNumber.innerText = "22";


var totalSapCount = 215;
var TotalNeoSapCount = 61;
var totalNestCount = 11;
var round = 5;

var sapArr = [totalSapCount, TotalNeoSapCount, totalNestCount, round];

function dice() {
    var newRoll = Math.ceil(Math.random() * 12);
    return newRoll;
}



function sapHive(sapArr) {
    if (round > 0) {
        for (i = 0; i <= sapArr[3]; i++) {
            sapArr[0] += (sapArr[2] * sapArr[3]);
            function evolve() {
                for (j = 0; j <= sapArr[0]; j++) {
                    if (dice() === 6) {
                        console.log("Evolve! Round " + i)
                        sapArr[0] -= 1;
                        sapArr[1] += 1;
                    } 
                }
                return sapArr[0];
                return sapArr[1];
            }
            evolve();
        }
    }
    return sapArr;     
}

console.log(sapHive(sapArr));