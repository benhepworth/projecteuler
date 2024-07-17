#!/opt/homebrew/bin/python3

print("\n#######################")
print("Project Euler Problem 2")
print("#######################\n")

num_1 = 0
num_2 = 1
latest_num = 0
sum_evens = 0

while latest_num < 4000000:
    if latest_num % 2 == 0:
        sum_evens += latest_num
    num_1 = num_2
    num_2 = latest_num
    latest_num = num_1 + num_2

print("Problem 2 answer is", sum_evens, "\n")
