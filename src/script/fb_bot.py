import requests

ACCESS_TOKEN = "your_access_token"
GROUP_ID = "facebook_group_id"
URL = f"https://graph.facebook.com/v12.0/{GROUP_ID}/feed?access_token={ACCESS_TOKEN}"

response = requests.get(URL)
data = response.json()
print(data)