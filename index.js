// problem-01: convert seer to mon
function seerToMon(seer) {
  const mon = seer / 40;
  return mon;
}
const convert = seerToMon(240);
console.log(convert);

// problem-02: find out the total sales
function totalSales(tshirtQuantity, pantQuantity, shoesQuantity) {
  const tshirtPrice = 100;
  const pantPrice = 200;
  const shoesPrice = 500;

  const totalPrice =
    tshirtPrice * tshirtQuantity +
    pantPrice * pantQuantity +
    shoesPrice * shoesQuantity;

  return totalPrice;
}
const total = totalSales(1, 1, 2);
console.log(total);

// problem-03: find out delivery cost
function deliveryCost(tshirt) {
  if (tshirt <= 100) {
    const firstHundredTshirt = tshirt * 100;
    return firstHundredTshirt;
  } else if (tshirt > 100 && tshirt <= 200) {
    const firstHundredTshirt = 100 * 100;
    const secondHundredTshirt = (tshirt - 100) * 80;
    const total = firstHundredTshirt + secondHundredTshirt;
    return total;
  } else {
    const firstHundredTshirt = 100 * 100;
    const secondHundredTshirt = 100 * 80;
    const restTshirt = (tshirt - 200) * 50;
    const total = firstHundredTshirt + secondHundredTshirt + restTshirt;
    return total;
  }
}
const cost = deliveryCost(210);
console.log(cost);

// problem-04: find the perfect friend
const friendsArr = ["Rahi", "Rafi", "Shaon", "Shuvo", "Azim", "Adnan"];
function perfectFriend(arr) {
  for (let i = 0; i < arr.length; i++) {
    const friend = arr[i];
    if (friend.length == "5") {
      return friend;
    }
  }
}
const result = perfectFriend(friendsArr);
console.log(result);
