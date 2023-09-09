from flask import Flask, jsonify, render_template
import random

def is_prime(n):
    if n == 1:
        return False
    
    for x in range(2, int(n**0.5)+1):
        if n % x == 0:
            return False
    return True

riddles = []
bucket = []

def gen_bucket_and_riddles():
    global riddles, bucket

    nums = [x for x in range(1, 100)]
    primes = [x for x in nums if is_prime(x)]

    while True:
        bucket = random.sample(nums, 12)

        riddle_options = [[] for x in range(len(bucket))]
        for i in range(len(bucket)):
            for j in range(len(bucket)):
                # Check for square
                if bucket[i] == bucket[j]**2:
                    riddle_options[i].append({'square': j})

                # Check for root
                if bucket[i] == bucket[j]**0.5:
                    riddle_options[i].append({'root': j})
                    
                for k in range(j+1, len(bucket)):
                    # Check for sums
                    if bucket[i] == bucket[j] + bucket[k]:
                        riddle_options[i].append({'sum': (j, k)})
                    
                    # Check for differences
                    if bucket[i] == abs(bucket[j] - bucket[k]):
                        riddle_options[i].append({'dif': (j, k)})
                    
                    # Check for product
                    # No product riddles that involve multiplying by 1
                    if not 1 in [bucket[i], bucket[j], bucket[k]]:
                        if bucket[i] == bucket[j] * bucket[k]:
                            riddle_options[i].append({'prod': (j, k)})
                    
            # Check for prime
            if bucket[i] in primes:
                riddle_options[i].append({'prime': primes.index(bucket[i])+1})

        riddles = []
        for option in riddle_options:
            if option == []:
                break
            riddles.append(random.choice(option))
        else:
            break
    
    # Translate the riddles into english
    letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    for i in range(len(riddles)):
        riddle = riddles[i]
        if 'square' in riddle:
            riddles[i] = f'The square of box {letters[riddle["square"]]}'
        elif 'root' in riddle:
            riddles[i] = f'The root of box {letters[riddle["root"]]}'
        elif 'sum' in riddle:
            riddles[i] = f'The sum of boxes {letters[riddle["sum"][0]]} and {letters[riddle["sum"][1]]}'
        elif 'dif' in riddle:
            riddles[i] = f'The difference of boxes {letters[riddle["dif"][0]]} and {letters[riddle["dif"][1]]}'
        elif 'prod' in riddle:
            riddles[i] = f'The product of boxes {letters[riddle["prod"][0]]} and {letters[riddle["prod"][1]]}'
        elif 'prime' in riddle:
            if 10 <= riddle["prime"] <= 19:
                riddles[i] = f'The {riddle["prime"]}th prime'
            elif str(riddle["prime"]).endswith('1'):
                riddles[i] = f'The {riddle["prime"]}st prime'
            elif str(riddle["prime"]).endswith('2'):
                riddles[i] = f'The {riddle["prime"]}nd prime'
            elif str(riddle["prime"]).endswith('3'):
                riddles[i] = f'The {riddle["prime"]}rd prime'
            else:
                riddles[i] = f'The {riddle["prime"]}th prime'

gen_bucket_and_riddles()

app = Flask(__name__, static_folder="dist/assets", template_folder="dist")

@app.route('/api/get_bucket')
def get_bucket():
    return jsonify(bucket)

@app.route('/api/get_riddles')
def get_riddles():
    return jsonify(riddles)

# @app.route('/')
# def home():
#     return render_template('index.html')

if __name__ == "__main__":
    app.run(debug=True)