from flask import Flask,render_template,jsonify
from mandelbrot_generate import generate
import json 
import numpy as np

app = Flask(__name__)

@app.route('/')
def main():

    #return render_template('main.html',mandelbrot_data=mandelbrot_data)
    return render_template('main.html')
@app.route('/mandelbrot')
def mandelbrot():
    
    return render_template('mandelbrot.html')
@app.route('/data')
def generate_set():

    mandelbrot_data = generate()
    dim = np.shape(mandelbrot_data)
    #l=[ [ 1, 2 ], [ 3, 4 ]]
    return jsonify(set=mandelbrot_data.flatten().tolist(),height=dim[1],width=dim[0])


if __name__ == '__main__':
    print(np.shape(generate()))
    app.run(debug=True, use_debugger=False, use_reloader=False)
    
