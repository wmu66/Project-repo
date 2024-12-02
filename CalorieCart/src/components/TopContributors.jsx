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
    calList.sort((a, b) => {return b.cals-a.amount})
    fatList.sort((a, b) => {return b.fats-a.amount})
    proteinList.sort((a, b) => {return b.fats-a.amount})
    carbList.sort((a, b) => {return b.fats-a.amount})
    fiberList.sort((a, b) => {return b.fats-a.amount})
  return (
    <>
        <div><SmallTitle customClass="w300">Top contributors</SmallTitle></div>
        <div className="editor-column-div medium">
            <SmallTitle customClass="contributing medium">Calories</SmallTitle>
            {Object.entries(calList).map((obj) => (
                <ContributingItem text={obj.name} value={obj.amount} measurement="kcal"/>
            ))}
                <ContributingItem text="Chocolate" value="300" measurement="kcal"/>
                <ContributingItem text="Popcorn" value="400" measurement="kcal"/>
            <SmallTitle customClass="contributing medium">Fat</SmallTitle>
                <ContributingItem text="Cheese" value="10" measurement="g"/>
                <ContributingItem text="Bacon" value="20" measurement="g"/>
            <SmallTitle customClass="contributing medium">Carbohydrates</SmallTitle>
                <ContributingItem text="Cheese" value="10" measurement="g"/>
                <ContributingItem text="Bacon" value="20" measurement="g"/>
            <SmallTitle customClass="contributing medium">Protein</SmallTitle>
                <ContributingItem text="Cheese" value="10" measurement="g"/>
                <ContributingItem text="Bacon" value="20" measurement="g"/>
        </div>

    </>
  );
};

export default TopContributors;
