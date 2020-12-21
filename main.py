from flask import Flask,render_template
from mandelbrot_generate import generate
app = Flask(__name__)

@app.route('/')
def main():
    mandelbrot_data = generate()
    return render_template('main.html',mandelbrot_data=mandelbrot_data)

if __name__ == '__main__':
    data = generate()
    print(data)
    
