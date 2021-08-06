var totalNestCount = 12;
var totalSapCount = 36;
var TotalNeoSapCount = 0;
var round = 0;

function d6() {
    var newRoll = Math.ceil(Math.random() * 6);
    return newRoll;
}

var nestHive = {
    nestOne: {
        sapCount: 3,
        neoSapCount: 0,
        alive: true,
    },
    nestTwo: {
        sapCount: 3,
        neoSapCount: 0,
        alive: true,
    },
    nestThree: {
        sapCount: 3,
        neoSapCount: 0,
        alive: true,
    },
    nestFour: {
        sapCount: 3,
        neoSapCount: 0,
        alive: true,
    },
    nestFive: {
        sapCount: 3,
        neoSapCount: 0,
        alive: true,
    },
    nestSix: {
        sapCount: 3,
        neoSapCount: 0,
        alive: true,
    },
    nestSeven: {
        sapCount: 3,
        neoSapCount: 0,
        alive: true,
    },
    nestEight: {
        sapCount: 3,
        neoSapCount: 0,
        alive: true,
    },
    nestNine: {
        sapCount: 3,
        neoSapCount: 0,
        alive: true,
    },
    nestTen: {
        sapCount: 3,
        neoSapCount: 0,
        alive: true,
    },
    nestEleven: {
        sapCount: 20,
        neoSapCount: 0,
        alive: true,
    },
    nestTwelve: {
        sapCount: 3,
        neoSapCount: 0,
        alive: true,
    }
};

console.log(nestHive[10][0]);