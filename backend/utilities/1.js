const { level2Util } = require("./2");
const { level3Util } = require("./3");
const { level4Util } = require("./4");
const { level5Util } = require("./5");
const { level6Util } = require("./6");
const { level7Util } = require("./7");
const { level8Util } = require("./8");

const level1Util = (finalArray, memberId) => {
  let finalIncentives = [];

  if (finalArray.length === 1) {
    if (finalArray[0].branch === "branchA" || finalArray[0].branch === "branchB") {
      let data = { memberId: memberId, money: 200 };
      finalIncentives.push(data);
    } else {
      let data = { memberId: memberId, money: 150 };
      finalIncentives.push(data);
    }
  } else if (finalArray.length === 2) {
    if (finalArray[1].branch === "branchA" || finalArray[1].branch === "branchB") {
      let currentArr = finalArray.splice(0, 1);
      const arr = level1Util(currentArr, memberId);
      finalIncentives.push(...arr);
    } else if (
      (finalArray[1].branch === "branchC" && finalArray[0].branch === "branchB") ||
      (finalArray[1].branch === "branchC" && finalArray[0].branch === "branchA")
    ) {
      let data = { memberId: memberId, money: 150 };
      finalIncentives.push(data);
    } else {
      let data = { memberId: memberId, money: 100 };
      finalIncentives.push(data);
    }
  } else if (finalArray.length === 3) {
    if (finalArray[2].branch === "branchA" || finalArray[2].branch === "branchB") {
      let currentArr = finalArray.splice(0, 2);
      const arr = level1Util(currentArr, memberId);
      finalIncentives.push(...arr);
    } else if (finalArray[1].branch === "branchA" || finalArray[1].branch === "branchB") {
      let currentArr = finalArray.splice(0, 1);
      const arr = level2Util(currentArr, memberId);
      finalIncentives.push(...arr);
    } else if (
      (finalArray[1].branch === "branchC" && finalArray[0].branch === "branchB") ||
      (finalArray[1].branch === "branchC" && finalArray[0].branch === "branchA")
    ) {
      let data = { memberId: memberId, money: 100 };
      finalIncentives.push(data);
    } else {
      let data = { memberId: memberId, money: 50 };
      finalIncentives.push(data);
    }
  } else if (finalArray.length === 4) {
    if (finalArray[3].branch === "branchA" || finalArray[3].branch === "branchB") {
      let currentArr = finalArray.splice(0, 3);
      const arr = level1Util(currentArr, memberId);
      finalIncentives.push(...arr);
    } else if (finalArray[2].branch === "branchA" || finalArray[2].branch === "branchB") {
      let currentArr = finalArray.splice(0, 2);
      const arr = level2Util(currentArr, memberId);
      finalIncentives.push(...arr);
    } else if (finalArray[1].branch === "branchA" || finalArray[1].branch === "branchB") {
      let currentArr = finalArray.splice(0, 1);
      const arr = level3Util(currentArr, memberId);
      finalIncentives.push(...arr);
    } else if (
      (finalArray[1].branch === "branchC" && finalArray[0].branch === "branchB") ||
      (finalArray[1].branch === "branchC" && finalArray[0].branch === "branchA")
    ) {
      let data = { memberId: memberId, money: 50 };
      finalIncentives.push(data);
    } else {
      let data = { memberId: memberId, money: 25 };
      finalIncentives.push(data);
    }
  } else if (finalArray.length === 5) {
    if (finalArray[4].branch === "branchA" || finalArray[4].branch === "branchB") {
      let currentArr = finalArray.splice(0, 4);
      const arr = level1Util(currentArr, memberId);
      finalIncentives.push(...arr);
    } else if (finalArray[3].branch === "branchA" || finalArray[3].branch === "branchB") {
      let currentArr = finalArray.splice(0, 3);
      const arr = level2Util(currentArr, memberId);
      finalIncentives.push(...arr);
    } else if (finalArray[2].branch === "branchA" || finalArray[2].branch === "branchB") {
      let currentArr = finalArray.splice(0, 2);
      const arr = level3Util(currentArr, memberId);
      finalIncentives.push(...arr);
    } else if (finalArray[1].branch === "branchA" || finalArray[1].branch === "branchB") {
      let currentArr = finalArray.splice(0, 1);
      const arr = level4Util(currentArr, memberId);
      finalIncentives.push(...arr);
    } else if (
      (finalArray[1].branch === "branchC" && finalArray[0].branch === "branchB") ||
      (finalArray[1].branch === "branchC" && finalArray[0].branch === "branchA")
    ) {
      let data = { memberId: memberId, money: 25 };
      finalIncentives.push(data);
    } else {
      let data = { memberId: memberId, money: 20 };
      finalIncentives.push(data);
    }
  } else if (finalArray.length === 6) {
    if (finalArray[5].branch === "branchA" || finalArray[5].branch === "branchB") {
      let currentArr = finalArray.splice(0, 5);
      const arr = level1Util(currentArr, memberId);
      finalIncentives.push(...arr);
    } else if (finalArray[4].branch === "branchA" || finalArray[4].branch === "branchB") {
      let currentArr = finalArray.splice(0, 4);
      const arr = level2Util(currentArr, memberId);
      finalIncentives.push(...arr);
    } else if (finalArray[3].branch === "branchA" || finalArray[3].branch === "branchB") {
      let currentArr = finalArray.splice(0, 3);
      const arr = level3Util(currentArr, memberId);
      finalIncentives.push(...arr);
    } else if (finalArray[2].branch === "branchA" || finalArray[2].branch === "branchB") {
      let currentArr = finalArray.splice(0, 2);
      const arr = level4Util(currentArr, memberId);
      finalIncentives.push(...arr);
    } else if (finalArray[1].branch === "branchA" || finalArray[1].branch === "branchB") {
      let currentArr = finalArray.splice(0, 1);
      const arr = level5Util(currentArr, memberId);
      finalIncentives.push(...arr);
    } else if (
      (finalArray[1].branch === "branchC" && finalArray[0].branch === "branchB") ||
      (finalArray[1].branch === "branchC" && finalArray[0].branch === "branchA")
    ) {
      let data = { memberId: memberId, money: 20 };
      finalIncentives.push(data);
    } else {
      let data = { memberId: memberId, money: 15 };
      finalIncentives.push(data);
    }
  } else if (finalArray.length === 7) {
    if (finalArray[6].branch === "branchA" || finalArray[6].branch === "branchB") {
      let currentArr = finalArray.splice(0, 6);
      const arr = level1Util(currentArr, memberId);
      finalIncentives.push(...arr);
    } else if (finalArray[5].branch === "branchA" || finalArray[5].branch === "branchB") {
      let currentArr = finalArray.splice(0, 5);
      const arr = level2Util(currentArr, memberId);
      finalIncentives.push(...arr);
    } else if (finalArray[4].branch === "branchA" || finalArray[4].branch === "branchB") {
      let currentArr = finalArray.splice(0, 4);
      const arr = level3Util(currentArr, memberId);
      finalIncentives.push(...arr);
    } else if (finalArray[3].branch === "branchA" || finalArray[3].branch === "branchB") {
      let currentArr = finalArray.splice(0, 3);
      const arr = level4Util(currentArr, memberId);
      finalIncentives.push(...arr);
    } else if (finalArray[2].branch === "branchA" || finalArray[2].branch === "branchB") {
      let currentArr = finalArray.splice(0, 2);
      const arr = level5Util(currentArr, memberId);
      finalIncentives.push(...arr);
    } else if (finalArray[1].branch === "branchA" || finalArray[1].branch === "branchB") {
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
  } else if (finalArray.length === 8) {
    if (finalArray[7].branch === "branchA" || finalArray[7].branch === "branchB") {
      let currentArr = finalArray.splice(0, 7);
      const arr = level1Util(currentArr, memberId);
      finalIncentives.push(...arr);
    } else if (finalArray[6].branch === "branchA" || finalArray[6].branch === "branchB") {
      let currentArr = finalArray.splice(0, 6);
      const arr = level2Util(currentArr, memberId);
      finalIncentives.push(...arr);
    } else if (finalArray[5].branch === "branchA" || finalArray[5].branch === "branchB") {
      let currentArr = finalArray.splice(0, 5);
      const arr = level3Util(currentArr, memberId);
      finalIncentives.push(...arr);
    } else if (finalArray[4].branch === "branchA" || finalArray[4].branch === "branchB") {
      let currentArr = finalArray.splice(0, 4);
      const arr = level4Util(currentArr, memberId);
      finalIncentives.push(...arr);
    } else if (finalArray[3].branch === "branchA" || finalArray[3].branch === "branchB") {
      let currentArr = finalArray.splice(0, 3);
      const arr = level5Util(currentArr, memberId);
      finalIncentives.push(...arr);
    } else if (finalArray[2].branch === "branchA" || finalArray[2].branch === "branchB") {
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
  } else if (finalArray.length === 9) {
    if (finalArray[8].branch === "branchA" || finalArray[8].branch === "branchB") {
      let currentArr = finalArray.splice(0, 8);
      const arr = level1Util(currentArr, memberId);
      finalIncentives.push(...arr);
    } else if (finalArray[7].branch === "branchA" || finalArray[7].branch === "branchB") {
      let currentArr = finalArray.splice(0, 7);
      const arr = level2Util(currentArr, memberId);
      finalIncentives.push(...arr);
    } else if (finalArray[6].branch === "branchA" || finalArray[6].branch === "branchB") {
      let currentArr = finalArray.splice(0, 6);
      const arr = level3Util(currentArr, memberId);
      finalIncentives.push(...arr);
    } else if (finalArray[5].branch === "branchA" || finalArray[5].branch === "branchB") {
      let currentArr = finalArray.splice(0, 5);
      const arr = level4Util(currentArr, memberId);
      finalIncentives.push(...arr);
    } else if (finalArray[4].branch === "branchA" || finalArray[4].branch === "branchB") {
      let currentArr = finalArray.splice(0, 4);
      const arr = level5Util(currentArr, memberId);
      finalIncentives.push(...arr);
    } else if (finalArray[3].branch === "branchA" || finalArray[3].branch === "branchB") {
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

module.exports = { level1Util };
