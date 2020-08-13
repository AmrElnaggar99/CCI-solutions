def triple_steps(n):
    if n == 0 or n == 1:
        return 1
    if n < 0:
        return 0
    res = [-1] * (n+1)
    res[0] = 1
    res[1] = 1
    res[2] = 2
    for i in range(3, n+1):
        res[i] = res[i-1] + res[i-2] + res[i-3]

    return (res[-1])


print(triple_steps(5))
print(triple_steps(1))
print(triple_steps(0))
