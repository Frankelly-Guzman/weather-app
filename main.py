import requests

api_key = '6ac460af1ac2444784422ca273400e3e'

user_city = input("Enter your city: ")
user_state = input("Enter your state code: ")

weather_data = requests.get(f"https://api.weatherbit.io/v2.0/current?&key={api_key}&city={user_city.capitalize()},{user_state.upper()}&units=I")
data = weather_data.json()['data'][0]

weather = data['weather']['description']
temp = round(data['temp'])
print(f"The weather in {user_city.capitalize()} is: {weather}")
print(f"The temperature in {user_city.capitalize()} is: {temp}°F")