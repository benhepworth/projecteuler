#!/opt/homebrew/bin/python3

print("\n#######################")
print("Project Euler Problem 1")
print("#######################\n")

sum = 0

for i in range(1000):
    if i % 3 == 0 or i % 5 == 0:
        sum += i

print("Problem 1 answer is ", sum, "\n")
