from flask import Flask, jsonify, request
from flask.helpers import send_from_directory
import os
# comment out on deployment
from flask_cors import CORS

# uses 'frontend' because that is where our react app is stored
app = Flask(__name__, static_folder="frontend/build", static_url_path="")

# comment out on deployment
CORS(app)

@app.route("/result", methods=["POST", "GET"])
def result():
    if request.method == "POST":
        firstName = request.json
        first = firstName["firstName"]
        if first == 'Jordan':
            lastName = "Magbag"
            return jsonify(lastName)
    else:
        lastName = "User Not Found"
        return jsonify(lastName)
    print(firstName["firstName"])
    return jsonify("User Not Found")

@app.route("/")
def index():
    return send_from_directory(app.static_folder, "index.html")

if __name__ == 'main':
    app.run(host='0.0.0.0')