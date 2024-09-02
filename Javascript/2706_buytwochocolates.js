//ACCEPT

var buyChoco = function(prices, money) {
    let canbuy = false;
    let minsum = 0;
    let first = -1;
    let second = -1;
    let result = money;
    for (let i = 0; i < prices.length; i++){
        first = prices[i];
        for (let j = 0; j < prices.length;j++){
            second = prices[j];
            if (i != j && (money >= (first + second))){
                result = (money -(first+second));
                if (result >= 0){
                    canbuy = true;
                    console.log(result, (first+ second), money);
                    if (result > minsum){
                        minsum = result
                    }
                    
                }
            }
        }
    }
    if (canbuy == false){
        return money
    }
    return minsum
};