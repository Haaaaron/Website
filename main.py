from flask import Flask,render_template,jsonify
from mandelbrot_generate import generate
import json 
import numpy as np
import time

app = Flask(__name__)

@app.route('/')
def main():

    #return render_template('main.html',mandelbrot_data=mandelbrot_data)
    return render_template('main.html')

@app.route('/mandelbrot')
def mandelbrot():
    
    return render_template('mandelbrot.html')

@app.route('/data/<coord>')
def generate_set(coord):
    

    t0 = time.time()
    min_x,max_x,min_y,max_y,n = np.array(coord.split("_")).astype(float)
    mandelbrot_data = generate(min_x,max_x,min_y,max_y,n).T
    mandelbrot_data = mandelbrot_data*255/np.max(mandelbrot_data)
    dim = np.shape(mandelbrot_data)
    coord=[min_x,max_x,min_y,max_y]
    t1 = time.time()
    print(t1-t0)
    
    #l=[ [ 1, 2 ], [ 3, 4 ]]
    return jsonify(set=mandelbrot_data.tolist(),height=dim[0],width=dim[1],coord=coord)


if __name__ == '__main__':
    print(np.shape(generate()))
    app.run(debug=True, use_debugger=False, use_reloader=False)
    
