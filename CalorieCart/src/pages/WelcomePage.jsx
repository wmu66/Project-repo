import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
const WelcomePage = () => {
    const navigate = useNavigate();
    const onClick = () => {
        navigate("detail_entry");
    }

    const calorieCartText = "CalorieCart is an application that combines a grocery list builder and a calorie counter. That is you can interactively build a grocery list, that fits your needs, and we will tell you how that list would impact your diet. Choose how many days the grocery list should last you for, and then we will compare how the nutrition values of the created list stack up in comparison to healthy target values. Are you unhappy with your list, does it contain maybe too much sugar or too little fiber? Don't worry, we got you covered. Just use our search and filter functions to find products that will perfect your list. This way CalorieCart will allow you to develop healthier habits, and live a healthier life. Sounds good? Try it now!"
    const nutritonText = "Nutrition are the building blocks of the food we eat and of a healthy diet. Some nutrition categories are great for us, some less so. But even with healthier nutritions, too much can be, unnecessary or even unhealthy. Striking a perfect balance is crucial for a healthy life. CalorieCart focuses on the six most important of nutritional categories: calories, carbs, sugar, fiber, protein and finally fat. But how should you know how much to eat of each of these categories? That is a complex question, but the good news is that CalorieCart provides you with a starting point. Based on the details you provide, we will set the target values at some good general level. Then you can modify that based on your preferences and habits. For example if you want to lose weight, the weight loss preset will lower the fat and calorie count. These should provide you with some good target values, but for the most accurate and best results we do recommend consulting with dietary professionals. "
    const userBase = "CalorieCart was designed mainly with college students in mind. However, of course anyone else can use the application. For best results we recommend CalorieCart for people that live alone and/or buy groceries for themselves only. As CalorieCart gets nutritional information from your grocery buying habits, it works best with one person households. "
    return (
    <div className="welcome-page-div">
        <h1>Welcome to <span style={{ color: "var(--accentcolor2)" }}>
              CalorieCart!
            </span></h1>
        <h2>What is <span style={{ color: "var(--accentcolor2)" }}>
              CalorieCart?
            </span></h2>
        <p>{calorieCartText}</p>
        <h2>About <span style={{ color: "var(--accentcolor2)" }}>
              nutrition...
            </span></h2>
        <p>{nutritonText}</p>
        <h2>Who is <span style={{ color: "var(--accentcolor2)" }}>
              CalorieCart for?
            </span> </h2>
        <p>{userBase}</p>
        <h2>Ready to <span style={{ color: "var(--accentcolor2)" }}>
              begin?
            </span> </h2>
        <Button onClick={onClick}>Continue to detail entry</Button>
    </div>
  )
}

export default WelcomePage