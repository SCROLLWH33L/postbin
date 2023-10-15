from flask import Flask, request, send_from_directory
from pathlib import Path

directory = 'uploads'
app = Flask(__name__, static_url_path='', static_folder=directory)
Path(directory).mkdir(exist_ok=True)

@app.get('/')
def get_html():
    return send_from_directory('uploads', 'index.html')
