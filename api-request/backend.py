import sys
from flask import request
import requests

from flask import Flask
from flask import jsonify
app = Flask(__name__)


'''
Application name	  Stellar
API key	              18d4eb0cf3221fcef9bdc2e686bd697c
Shared secret	      4aca1c1da6c5f2023104fdc67927dee3
Registered to	      clutch1911
'''


@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route('/getrelatedartist')
def recommendations():
    artist = request.args.get("artist")
    s = "http://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist=%s&api_key=18d4eb0cf3221fcef9bdc2e686bd697c&format=json" % artist
    r = requests.get(s)
    return jsonify(r.json())

if __name__ == "__main__":
    app.run()
