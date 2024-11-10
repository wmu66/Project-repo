import SmallTitle from "./SmallTitle.jsx"
import ContributingItem from "./ContributingItem.jsx"

const TopContributors = () => {
  return (
    <>
        <div><SmallTitle customClass="w300">Top contributors</SmallTitle></div>
        <div className="editor-column-div medium">
            <SmallTitle customClass="contributing medium">Calories</SmallTitle>
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
  )
}

export default TopContributors