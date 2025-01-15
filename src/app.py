from flask import Flask, jsonify, request
from flask_cors import CORS  # To handle CORS issues
from pymongo import MongoClient

app = Flask(__name__)
CORS(app)

# MongoDB connection URI
client = MongoClient('mongodb+srv://mohamedmaamar:Fv5LduH43Q7i9PGg@cluster0.isipz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
db = client.menuDB
food_collection = db.food

# Route to get all dishes
@app.route('/api/dishes', methods=['GET'])
users_collection = mongo.db.users
today_menu_collection = mongo.db.today_menu
chefs_collection = mongo.db.chefs
ratedishes_collection = mongo.db.ratedishes

# Route: Add Data to Collection
@app.route('/api/<collection_name>', methods=['POST'])
def add_data(collection_name):
    data = request.json
    collection = mongo.db[collection_name]
    collection.insert_one(data)
    return jsonify({"message": f"Data added to {collection_name} successfully!"}), 201

# Route: Get All Data from a Collection
@app.route('/api/<collection_name>', methods=['GET'])
def get_data(collection_name):
    collection = mongo.db[collection_name]
    data = collection.find()
    return dumps(data), 200

if __name__ == "__main__":
    app.run(debug=True)

