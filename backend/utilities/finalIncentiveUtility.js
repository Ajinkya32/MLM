const { incentiveUtil } = require("./nestedChildren");

const MemberSchema = require("../schemas/memberSchema");
const ReferenceSchema = require("../schemas/referenceSchema");
const LeadershipRewards = require("../schemas/leadershipRewardsSchema");

const { level1Util } = require("./1");
const { level2Util } = require("./2");
const { level3Util } = require("./3");
const { level4Util } = require("./4");
const { level5Util } = require("./5");
const { level6Util } = require("./6");
const { level7Util } = require("./7");
const { level8Util } = require("./8");

const finalIncentiveUtility = async (array, memberId) => {
  const data = await array.filter((e) => e.memberId.toString() === memberId.toString());

  const incentiveArray = await incentiveUtil(array, data[0]);

  const finalArray = [data[0], ...incentiveArray];

  let finalIncentives = [];

  let money = [100, 50, 25, 20, 15, 10, 5];

  for (let i = 0; i < finalArray.length; i++) {
    // if (finalArray[i].referedByMemberId) {
    if (finalArray[i].branch === "branchA" || finalArray[i].branch === "branchB") {
      //   console.log(finalArray[i].branch);
      if (money[i]) {
        let memberId = finalArray[i].referedByMemberId;
        let currentMoney = money[i];
        let data = { memberId: memberId, money: currentMoney };
        finalIncentives.push(data);
      }

      const parent = await MemberSchema.findOne({ _id: finalArray[i].referedByMemberId }).lean();

      // console.log(parent);

      if (i === 0) {
        await MemberSchema.findOneAndUpdate({ _id: finalArray[i].referedByMemberId }, { $set: { level1: [...parent.level1, memberId] } });
      } else if (i === 1) {
        await MemberSchema.findOneAndUpdate({ _id: finalArray[i].referedByMemberId }, { $set: { level2: [...parent.level2, memberId] } });

        let count = parent.level2.length + 1;

        if (parent.level === 1 && count === 6) {
          await Promise.all([
            MemberSchema.findOneAndUpdate({ _id: finalArray[i].referedByMemberId }, { $inc: { level: 1 } }),
            ReferenceSchema.findOneAndUpdate({ memberId: finalArray[i].referedByMemberId }, { $inc: { level: 1 } }),
          ]);
        }
      } else if (i === 2) {
        await MemberSchema.findOneAndUpdate({ _id: finalArray[i].referedByMemberId }, { $set: { level3: [...parent.level3, memberId] } });

        let count = parent.level3.length + 1;

        if (parent.level === 2 && count === 18) {
          await Promise.all([
            MemberSchema.findOneAndUpdate({ _id: finalArray[i].referedByMemberId }, { $inc: { level: 1 } }),
            ReferenceSchema.findOneAndUpdate({ memberId: finalArray[i].referedByMemberId }, { $inc: { level: 1 } }),
            LeadershipRewards.create({ memberId: finalArray[i].referedByMemberId, rewards: "Gold Medal or Rs 120" }),
          ]);
        }
      } else if (i === 3) {
        await MemberSchema.findOneAndUpdate({ _id: finalArray[i].referedByMemberId }, { $set: { level4: [...parent.level4, memberId] } });

        let count = parent.level4.length + 1;

        if (parent.level === 3 && count === 54) {
          await Promise.all([
            MemberSchema.findOneAndUpdate({ _id: finalArray[i].referedByMemberId }, { $inc: { level: 1 } }),
            ReferenceSchema.findOneAndUpdate({ memberId: finalArray[i].referedByMemberId }, { $inc: { level: 1 } }),
            LeadershipRewards.create({ memberId: finalArray[i].referedByMemberId, rewards: "ATM Bag or Rs 500" }),
          ]);
        }
      } else if (i === 4) {
        await MemberSchema.findOneAndUpdate({ _id: finalArray[i].referedByMemberId }, { $set: { level5: [...parent.level5, memberId] } });

        let count = parent.level5.length + 1;

        if (parent.level === 4 && count === 162) {
          await Promise.all([
            MemberSchema.findOneAndUpdate({ _id: finalArray[i].referedByMemberId }, { $inc: { level: 1 } }),
            ReferenceSchema.findOneAndUpdate({ memberId: finalArray[i].referedByMemberId }, { $inc: { level: 1 } }),
            LeadershipRewards.create({ memberId: finalArray[i].referedByMemberId, rewards: "Smart Watch or Rs 2000" }),
          ]);
        }
      } else if (i === 5) {
        await MemberSchema.findOneAndUpdate({ _id: finalArray[i].referedByMemberId }, { $set: { level6: [...parent.level6, memberId] } });

        let count = parent.level6.length + 1;

        if (parent.level === 5 && count === 486) {
          await Promise.all([
            MemberSchema.findOneAndUpdate({ _id: finalArray[i].referedByMemberId }, { $inc: { level: 1 } }),
            ReferenceSchema.findOneAndUpdate({ memberId: finalArray[i].referedByMemberId }, { $inc: { level: 1 } }),
            LeadershipRewards.create({ memberId: finalArray[i].referedByMemberId, rewards: "TV or Rs 7000" }),
          ]);
        }
      } else if (i === 6) {
        await MemberSchema.findOneAndUpdate({ _id: finalArray[i].referedByMemberId }, { $set: { level7: [...parent.level7, memberId] } });

        let count = parent.level7.length + 1;

        if (parent.level === 6 && count === 1458) {
          await Promise.all([
            MemberSchema.findOneAndUpdate({ _id: finalArray[i].referedByMemberId }, { $inc: { level: 1 } }),
            ReferenceSchema.findOneAndUpdate({ memberId: finalArray[i].referedByMemberId }, { $inc: { level: 1 } }),
            LeadershipRewards.create({ memberId: finalArray[i].referedByMemberId, rewards: "Smart Phone or Rs 19,000" }),
          ]);
        }
      } else if (i === 7) {
        await MemberSchema.findOneAndUpdate({ _id: finalArray[i].referedByMemberId }, { $set: { level8: [...parent.level8, memberId] } });

        let count = parent.level8.length + 1;

        if (parent.level === 7 && count === 4374) {
          await Promise.all([
            MemberSchema.findOneAndUpdate({ _id: finalArray[i].referedByMemberId }, { $inc: { level: 1 } }),
            ReferenceSchema.findOneAndUpdate({ memberId: finalArray[i].referedByMemberId }, { $inc: { level: 1 } }),
            LeadershipRewards.create({ memberId: finalArray[i].referedByMemberId, rewards: "Laptop or Rs 30,000" }),
          ]);
        }
      } else if (i === 8) {
        await MemberSchema.findOneAndUpdate({ _id: finalArray[i].referedByMemberId }, { $set: { level9: [...parent.level9, memberId] } });

        let count = parent.level9.length + 1;

        if (parent.level === 8 && count === 13122) {
          await Promise.all([
            MemberSchema.findOneAndUpdate({ _id: finalArray[i].referedByMemberId }, { $inc: { level: 1 } }),
            ReferenceSchema.findOneAndUpdate({ memberId: finalArray[i].referedByMemberId }, { $inc: { level: 1 } }),
            LeadershipRewards.create({ memberId: finalArray[i].referedByMemberId, rewards: "Rs 50,000 Cheque" }),
          ]);
        }
      } else if (i === 9) {
        await MemberSchema.findOneAndUpdate({ _id: finalArray[i].referedByMemberId }, { $set: { level10: [...parent.level10, memberId] } });

        let count = parent.level10.length + 1;

        if (parent.level === 9 && count === 39366) {
          await Promise.all([
            MemberSchema.findOneAndUpdate({ _id: finalArray[i].referedByMemberId }, { $inc: { level: 1 } }),
            ReferenceSchema.findOneAndUpdate({ memberId: finalArray[i].referedByMemberId }, { $inc: { level: 1 } }),
            LeadershipRewards.create({ memberId: finalArray[i].referedByMemberId, rewards: "Bike or Rs 2,00,000" }),
          ]);
        }
      } else if (i === 10) {
        await MemberSchema.findOneAndUpdate({ _id: finalArray[i].referedByMemberId }, { $set: { level11: [...parent.level11, memberId] } });

        let count = parent.level11.length + 1;

        if (parent.level === 10 && count === 118098) {
          await Promise.all([
            MemberSchema.findOneAndUpdate({ _id: finalArray[i].referedByMemberId }, { $inc: { level: 1 } }),
            ReferenceSchema.findOneAndUpdate({ memberId: finalArray[i].referedByMemberId }, { $inc: { level: 1 } }),
            LeadershipRewards.create({ memberId: finalArray[i].referedByMemberId, rewards: "Car or Rs 8,00,000" }),
          ]);
        }
      } else if (i === 11) {
        await MemberSchema.findOneAndUpdate({ _id: finalArray[i].referedByMemberId }, { $set: { level12: [...parent.level12, memberId] } });

        let count = parent.level12.length + 1;

        if (parent.level === 11 && count === 354294) {
          await Promise.all([
            MemberSchema.findOneAndUpdate({ _id: finalArray[i].referedByMemberId }, { $inc: { level: 1 } }),
            ReferenceSchema.findOneAndUpdate({ memberId: finalArray[i].referedByMemberId }, { $inc: { level: 1 } }),
            LeadershipRewards.create({ memberId: finalArray[i].referedByMemberId, rewards: "Rs 10,00,000 Cheque" }),
          ]);
        }
      } else if (i === 12) {
        await MemberSchema.findOneAndUpdate({ _id: finalArray[i].referedByMemberId }, { $set: { level13: [...parent.level13, memberId] } });

        let count = parent.level13.length + 1;

        if (parent.level === 12 && count === 1062882) {
          await Promise.all([
            MemberSchema.findOneAndUpdate({ _id: finalArray[i].referedByMemberId }, { $inc: { level: 1 } }),
            ReferenceSchema.findOneAndUpdate({ memberId: finalArray[i].referedByMemberId }, { $inc: { level: 1 } }),
            LeadershipRewards.create({ memberId: finalArray[i].referedByMemberId, rewards: "Flat or Rs 37,00,000" }),
          ]);
        }
      } else if (i === 13) {
        await MemberSchema.findOneAndUpdate({ _id: finalArray[i].referedByMemberId }, { $set: { level14: [...parent.level14, memberId] } });

        let count = parent.level14.length + 1;

        if (parent.level === 13 && count === 3188646) {
          await Promise.all([
            MemberSchema.findOneAndUpdate({ _id: finalArray[i].referedByMemberId }, { $inc: { level: 1 } }),
            ReferenceSchema.findOneAndUpdate({ memberId: finalArray[i].referedByMemberId }, { $inc: { level: 1 } }),
            LeadershipRewards.create({ memberId: finalArray[i].referedByMemberId, rewards: "Rs 50,00,000 Cheque" }),
          ]);
        }
      } else if (i === 14) {
        await MemberSchema.findOneAndUpdate({ _id: finalArray[i].referedByMemberId }, { $set: { level15: [...parent.level15, memberId] } });

        let count = parent.level15.length + 1;

        if (parent.level === 14 && count === 9565938) {
          await Promise.all([
            MemberSchema.findOneAndUpdate({ _id: finalArray[i].referedByMemberId }, { $inc: { level: 1 } }),
            ReferenceSchema.findOneAndUpdate({ memberId: finalArray[i].referedByMemberId }, { $inc: { level: 1 } }),
            LeadershipRewards.create({ memberId: finalArray[i].referedByMemberId, rewards: "Rs 1 Crore Cheque" }),
          ]);
        }
      }
    } else {
      if (i !== 0) {
        // console.log(i);
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
        } else if (i === 3) {
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
        } else if (i === 4) {
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
        } else if (i === 5) {
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
        } else if (i === 6) {
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
        } else if (i === 7) {
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
        } else if (i === 8) {
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
        } else if (i === 9) {
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
      } else {
        let memberIdParent = finalArray[i].referedByMemberId;

        let data = { memberId: memberIdParent, money: 300 };
        finalIncentives.push(data);

        const parent = await MemberSchema.findById(finalArray[i].referedByMemberId);

        if (parent) {
          const level1 = [...parent.level1, memberId];
          const update = { $set: { level1 }, $inc: { level: 1 } };

          await Promise.all([
            MemberSchema.findByIdAndUpdate(parent._id, update),
            ReferenceSchema.updateOne({ memberId: parent._id }, { $inc: { level: 1 } }),
          ]);
        }
      }
    }
    // } else {
    //   break;
    // }
  }

  finalIncentives.map((e) => {
    console.log(e);
  });
  console.log("done");
  return finalIncentives;
};

module.exports = { finalIncentiveUtility };
