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
@app.route('/data/<coord>')
def generate_set(coord):
    
    min_x,max_x,min_y,max_y = np.array(coord.split("_")).astype(float)
    mandelbrot_data = generate(min_x,max_x,min_y,max_y,1000).T
    mandelbrot_data = mandelbrot_data*255/np.max(mandelbrot_data)
    dim = np.shape(mandelbrot_data)
    
    #l=[ [ 1, 2 ], [ 3, 4 ]]
    return jsonify(set=mandelbrot_data.tolist(),height=dim[0],width=dim[1])


if __name__ == '__main__':
    print(np.shape(generate()))
    app.run(debug=True, use_debugger=False, use_reloader=False)
    
