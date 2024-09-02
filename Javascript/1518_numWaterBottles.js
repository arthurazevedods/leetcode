var numWaterBottles = function(numBottles, numExchange) {
    let num = numBottles;
    while (numBottles >= numExchange){
        numBottles = numBottles - numExchange + 1
        num += 1
    }
    return num
};