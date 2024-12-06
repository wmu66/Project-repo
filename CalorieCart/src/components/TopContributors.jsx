import SmallTitle from "./SmallTitle.jsx"
import ContributingItem from "./ContributingItem.jsx"
import { getList } from "./Data.jsx"

const TopContributors = () => {
    const list = getList();
    console.log(list);
    let calList = [];
    let fatList = [];
    let proteinList = [];
    let carbList = [];
    let fiberList = [];
    for (let i in list){
        calList.push({name: i, amount: list[i]["Caloric Value"]})
        fatList.push({name: i, amount: list[i]["Fat"]})
        proteinList.push({name: i, amount: list[i]["Protein"]})
        carbList.push({name: i, amount: list[i]["Carbohydrates"]})
        fiberList.push({name: i, amount: list[i]["Dietary Fiber"]})
    }
    calList.sort((a, b) => {return b.amount-a.amount})
    fatList.sort((a, b) => {return b.amount-a.amount})
    proteinList.sort((a, b) => {return b.amount-a.amount})
    carbList.sort((a, b) => {return b.amount-a.amount})
    fiberList.sort((a, b) => {return b.amount-a.amount})
    console.log(calList);
  return (
    <>
        <div><SmallTitle customClass="w300">Top contributors</SmallTitle></div>
        <div className="editor-column-div medium" id="top-contributors">
            <SmallTitle customClass="contributing medium">Calories</SmallTitle>
            {calList.map((obj) => (
                <ContributingItem text={obj.name} value={obj.amount} measurement="kcal"/>
            ))}
            <SmallTitle customClass="contributing medium">Fat</SmallTitle>
            {fatList.map((obj) => (
                <ContributingItem text={obj.name} value={obj.amount} measurement="g"/>
            ))}
            <SmallTitle customClass="contributing medium">Carbohydrates</SmallTitle>
            {carbList.map((obj) => (
                <ContributingItem text={obj.name} value={obj.amount} measurement="g"/>
            ))}
            <SmallTitle customClass="contributing medium">Protein</SmallTitle>
            {proteinList.map((obj) => (
                <ContributingItem text={obj.name} value={obj.amount} measurement="g"/>
            ))}
            <SmallTitle customClass="contributing medium">Dietary Fiber</SmallTitle>
            {fiberList.map((obj) => (
                <ContributingItem text={obj.name} value={obj.amount} measurement="g"/>
            ))}
        </div>

    </>
  );
};

export default TopContributors;
