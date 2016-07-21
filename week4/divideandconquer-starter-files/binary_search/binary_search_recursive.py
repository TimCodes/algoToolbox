# Uses python3
import sys

def binary_search_recursive(a, low, high, key):

        if high < low:
            return low -1

        mid = low  + ((high - low) // 2)

        if a[mid] == key:
            return mid
        elif key < a[mid]:
            return binary_search_recursive(a, low, mid -1, key)
        else:
            return  binary_search_recursive(a, mid + 1, high, key)
def binary_search(a, x):
    left, right = 0, len(a)
    return binary_search_recursive(a, left, right, x)
    # write your code here

def linear_search(a, x):
    for i in range(len(a)):
        if a[i] == x:
            return i
    return -1

if __name__ == '__main__':
    input = sys.stdin.read()
    data = list(map(int, input.split()))
    n = data[0]
    m = data[n + 1]
    a = data[1 : n + 1]
    for x in data[n + 2:]:
        # replace with the call to binary_search when implemented
        print(linear_search(a, x), end = ' ')
