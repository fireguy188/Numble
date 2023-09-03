from flask import Flask, jsonify, render_template
import random

def is_prime(n):
    for x in range(2, int(n**0.5)+1):
        if n % x == 0:
            return False
    return True

app = Flask(__name__, static_folder="dist/assets", template_folder="dist")

@app.route('/api/get_bucket')
def gen_bucket_and_riddles():
    nums = [x for x in range(1, 100)]
    primes = [x for x in nums if is_prime(x)]
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
                if bucket[i] == bucket[j] * bucket[k]:
                    riddle_options[i].append({'prod': (j, k)})
                
        # Check for prime
        if bucket[i] in primes:
            riddle_options[i].append({'prime': primes.index(bucket[i])+1})

    return jsonify(bucket, riddle_options)

# @app.route('/')
# def home():
#     return render_template('index.html')

if __name__ == "__main__":
    app.run(debug=True)