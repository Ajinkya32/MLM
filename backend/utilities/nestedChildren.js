const nestedChildren = function (array, data) {
  let ogArray = { ...array };

  let { _id, memberName, memberId, level, referedByMemberId, branch, parentBranch, createdAt } = ogArray[0];
  let finalArray = {
    _id,
    memberName,
    memberId,
    level,
    referedByMemberId,
    branch,
    parentBranch,
    createdAt,
  };

  let nestedArray = [];

  ogArray[0].referencesMemberId.map((e, index) => {
    let newArr = data.filter((a) => a.memberId.toString() === e.toString());

    if (newArr[0].referencesMemberId.length > 0) {
      nestedArray[index] = nestedChildren(newArr, data);
    } else {
      nestedArray[index] = newArr[0];
    }

    finalArray.referencesMemberId = nestedArray;
  });

  return finalArray;
};

const incentiveUtil = function (array, data) {
  let finalArray = [];

  if (data.referedByMemberId) {
    const parentData = array.filter((e) => e.memberId.toString() === data.referedByMemberId.toString());
    let newParent = [];
    if (parentData.length > 0 && parentData[0].referedByMemberId && parentData[0].referedByMemberId !== "") {
      newParent = incentiveUtil(array, parentData[0]);
    }

    finalArray = [...parentData, ...newParent];
  }

  return finalArray;
};

module.exports = {
  nestedChildren,
  incentiveUtil,
};
