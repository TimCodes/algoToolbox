# Uses python3
n = int(input())
a = [int(x) for x in input().split()]
assert(len(a) == n)

resultBig = 0
resultSmall = 0

for i in range(0, n):
    if a[i]  > resultBig:
        resultBig = a[i]

for i in range(0, n):
    if a[i]  > resultSmall and a[i] < resultBig:
        resultSmall = a[i]


print(resultBig * resultSmall)


