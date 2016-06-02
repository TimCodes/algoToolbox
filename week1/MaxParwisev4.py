# Uses python3
n = int(input())
a = [int(x) for x in input().split()]
assert(len(a) == n)

resultBig = 0
resultSmall = 0

for i in range(0, n):
    if a[i]  > resultBig:
        resultBig = i

for j in range(0, n):
    if a[j]  > resultSmall and j != resultBig:
        resultSmall = j


print(a[resultBig] * a[resultSmall])


