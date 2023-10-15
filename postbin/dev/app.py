from flask import Flask, request, send_from_directory
from pathlib import Path

directory = 'uploads'
app = Flask(__name__, static_url_path='', static_folder=directory)
Path(directory).mkdir(exist_ok=True)

@app.post('/')
def post_file():
    if 'file' not in request.files:
        return {'status': 400, 'message': 'No file part'}, 400

    file = request.files['file']
    if file.filename == '':
        return {'status': 400, 'message': 'No selected file'}, 400

    upload_path = Path(directory).joinpath(file.filename)
    if str(upload_path) in ['uploads/index.html', 'uploads/styles.css', 'uploads/main.js', 'uploads/images/upload.svg']:
        return {'status': 403, 'message': 'Forbidden'}, 403

    file.save(upload_path)
    return {'status': 200, 'message': 'OK'}, 200

@app.get('/')
def get_html():
    return send_from_directory('uploads', 'index.html')
