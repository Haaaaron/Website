import numpy as np 
import mandelbrot
import matplotlib.pyplot as plt
import time


def generate(min_x=-2,max_x=1,min_y=-1,max_y=1, n=1000,iteration=100):

    abs_x = abs(max_x-min_x)
    abs_y = abs(max_y-min_y)
    norm_x = abs_x/(abs_x+abs_y)
    norm_y = abs_y/(abs_x+abs_y)
    i_n = int(norm_x*n)
    j_n = int(norm_y*n)
    print(i_n,j_n)
    data = mandelbrot.generate_heat_map(min_x,max_y,i_n,j_n,abs_x,abs_y,iteration).astype('float64')
    data *= 255.0/data.max() 

    return data

if __name__ == '__main__':
    data = generate()
    plt.imshow(data)
    plt.show()