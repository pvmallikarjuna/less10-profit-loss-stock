const buyingPrice = document.querySelector("#buy-price");
const numOfStocks = document.querySelector("#stock-quantity");
const currentPrice = document.querySelector("#current-price");

const submitButton = document.querySelector("#submit-btn");
const outputBox = document.querySelector("#output-box");

submitButton.addEventListener('click',submitHandler);

function submitHandler(){
    var bp = Number(buyingPrice.value);
    var nos = Number(numOfStocks.value);
    var curr = Number(currentPrice.value);

    calcProfitAndLoss(bp,nos,curr);
}

function calcProfitAndLoss(buyingPrice, numOfStocks, currentPrice) {
  //Loss
  if (buyingPrice > currentPrice) {
    var loss = (buyingPrice - currentPrice) * numOfStocks;
    var lossPercent = ((loss/(buyingPrice*numOfStocks))*100).toFixed(2);
    if(lossPercent>50){
      document.body.style.backgroundColor = "red";
    }else{
      document.body.style.backgroundColor = "#3A2A8A";
    }

  showOutput(`Sorry bruh 😪, you lost ${loss} and the Loss percentage is ${lossPercent}%`);
 
  } else if (buyingPrice < currentPrice) {
    //Profit
    var profit = (currentPrice - buyingPrice) * numOfStocks; 
    var profiPercent = ((profit/(buyingPrice*numOfStocks))*100).toFixed(2);


  showOutput(`Yay bruh 🥂, you made a profit of ${profit} and that is ${profiPercent}% gain`);

  } else {
    //Breakeven
  showOutput("No profit, No Loss - You gotta wait");
  }
}

function showOutput(msg){
    outputBox.innerHTML = msg;
}

calcProfitAndLoss(10,3,30);
