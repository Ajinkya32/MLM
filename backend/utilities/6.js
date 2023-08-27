const { level7Util } = require("./7");
const { level8Util } = require("./8");

const level6Util = (finalArray, memberId) => {
  let finalIncentives = [];

  if (finalArray.length === 1) {
    if (finalArray[0].branch === "branchA" || finalArray[0].branch === "branchB") {
      let data = { memberId: memberId, money: 20 };
      finalIncentives.push(data);
    } else {
      let data = { memberId: memberId, money: 15 };
      finalIncentives.push(data);
    }
  } else if (finalArray.length === 2) {
    if (finalArray[1].branch === "branchA" || finalArray[1].branch === "branchB") {
      let currentArr = finalArray.splice(0, 1);
      const arr = level6Util(currentArr, memberId);
      finalIncentives.push(...arr);
    } else if (
      (finalArray[1].branch === "branchC" && finalArray[0].branch === "branchB") ||
      (finalArray[1].branch === "branchC" && finalArray[0].branch === "branchA")
    ) {
      let data = { memberId: memberId, money: 15 };
      finalIncentives.push(data);
    } else {
      let data = { memberId: memberId, money: 10 };
      finalIncentives.push(data);
    }
  } else if (finalArray.length === 3) {
    if (finalArray[2].branch === "branchA" || finalArray[2].branch === "branchB") {
      let currentArr = finalArray.splice(0, 2);
      const arr = level6Util(currentArr, memberId);
      finalIncentives.push(...arr);
    } else if (finalArray[1].branch === "branchA" || finalArray[1].branch === "branchB") {
      let currentArr = finalArray.splice(0, 1);
      const arr = level7Util(currentArr, memberId);
      finalIncentives.push(...arr);
    } else if (
      (finalArray[1].branch === "branchC" && finalArray[0].branch === "branchB") ||
      (finalArray[1].branch === "branchC" && finalArray[0].branch === "branchA")
    ) {
      let data = { memberId: memberId, money: 10 };
      finalIncentives.push(data);
    } else {
      let data = { memberId: memberId, money: 5 };
      finalIncentives.push(data);
    }
  } else if (finalArray.length === 4) {
    if (finalArray[3].branch === "branchA" || finalArray[3].branch === "branchB") {
      let currentArr = finalArray.splice(0, 3);
      const arr = level6Util(currentArr, memberId);
      finalIncentives.push(...arr);
    } else if (finalArray[2].branch === "branchA" || finalArray[2].branch === "branchB") {
      let currentArr = finalArray.splice(0, 2);
      const arr = level7Util(currentArr, memberId);
      finalIncentives.push(...arr);
    } else if (finalArray[1].branch === "branchA" || finalArray[1].branch === "branchB") {
      let currentArr = finalArray.splice(0, 1);
      const arr = level8Util(currentArr, memberId);
      finalIncentives.push(...arr);
    } else if (
      (finalArray[1].branch === "branchC" && finalArray[0].branch === "branchB") ||
      (finalArray[1].branch === "branchC" && finalArray[0].branch === "branchA")
    ) {
      let data = { memberId: memberId, money: 5 };
      finalIncentives.push(data);
    } else {
      let data = { memberId: memberId, money: 0 };
      finalIncentives.push(data);
    }
  }

  return finalIncentives;
};

module.exports = { level6Util };
