import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/Button.jsx";
import "../styles/list_editor.css";
import "../styles/stats.css";
import AccountEditButton from "../components/AccountEditButton";
import TopContributors from "../components/TopContributors.jsx";
import ValueSetter from "../components/ValueSetter.jsx";
import SpiderGraph from "../components/SpiderGraph.jsx";
import { getHealthAmounts, getListAmounts } from "../components/Data.jsx";
import ExpandingCard from "../components/ExpandingCard.jsx";
import { useState } from "react";

const StatsPage = () => {
  const { listID } = useParams();
  const goBack = () => navigate("/list_editor/" + listID);
  const navigate = useNavigate();
  const [seed, setSeed] = useState(1);
  const reset = () => {
    setSeed(Math.random());
  };

  const calorie_text =
    "Calories are crucial to your diet, as they contain the energy that your body needs to function properly. If your goal is to maintain your weight, then ideally you should be eating as much calories in a day as you burn. While if you would like to lose weight, then the best way is by eating less than you burn. If you eat more calories than you burn, then however you will likely gain weight. To get better recommendations you can change your target calorie value to align with how much exercise you do in a day.";

  const fats_text =
    "A small amount of fat is an essential part of a healthy diet. Fat is crucial in helping your body absorb vitamins, such as A, D and E. These three vitamins can only be absorbed with the help of fats. However, too much fat can be a serious health risk, as it increases your cholasterol, which in turn increases your risk of hearth disease. Importantly there are two types of fats, saturated and unsaturated fats. To maintain a healthy diet your goal should be to try to cut down on fats, especially saturated fats, which are especially unhealthy. ";

  const carbs_text =
    "Carbohydrates are the main fuel source for your body. Although, they often get a bad rap, they play an important role in your diet. Too much carbs however, are not good for your health, and can lead to weight gain. The right amount of carbs can hoewever, increase your energy and protect you against some diseases. Not all carbs are however, created equal. There are three main types, sugars, starches and technically fiber is also a carb. Fiber differs from the two, as most fiber can not be broken down by the body, and it is also an example of a healthy carbohydrate. For a healthy diet you should focus on food sources, such as whole grains, beans, peas and lentils, and limit your sugar intake.";

  const protein_text =
    "Proteins are crucial for your health. They are crucial in helping your body repair cells, and make new ones, and are crucially important in growth and development. Protein is crucial for increasing muscle mass and strength, which is especially important if you are workign on building muscle. It is good is also good for your bones. Protein is also helpful in weight control, as it can reduce cravings and your appetite. However, consuming too much protein can have side effects, such as dehydration, fatigue, nausea, but even cardiovascular diseases, liver and kidney injuries or blood vessel disorders. ";

  const fiber_text =
    "Dietary fiber is crucial for a healthy diet. There are two types, soluble and insoluble. Neither can be broken down well by your body, the difference comes from the fact that soluble fiber, unlike insoluble can dissolve in water. Fiber pass through the intestines, which helps in stimulating and aiding your digestion. This way it can prevent and relieve constapation. It can also help regulate blood sugar and lower cholesterol. Too much fiber can also have side effects, such as bloating, abdominal pain, diarrhea, temporary weight gain, or even constapation.  ";

  return (
    <>
      <div onClick={reset} onKeyUp={reset}>
        <div className="header-footer header">
          <div className="header-with-return">
            <Button
              size="medium"
              margin="no-margin"
              background="dark"
              onClick={goBack}
            >
              List editor
            </Button>
            <h1 className="header-text">
              CalorieCart: Create your healthy, nutritious grocery list today!
            </h1>
          </div>
          <AccountEditButton />
        </div>
        <div className="main-content list_editor">
          <div className="top-contributor-div">
            <TopContributors />
          </div>
          <div className="stats-div">
            <div className="spider-graph-div">
              <h4>{"Check your list's stats!"}</h4>
              <SpiderGraph test={seed} />
            </div>
            <div className="card-container">
              <ExpandingCard
                nutrition_measurement="kcal"
                nutrition_name="Calories"
                amount={getListAmounts().cals}
                healthy_amount={getHealthAmounts().cals}
              >
                {calorie_text}
                <br />
                <br />
                Sources: <br />
                <a
                  href="https://www.nhs.uk/live-well/healthy-weight/managing-your-weight/understanding-calories/"
                  target="_blank"
                >
                  {" "}
                  NHS
                </a>{" "}
              </ExpandingCard>
              <ExpandingCard
                nutrition_measurement="g"
                nutrition_name="Fats"
                amount={getListAmounts().fats}
                healthy_amount={getHealthAmounts().fats}
              >
                {fats_text}
                <br />
                <br />
                Sources: <br />
                <a
                  href="https://www.nhs.uk/live-well/eat-well/food-types/different-fats-nutrition/"
                  target="_blank"
                >
                  {" "}
                  NHS
                </a>{" "}
              </ExpandingCard>
              <ExpandingCard
                nutrition_measurement="g"
                nutrition_name="Carbohydrates"
                amount={getListAmounts().carbs}
                healthy_amount={getHealthAmounts().carbs}
              >
                {carbs_text}
                <br />
                <br />
                Sources: <br />
                <a
                  href="https://my.clevelandclinic.org/health/articles/15416-carbohydrates"
                  target="_blank"
                >
                  {" "}
                  Cleveland Clinic
                </a>{" "}
                <br />
                <a
                  href="https://www.mayoclinic.org/healthy-lifestyle/nutrition-and-healthy-eating/in-depth/carbohydrates/art-20045705"
                  target="_blank"
                >
                  {" "}
                  Mayo Clinic
                </a>{" "}
              </ExpandingCard>
              <ExpandingCard
                nutrition_measurement="g"
                nutrition_name="Protein"
                amount={getListAmounts().proteins}
                healthy_amount={getHealthAmounts().proteins}
              >
                {protein_text}
                <br />
                <br />
                Sources: <br />
                <a
                  href="https://www.medicalnewstoday.com/articles/322825#recommended-protein-intake"
                  target="_blank"
                >
                  {" "}
                  MedicalNewsToday
                </a>{" "}
                <br />
                <a
                  href="https://www.healthline.com/nutrition/10-reasons-to-eat-more-protein#TOC_TITLE_HDR_2"
                  target="_blank"
                >
                  {" "}
                  Healthline
                </a>{" "}
              </ExpandingCard>
              <ExpandingCard
                nutrition_measurement="g"
                nutrition_name="Fiber"
                amount={getListAmounts().fibers}
                healthy_amount={getHealthAmounts().fibers}
              >
                {fiber_text}
                <br />
                <br />
                Sources: <br />
                <a
                  href="https://www.healthline.com/health/food-nutrition/too-much-fiber"
                  target="_blank"
                >
                  {" "}
                  Healthline
                </a>{" "}
                <br />
                <a
                  href="https://www.mayoclinic.org/healthy-lifestyle/nutrition-and-healthy-eating/in-depth/fiber/art-20043983"
                  target="_blank"
                >
                  {" "}
                  Mayo Clinic
                </a>{" "}
                <br />
                <a
                  href="https://my.clevelandclinic.org/health/articles/15416-carbohydrates"
                  target="_blank"
                >
                  {" "}
                  Cleveland Clinic
                </a>
              </ExpandingCard>
            </div>
          </div>
          <div className="top-contributor-div right">
            <ValueSetter />{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default StatsPage;
