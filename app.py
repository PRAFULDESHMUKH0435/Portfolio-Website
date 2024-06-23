from flask import Flask, jsonify, render_template,redirect,send_file,request
import firebase_admin
import requests
from firebase_admin import credentials, db
from io import BytesIO

app = Flask(__name__)

# Initialize Firebase Admin SDK
cred = credentials.Certificate('creadentials.json')
firebase_admin.initialize_app(cred, {
    'databaseURL': 'https://companywebsite-874f5-default-rtdb.firebaseio.com/'
})

@app.route('/',methods = ['GET', 'POST'])
def index():
    ref = db.reference('/about')
    about = ref.get()

    services_ref = db.reference('/services')
    services = services_ref.get()

    applications_ref = db.reference('/applications')
    applications = applications_ref.get()
    
    skills_ref = db.reference('/skills')
    skills = skills_ref.get()

    reviews_ref = db.reference('/reviews')
    reviews = reviews_ref.get()

    return render_template('index.html',about=about,services = services, applications = applications,skills=skills, reviews = reviews)

@app.route('/feedBack',methods = ['GET', 'POST'])
def feedBack():
    return render_template("feedback.html")

@app.route('/savefeedBackData',methods = ['GET', 'POST'])
def savefeedBackData():
    name = request.form.get('name')
    designation = request.form.get('designation')
    comment = request.form.get('comment')
    rating = request.form.get('rating-val')

    reviews_ref = db.reference('/reviews')
    reviews = reviews_ref.get()

    id = len(reviews)

    feedback_data = {
        'name': name,
        'designation': designation,
        'feedback': comment,
        'stars': rating 
    }

    db.reference(f'/reviews/{id}').set(feedback_data)

    
    return redirect("/")

@app.route('/download-cv')
def download_cv():
    # Fetch the resume link from Firebase
    ref = db.reference('/about')
    about = ref.get()
    if about and 'resume_link' in about:
        resume_url = about['resume_link']
        response = requests.get(resume_url)
        if response.status_code == 200:
            # Create a BytesIO object to hold the binary content of the response
            file_data = BytesIO(response.content)
            # Use send_file to send the file with the appropriate headers
            return send_file(file_data, as_attachment=True, download_name='resume.pdf')
        else:
            return "Failed to retrieve resume file", 404
    else:
        return "Resume link not found", 404
    
    return redirect("/")

if __name__ == '__main__':
    app.run(debug=True)
