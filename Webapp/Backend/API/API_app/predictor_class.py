from joblib import load
import pandas as pd
import json
import os
import platform
from time import perf_counter

class Prediction():
    def __init__(self):
        self.load_model()  #initializing the class only loads the model

    def load_model(self): #loading the model takes the most time so do it only once when initializing
        try: 
            self.model = load("grouped_by_week_model.joblib")
        except FileNotFoundError:
            print("Current working directory:", os.getcwd())
            print("Model not found")

    def __call__(self, json_data):
        self.discount_percentage = json_data['discount_percentage']
        self.marketing_spending = json_data['marketing_spending']
        self.product_category = json_data['product_category']
        self.holiday = json_data['holiday']
        self.price = json_data['price']
        self.category_bool() #converting category to boolean
        self.get_pred()
        return self.predicted_value

    def category_bool(self):
            self.categories = {  #no need for the clothing category since that is the reference category
                'electronics': 0,
                'furniture': 0,
                'groceries': 0
                }
            for category, value in self.categories.items():
                if category == self.product_category:
                    self.categories[category] = 1
                    break

                
    def get_pred(self):

        prediction = {
            'Discount Percentage': self.discount_percentage,
            'Marketing Spend (USD)': self.marketing_spending,
            'Full Price': self.price,
            'Holiday Effect': self.holiday,
            'Product Category_Electronics': self.categories['electronics'],
            'Product Category_Furniture': self.categories['furniture'],
            'Product Category_Groceries': self.categories['groceries']
        }
        pred_df = pd.DataFrame([prediction])
        self.predicted_value = self.model.predict(pred_df)
        self.predicted_value = round(self.predicted_value[0], 2)
    def __str__(self):
        return f"The predicted weekly revenue is: {self.predicted_value} USD"

def JSON_depacker(file_name):
    os_type = platform.system()
    os_file_path =os.getcwd()
    if os_type == "Darwin": #running on mac
        file_path = os_file_path + "/" + file_name
    else: #running on windows or linux
        file_path = os_file_path + "\\" + file_name

    with open(file_path, 'r') as file:
        data = json.load(file)
    return data





if __name__ == "__main__":
    data = JSON_depacker('example.json')
    predictor = Prediction() #initializing the class
    t_start = perf_counter()
    prediction = predictor(data)
    marketing_spending = predictor.marketing_spending
    print(f"The predicted weekly revenue is: {prediction} USD, with marketing spending of {marketing_spending}, meaning a profit of {prediction-marketing_spending}")
    t_stop = perf_counter()
    print(f"The time it took to create a prediction: {t_stop - t_start}")
