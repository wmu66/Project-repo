import SmallTitle from "./SmallTitle.jsx";
import ContributingItem from "./ContributingItem.jsx";
import { getList } from "./Data.jsx";

const TopContributors = () => {
  const list = getList();
  let calList = [];
  let fatList = [];
  let proteinList = [];
  let carbList = [];
  let sugarList = [];
  let fiberList = [];
  for (let i in list) {
    //console.log(i);
    calList.push({
      name: i,
      amount: list[i]["Caloric Value"],
      count: list[i]["amount"],
    });
    fatList.push({ name: i, amount: list[i]["Fat"], count: list[i]["amount"] });
    proteinList.push({
      name: i,
      amount: list[i]["Protein"],
      count: list[i]["amount"],
    });
    carbList.push({
      name: i,
      amount: list[i]["Carbohydrates"],
      count: list[i]["amount"],
    });
    sugarList.push({
      name: i,
      amount: list[i]["Sugars"],
      count: list[i]["amount"],
    });
    fiberList.push({
      name: i,
      amount: list[i]["Dietary Fiber"],
      count: list[i]["amount"],
    });
  }
  calList.sort((a, b) => {
    return b.amount - a.amount;
  });
  calList = calList.slice(0, 3); //only show the top 3 elements
  fatList.sort((a, b) => {
    return b.amount - a.amount;
  });
  fatList = fatList.slice(0, 3);
  proteinList.sort((a, b) => {
    return b.amount - a.amount;
  });
  proteinList = proteinList.slice(0, 3);
  carbList.sort((a, b) => {
    return b.amount - a.amount;
  });
  carbList = carbList.slice(0, 3);
  sugarList.sort((a, b) => {
    return b.amount - a.amount;
  });
  sugarList = carbList.slice(0, 3);
  fiberList.sort((a, b) => {
    return b.amount - a.amount;
  });
  fiberList = fiberList.slice(0, 3);

  //console.log(calList);
  return (
    <>
      <div>
        <SmallTitle customClass="w300">Top contributors</SmallTitle>
      </div>
      <div className="editor-column-div medium" id="top-contributors">
        <SmallTitle customClass="contributing medium">Calories</SmallTitle>
        {calList.map((obj) => (
          <ContributingItem
            text={obj.name}
            value={obj.amount}
            measurement="kcal"
            amount={obj.count}
          />
        ))}
        <SmallTitle customClass="contributing medium">Fat</SmallTitle>
        {fatList.map((obj) => (
          <ContributingItem
            text={obj.name}
            value={obj.amount}
            measurement="g"
            amount={obj.count}
          />
        ))}
        <SmallTitle customClass="contributing medium">Carbohydrates</SmallTitle>
        {carbList.map((obj) => (
          <ContributingItem
            text={obj.name}
            value={obj.amount}
            measurement="g"
            amount={obj.count}
          />
        ))}
        <SmallTitle customClass="contributing medium">Sugar</SmallTitle>
        {sugarList.map((obj) => (
          <ContributingItem
            text={obj.name}
            value={obj.amount}
            measurement="g"
            amount={obj.count}
          />
        ))}
        <SmallTitle customClass="contributing medium">Protein</SmallTitle>
        {proteinList.map((obj) => (
          <ContributingItem
            text={obj.name}
            value={obj.amount}
            measurement="g"
            amount={obj.count}
          />
        ))}
        <SmallTitle customClass="contributing medium">Dietary Fiber</SmallTitle>
        {fiberList.map((obj) => (
          <ContributingItem
            text={obj.name}
            value={obj.amount}
            measurement="g"
            amount={obj.count}
          />
        ))}
      </div>
    </>
  );
};

export default TopContributors;
