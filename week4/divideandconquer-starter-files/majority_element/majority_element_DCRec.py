# Uses python3
import sys

def get_majority_element(a, left, right):
    if left == right:
        return -1
    if left + 1 == right:
        return a[left]

    mid = left + ((right - left) // 2)


    maxA = get_majority_element(a, left, int( mid -1) )
    maxB = get_majority_element(a, int( mid + 1), right)

    maxAcount = 0
    maxBcount = 0

    for i in range(right):
        if a[i] == maxA:
            maxAcount += 1
        if a[i] == maxB:
            maxBcount += 1

    if maxAcount> right / 2:
        return maxA
    elif maxBcount > right / 2:
        return maxB


    #write your code here
    return -1

if __name__ == '__main__':
    n = int(input());

    a = list(map(int, input().split()))
    if get_majority_element(a, 0, n) != -1:
        print(1)
    else:
        print(0)



