const price_slider = document.getElementById('price')
const price_output = document.getElementById('price_output')

const discount_slider = document.getElementById('discount')
const discount_output = document.getElementById('discount_output')


const marketing_spending_slider = document.getElementById('marketing_spending')
const marketing_output = document.getElementById('marketing_output')

const holiday_choice = document.getElementById('holiday')
const category_choice = document.getElementById('category')

const result_output = document.getElementById('result_output')
const profit_ouptput = document.getElementById('profit_output')


//calls the GetPrediction function with a debounce, meaning api call is only sent after a slight delay in user input


//functions for changing values and for setting defaultValues
function defaultValues() {
    price_output.textContent = `Price: ${price_slider.value}$`;
    discount_output.textContent = `Discount: ${discount_slider.value}%`;
    marketing_output.textContent = `Marketing spending: ${marketing_spending_slider.value}$`
}

function priceChanged() {
    price_output.textContent = `Price: ${price_slider.value}$`;
    getPrediction()
}

function discountChanged() {
    discount_output.textContent = `Discount: ${discount_slider.value}%`;
    getPrediction()
}

function marketingChanged() {
    marketing_output.textContent = `Marketing spending: ${marketing_spending_slider.value}$`;
    getPrediction()
}



//Creating the api request and prediction changer:
async function getPrediction() {
    const jsonData = {
        "discount_percentage": parseInt(discount_slider.value, 10), 
        "marketing_spending": parseInt(marketing_spending_slider.value, 10), 
        "product_category": category_choice.value,
        "holiday": holiday_choice.checked,
        "price": parseInt(price_slider.value, 10)
    };

    let marketing_spending = jsonData['marketing_spending']
    
    const jsonString = JSON.stringify(jsonData, null, 2);

    try {
        const response = await fetch('http://127.0.0.1:9000/api/request/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: jsonString
        });

        // Handle the response
        if (!response.ok) { //getting a 500 response:
            result_output.textContent = "Server sent a 500 response";
        }

        const responseData = await response.json();

        result_output.textContent = `Predicted revenue: ${responseData.prediction}$`

        //getting profit value:
        let profit = responseData.prediction - marketing_spending.toFixed(2)
        profit_ouptput.textContent = `Predicted profit: ${profit}$`

    } catch (error) {
        result_output.textContent = "Server could not be reached";
    }

}


//Adding event listeners:
price_slider.addEventListener('input', priceChanged);
discount_slider.addEventListener('input', discountChanged);
marketing_spending_slider.addEventListener('input', marketingChanged);
holiday_choice.addEventListener('input', getPrediction)
category_choice.addEventListener('input', getPrediction)

defaultValues(); //sets the default values
getPrediction(); //calls a prediction when the website is initialized. So it gets the prediction for the default values

