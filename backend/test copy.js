const array = require("./references.json");
const { incentiveUtil } = require("./utilities/nestedChildren");

const data = array.filter((e) => e.memberId === "64232156da77f4feb24bf2a8");

const incentiveArray = incentiveUtil(array, data[0]);

const finalArray = [data[0], ...incentiveArray];

finalArray.map((e) => {
  console.log(e.branch);
});

let finalIncentives = [];

let money = [100, 50, 25, 25, 20, 15, 10];

for (let i = 0; i < finalArray.length; i++) {
  if (finalArray[i].referedByMemberId !== "") {
    if (finalArray[i].branch === "branchA" || finalArray[i].branch === "branchB") {
      //   console.log(finalArray[i].branch);
      if (money[i]) {
        let memberId = finalArray[i].referedByMemberId;
        let currentMoney = money[i];
        let data = { memberId: memberId, money: currentMoney };
        finalIncentives.push(data);
      } else {
        continue;
      }
    } else {
      if (i !== 0) {
        console.log(i);
        let memberId = finalArray[i].referedByMemberId;
        if (i === 1) {
          if (finalArray[i - 1].branch === "branchA" || finalArray[i - 1].branch === "branchB") {
            let data = { memberId: memberId, money: 200 };
            finalIncentives.push(data);
          } else {
            let data = { memberId: memberId, money: 150 };
            finalIncentives.push(data);
          }
        } else if (i === 2) {
          if (finalArray[i - 1].branch === "branchA" || finalArray[i - 1].branch === "branchB") {
            let data = { memberId: memberId, money: 200 };
            finalIncentives.push(data);
          } else if (
            (finalArray[i - 1].branch === "branchC" && finalArray[i - 2].branch === "branchB") ||
            (finalArray[i - 1].branch === "branchC" && finalArray[i - 2].branch === "branchA")
          ) {
            let data = { memberId: memberId, money: 150 };
            finalIncentives.push(data);
          } else {
            let data = { memberId: memberId, money: 100 };
            finalIncentives.push(data);
          }
        } else if (i === 3) {
          if (finalArray[i - 1].branch === "branchA" || finalArray[i - 1].branch === "branchB") {
            let data = { memberId: memberId, money: 150 };
            finalIncentives.push(data);
          } else if (
            (finalArray[i - 1].branch === "branchC" && finalArray[i - 2].branch === "branchB") ||
            (finalArray[i - 1].branch === "branchC" && finalArray[i - 2].branch === "branchA")
          ) {
            let data = { memberId: memberId, money: 150 };
            finalIncentives.push(data);
          } else if (finalArray[i - 1].branch === "branchC" && finalArray[i - 2].branch === "branchC" && finalArray[i - 3].branch === "branchC") {
            let data = { memberId: memberId, money: 50 };
            finalIncentives.push(data);
          } else {
            let data = { memberId: memberId, money: 100 };
            finalIncentives.push(data);
          }
        } else if (i === 4) {
          if (finalArray[i - 1].branch === "branchA" || finalArray[i - 1].branch === "branchB") {
            let data = { memberId: memberId, money: 100 };
            finalIncentives.push(data);
          } else if (
            (finalArray[i - 1].branch === "branchC" && finalArray[i - 2].branch === "branchB") ||
            (finalArray[i - 1].branch === "branchC" && finalArray[i - 2].branch === "branchA")
          ) {
            let data = { memberId: memberId, money: 100 };
            finalIncentives.push(data);
          } else if (
            finalArray[i - 1].branch === "branchC" &&
            finalArray[i - 2].branch === "branchC" &&
            finalArray[i - 3].branch === "branchC" &&
            finalArray[i - 4].branch === "branchC"
          ) {
            let data = { memberId: memberId, money: 25 };
            finalIncentives.push(data);
          } else if (finalArray[i - 1].branch === "branchC" && finalArray[i - 2].branch === "branchC" && finalArray[i - 3].branch === "branchC") {
            let data = { memberId: memberId, money: 50 };
            finalIncentives.push(data);
          } else if (
            (finalArray[i - 1].branch === "branchC" && finalArray[i - 2].branch === "branchC" && finalArray[i - 3].branch === "branchA") ||
            (finalArray[i - 1].branch === "branchC" && finalArray[i - 2].branch === "branchC" && finalArray[i - 3].branch === "branchB")
          ) {
            let data = { memberId: memberId, money: 100 };
            finalIncentives.push(data);
          } else {
            let data = { memberId: memberId, money: 50 };
            finalIncentives.push(data);
          }
        } else if (i === 5) {
          if (finalArray[i - 1].branch === "branchA" || finalArray[i - 1].branch === "branchB") {
            let data = { memberId: memberId, money: 50 };
            finalIncentives.push(data);
          } else if (
            (finalArray[i - 1].branch === "branchC" && finalArray[i - 2].branch === "branchB") ||
            (finalArray[i - 1].branch === "branchC" && finalArray[i - 2].branch === "branchA")
          ) {
            let data = { memberId: memberId, money: 50 };
            finalIncentives.push(data);
          } else if (
            finalArray[i - 1].branch === "branchC" &&
            finalArray[i - 2].branch === "branchC" &&
            finalArray[i - 3].branch === "branchC" &&
            finalArray[i - 4].branch === "branchC" &&
            finalArray[i - 5].branch === "branchC"
          ) {
            let data = { memberId: memberId, money: 20 };
            finalIncentives.push(data);
          } else if (
            finalArray[i - 1].branch === "branchC" &&
            finalArray[i - 2].branch === "branchC" &&
            finalArray[i - 3].branch === "branchC" &&
            finalArray[i - 4].branch === "branchC"
          ) {
            let data = { memberId: memberId, money: 25 };
            finalIncentives.push(data);
          } else if (
            (finalArray[i - 1].branch === "branchC" &&
              finalArray[i - 2].branch === "branchC" &&
              finalArray[i - 3].branch === "branchC" &&
              finalArray[i - 4].branch === "branchA") ||
            (finalArray[i - 1].branch === "branchC" &&
              finalArray[i - 2].branch === "branchC" &&
              finalArray[i - 3].branch === "branchC" &&
              finalArray[i - 4].branch === "branchB")
          ) {
            let data = { memberId: memberId, money: 50 };
            finalIncentives.push(data);
          } else {
            let data = { memberId: memberId, money: 25 };
            finalIncentives.push(data);
          }
        } else if (i === 6) {
          if (finalArray[i - 1].branch === "branchA" || finalArray[i - 1].branch === "branchB") {
            console.log("a");
            let data = { memberId: memberId, money: 25 };
            finalIncentives.push(data);
          } else if (
            (finalArray[i - 1].branch === "branchC" && finalArray[i - 2].branch === "branchB") ||
            (finalArray[i - 1].branch === "branchC" && finalArray[i - 2].branch === "branchA")
          ) {
            console.log("b");
            let data = { memberId: memberId, money: 25 };
            finalIncentives.push(data);
          } else if (
            finalArray[i - 1].branch === "branchC" &&
            finalArray[i - 2].branch === "branchC" &&
            finalArray[i - 3].branch === "branchC" &&
            finalArray[i - 4].branch === "branchC" &&
            finalArray[i - 5].branch === "branchC" &&
            finalArray[i - 6].branch === "branchC"
          ) {
            console.log("c");
            let data = { memberId: memberId, money: 15 };
            finalIncentives.push(data);
          } else if (
            finalArray[i - 1].branch === "branchC" &&
            finalArray[i - 2].branch === "branchC" &&
            finalArray[i - 3].branch === "branchC" &&
            finalArray[i - 4].branch === "branchC" &&
            finalArray[i - 5].branch === "branchC"
          ) {
            console.log("d");
            let data = { memberId: memberId, money: 20 };
            finalIncentives.push(data);
          } else if (
            (finalArray[i - 1].branch === "branchC" &&
              finalArray[i - 2].branch === "branchC" &&
              finalArray[i - 3].branch === "branchC" &&
              finalArray[i - 4].branch === "branchC" &&
              finalArray[i - 5].branch === "branchA") ||
            (finalArray[i - 1].branch === "branchC" &&
              finalArray[i - 2].branch === "branchC" &&
              finalArray[i - 3].branch === "branchC" &&
              finalArray[i - 4].branch === "branchC" &&
              finalArray[i - 5].branch === "branchB")
          ) {
            console.log("e");
            let data = { memberId: memberId, money: 25 };
            finalIncentives.push(data);
          } else {
            console.log("f");
            let data = { memberId: memberId, money: 20 };
            finalIncentives.push(data);
          }
        } else if (i === 7) {
          if (finalArray[i - 7].branch === "branchA" || finalArray[i - 7].branch === "branchB") {
            let data = { memberId: memberId, money: 15 };
            finalIncentives.push(data);
          } else {
            let data = { memberId: memberId, money: 10 };
            finalIncentives.push(data);
          }
        } else if (i === 8) {
          if (finalArray[i - 8].branch === "branchA" || finalArray[i - 8].branch === "branchB") {
            let data = { memberId: memberId, money: 10 };
            finalIncentives.push(data);
          } else {
            let data = { memberId: memberId, money: 5 };
            finalIncentives.push(data);
          }
        } else if (i === 9) {
          if (finalArray[i - 9].branch === "branchA" || finalArray[i - 9].branch === "branchB") {
            let data = { memberId: memberId, money: 5 };
            finalIncentives.push(data);
          } else {
            let data = { memberId: memberId, money: 0 };
            finalIncentives.push(data);
          }
        }
      } else {
        let memberId = finalArray[i].referedByMemberId;
        // let currentMoney = cBranchMoney[i];
        let data = { memberId: memberId, money: 300 };
        finalIncentives.push(data);
      }
    }
  } else {
    break;
  }
}
// console.log(finalIncentives);

finalIncentives.map((e) => {
  console.log(e);
});
