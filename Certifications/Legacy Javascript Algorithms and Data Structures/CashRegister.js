function checkCashRegister(price, cash, cid) {
  const currencyUnits = [
    ["PENNY", 0.01],
    ["NICKEL", 0.05],
    ["DIME", 0.1],
    ["QUARTER", 0.25],
    ["ONE", 1],
    ["FIVE", 5],
    ["TEN", 10],
    ["TWENTY", 20],
    ["ONE HUNDRED", 100]
  ];

  let changeDue = cash - price;

  let totalCid = cid.reduce((sum, coin) => sum + coin[1], 0);

  if (totalCid < changeDue) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  if (totalCid === changeDue) {
    return { status: "CLOSED", change: cid };
  }

  let changeArray = [];
  for (let i = currencyUnits.length - 1; i >= 0; i--) {
    const [unit, value] = currencyUnits[i];
    let coinTotal = cid[i][1];
    let coinName = cid[i][0];
    let coinsToReturn = 0;

    while (changeDue >= value && coinTotal > 0) {
      changeDue -= value;
      changeDue = Math.round(changeDue * 100) / 100;
      coinTotal -= value;
      coinsToReturn += value;
    }

    if (coinsToReturn > 0) {
      changeArray.push([coinName, coinsToReturn]);
    }
  }

  if (changeDue > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  return { status: "OPEN", change: changeArray };

}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);