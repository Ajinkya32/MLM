const array = require("./references.json");
const { incentiveUtil } = require("./utilities/nestedChildren");

const data = array.filter((e) => e.memberId === "642304830ef237c1ad9f96d2");

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
          if (finalArray[0].branch === "branchA" || finalArray[0].branch === "branchB") {
            let data = { memberId: memberId, money: 200 };
            finalIncentives.push(data);
          } else {
            let data = { memberId: memberId, money: 150 };
            finalIncentives.push(data);
          }
        } else if (i === 2) {
          if (finalArray[1].branch === "branchA" || finalArray[1].branch === "branchB") {
            let data = { memberId: memberId, money: 200 };
            finalIncentives.push(data);
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
        } else if (i === 3) {
          if (
            finalArray[1].branch === "branchA" ||
            finalArray[1].branch === "branchB" ||
            finalArray[2].branch === "branchA" ||
            finalArray[2].branch === "branchB"
          ) {
            let data = { memberId: memberId, money: 150 };
            finalIncentives.push(data);
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
        } else if (i === 4) {
          if (finalArray[3].branch === "branchA" || finalArray[3].branch === "branchB") {
            let data = { memberId: memberId, money: 200 };
            finalIncentives.push(data);
          } else if (
            finalArray[1].branch === "branchA" ||
            finalArray[1].branch === "branchB" ||
            finalArray[2].branch === "branchA" ||
            finalArray[2].branch === "branchB"
          ) {
            let data = { memberId: memberId, money: 100 };
            finalIncentives.push(data);
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
        } else if (i === 5) {
          if (finalArray[4].branch === "branchA" || finalArray[4].branch === "branchB") {
            let data = { memberId: memberId, money: 200 };
            finalIncentives.push(data);
          } else if (
            finalArray[1].branch === "branchA" ||
            finalArray[1].branch === "branchB" ||
            finalArray[2].branch === "branchA" ||
            finalArray[2].branch === "branchB"
          ) {
            let data = { memberId: memberId, money: 50 };
            finalIncentives.push(data);
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
        } else if (i === 6) {
          if (
            finalArray[1].branch === "branchA" ||
            finalArray[1].branch === "branchB" ||
            finalArray[2].branch === "branchA" ||
            finalArray[2].branch === "branchB"
          ) {
            let data = { memberId: memberId, money: 25 };
            finalIncentives.push(data);
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
        } else if (i === 7) {
          if (
            finalArray[1].branch === "branchA" ||
            finalArray[1].branch === "branchB" ||
            finalArray[2].branch === "branchA" ||
            finalArray[2].branch === "branchB"
          ) {
            let data = { memberId: memberId, money: 20 };
            finalIncentives.push(data);
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
        } else if (i === 8) {
          if (
            finalArray[1].branch === "branchA" ||
            finalArray[1].branch === "branchB" ||
            finalArray[2].branch === "branchA" ||
            finalArray[2].branch === "branchB"
          ) {
            let data = { memberId: memberId, money: 15 };
            finalIncentives.push(data);
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
        } else if (i === 9) {
          if (
            finalArray[1].branch === "branchA" ||
            finalArray[1].branch === "branchB" ||
            finalArray[2].branch === "branchA" ||
            finalArray[2].branch === "branchB"
          ) {
            let data = { memberId: memberId, money: 10 };
            finalIncentives.push(data);
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
