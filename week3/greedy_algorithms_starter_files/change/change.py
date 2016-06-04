# Uses python3
import sys

def get_change(n):
    #write your code here
    coins     = [10,5, 1]
    coinCount = 0
    total     = 0
    for coin in coins:
        while total + coin <= n:
            total += coin
            coinCount +=1

    return coinCount

if __name__ == '__main__':
    n = int(input())
    print(get_change(n))
