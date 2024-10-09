from joblib import load
import pandas as pd
import json
import os
import platform
from time import perf_counter

class Prediction():
    def __init__(self, json_data):
        self.load_model()
        self.discount_percentage = json_data['discount_percentage']
        self.marketing_spending = json_data['marketing_spending']
        self.product_category = json_data['product_category']
        self.day = json_data['day']
        self.holiday = json_data['holiday']
        self.price = json_data['price']
        self.day_bool() #converting the entered day into booleans
        self.category_bool()
        self.get_pred()
    
    def load_model(self):
        try: 
            self.model = load("best_model.joblib")
        except FileNotFoundError:
            print("Model not found")

    def day_bool(self): #this is needed so that the day can be converted into binary variables
        self.days_of_week_dict = { #no need for Monday since that is the reference category
                    'Tuesday': 0,
                    'Wednesday': 0,
                    'Thursday': 0,
                    'Friday': 0,
                    'Saturday': 0,
                    'Sunday': 0
                }
        for day, value in self.days_of_week_dict.items():
            if day == self.day:
                value = 1

    def category_bool(self):
            self.categories = {  #no need for the clothing category since that is the reference category
                'Electronics': 0,
                'Furniture': 0,
                'Groceries': 0
                }
            for category, value in self.categories.items():
                if category == self.product_category:
                    value = 1
                
    def get_pred(self):

        prediction = {
            'Discount Percentage': self.discount_percentage,
            'Marketing Spend (USD)': self.marketing_spending,
            'Holiday Effect': self.holiday,
            'Full Price': self.price,
            'Product Category_Electronics': self.categories['Electronics'],
            'Product Category_Furniture': self.categories['Furniture'],
            'Product Category_Groceries': self.categories['Groceries'],
            'Day of the Week_Friday': self.days_of_week_dict['Friday'],
            'Day of the Week_Saturday': self.days_of_week_dict['Saturday'],
            'Day of the Week_Sunday': self.days_of_week_dict['Sunday'],
            'Day of the Week_Thursday': self.days_of_week_dict['Thursday'],
            'Day of the Week_Tuesday': self.days_of_week_dict['Tuesday'],
            'Day of the Week_Wednesday': self.days_of_week_dict['Wednesday']
        }
        pred_df = pd.DataFrame([prediction])
        self.predicted_value = self.model.predict(pred_df)
        self.predicted_value = round(self.predicted_value[0], 2)
    def __str__(self):
        return f"The predicted revenue is: {self.predicted_value} USD"

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
    t_start = perf_counter()
    print(Prediction(data))
    t_stop = perf_counter()
    print(f"The time it took to create a prediction: {t_stop - t_start}")
