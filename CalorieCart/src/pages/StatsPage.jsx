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
   }
  return (
    <>
      <div  onClick={reset} onKeyUp={reset}>
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
              <SpiderGraph 
                test={seed}
              />
            </div>
            <div className="card-container">
              <ExpandingCard
                nutrition_measurement="kcal"
                nutrition_name="Calories"
                amount={getListAmounts().cals}
                healthy_amount={getHealthAmounts().cals}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                ultricies risus et cursus luctus. Fusce vestibulum malesuada
                interdum. Quisque eget ornare metus, sed ullamcorper nisi. Etiam
                sed sagittis odio, id aliquet justo. Aenean eget iaculis enim,
                volutpat vestibulum arcu. Etiam pulvinar, nibh quis suscipit
                tempor, ipsum tortor cursus purus, vel luctus ligula sapien in
                metus. In hac habitasse platea dictumst. Interdum et malesuada
                fames ac ante ipsum primis in faucibus. Ut consequat sit amet
                nulla eget venenatis. Nam et lorem placerat, vestibulum libero
                quis, imperdiet dui. Integer at purus sollicitudin, efficitur
                dolor non, fermentum dolor. Aenean placerat est quis dolor
                faucibus, at commodo purus consequat. In eu sapien eu lectus
                dignissim viverra. In hac habitasse platea dictumst. Quisque
                ultrices justo eu leo accumsan ultrices. Vivamus sit amet tempus
                massa, vitae mollis neque. Donec vulputate sed ipsum ut lobortis.
                Phasellus velit dolor, scelerisque quis commodo vel, bibendum non
                urna. Nunc a volutpat mi. Donec aliquet cursus viverra.
              </ExpandingCard>
              <ExpandingCard
                nutrition_measurement="g"
                nutrition_name="Fats"
                amount={getListAmounts().fats}
                healthy_amount={getHealthAmounts().fats}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                ultricies risus et cursus luctus. Fusce vestibulum malesuada
                interdum. Quisque eget ornare metus, sed ullamcorper nisi. Etiam
                sed sagittis odio, id aliquet justo. Aenean eget iaculis enim,
                volutpat vestibulum arcu. Etiam pulvinar, nibh quis suscipit
                tempor, ipsum tortor cursus purus, vel luctus ligula sapien in
                metus. In hac habitasse platea dictumst. Interdum et malesuada
                fames ac ante ipsum primis in faucibus. Ut consequat sit amet
                nulla eget venenatis. Nam et lorem placerat, vestibulum libero
                quis, imperdiet dui. Integer at purus sollicitudin, efficitur
                dolor non, fermentum dolor. Aenean placerat est quis dolor
                faucibus, at commodo purus consequat. In eu sapien eu lectus
                dignissim viverra. In hac habitasse platea dictumst. Quisque
                ultrices justo eu leo accumsan ultrices. Vivamus sit amet tempus
                massa, vitae mollis neque. Donec vulputate sed ipsum ut lobortis.
                Phasellus velit dolor, scelerisque quis commodo vel, bibendum non
                urna. Nunc a volutpat mi. Donec aliquet cursus viverra.
              </ExpandingCard>
              <ExpandingCard
                nutrition_measurement="g"
                nutrition_name="Carbohydrates"
                amount={getListAmounts().carbs}
                healthy_amount={getHealthAmounts().carbs}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                ultricies risus et cursus luctus. Fusce vestibulum malesuada
                interdum. Quisque eget ornare metus, sed ullamcorper nisi. Etiam
                sed sagittis odio, id aliquet justo. Aenean eget iaculis enim,
                volutpat vestibulum arcu. Etiam pulvinar, nibh quis suscipit
                tempor, ipsum tortor cursus purus, vel luctus ligula sapien in
                metus. In hac habitasse platea dictumst. Interdum et malesuada
                fames ac ante ipsum primis in faucibus. Ut consequat sit amet
                nulla eget venenatis. Nam et lorem placerat, vestibulum libero
                quis, imperdiet dui. Integer at purus sollicitudin, efficitur
                dolor non, fermentum dolor. Aenean placerat est quis dolor
                faucibus, at commodo purus consequat. In eu sapien eu lectus
                dignissim viverra. In hac habitasse platea dictumst. Quisque
                ultrices justo eu leo accumsan ultrices. Vivamus sit amet tempus
                massa, vitae mollis neque. Donec vulputate sed ipsum ut lobortis.
                Phasellus velit dolor, scelerisque quis commodo vel, bibendum non
                urna. Nunc a volutpat mi. Donec aliquet cursus viverra.
              </ExpandingCard>
              <ExpandingCard
                nutrition_measurement="g"
                nutrition_name="Protein"
                amount={getListAmounts().proteins}
                healthy_amount={getHealthAmounts().proteins}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                ultricies risus et cursus luctus. Fusce vestibulum malesuada
                interdum. Quisque eget ornare metus, sed ullamcorper nisi. Etiam
                sed sagittis odio, id aliquet justo. Aenean eget iaculis enim,
                volutpat vestibulum arcu. Etiam pulvinar, nibh quis suscipit
                tempor, ipsum tortor cursus purus, vel luctus ligula sapien in
                metus. In hac habitasse platea dictumst. Interdum et malesuada
                fames ac ante ipsum primis in faucibus. Ut consequat sit amet
                nulla eget venenatis. Nam et lorem placerat, vestibulum libero
                quis, imperdiet dui. Integer at purus sollicitudin, efficitur
                dolor non, fermentum dolor. Aenean placerat est quis dolor
                faucibus, at commodo purus consequat. In eu sapien eu lectus
                dignissim viverra. In hac habitasse platea dictumst. Quisque
                ultrices justo eu leo accumsan ultrices. Vivamus sit amet tempus
                massa, vitae mollis neque. Donec vulputate sed ipsum ut lobortis.
                Phasellus velit dolor, scelerisque quis commodo vel, bibendum non
                urna. Nunc a volutpat mi. Donec aliquet cursus viverra.
              </ExpandingCard>
              <ExpandingCard
                nutrition_measurement="g"
                nutrition_name="Fiber"
                amount={getListAmounts().fibers}
                healthy_amount={getHealthAmounts().fibers}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                ultricies risus et cursus luctus. Fusce vestibulum malesuada
                interdum. Quisque eget ornare metus, sed ullamcorper nisi. Etiam
                sed sagittis odio, id aliquet justo. Aenean eget iaculis enim,
                volutpat vestibulum arcu. Etiam pulvinar, nibh quis suscipit
                tempor, ipsum tortor cursus purus, vel luctus ligula sapien in
                metus. In hac habitasse platea dictumst. Interdum et malesuada
                fames ac ante ipsum primis in faucibus. Ut consequat sit amet
                nulla eget venenatis. Nam et lorem placerat, vestibulum libero
                quis, imperdiet dui. Integer at purus sollicitudin, efficitur
                dolor non, fermentum dolor. Aenean placerat est quis dolor
                faucibus, at commodo purus consequat. In eu sapien eu lectus
                dignissim viverra. In hac habitasse platea dictumst. Quisque
                ultrices justo eu leo accumsan ultrices. Vivamus sit amet tempus
                massa, vitae mollis neque. Donec vulputate sed ipsum ut lobortis.
                Phasellus velit dolor, scelerisque quis commodo vel, bibendum non
                urna. Nunc a volutpat mi. Donec aliquet cursus viverra.
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
