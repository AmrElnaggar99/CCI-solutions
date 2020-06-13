def zeroMatrix(matrix):
    h = len(matrix)
    if h == 0:
        return matrix
    w = len(matrix[0])

    z_i = -1
    z_j = -1

    for i in range(h):
        for j in range(w):
            if matrix[i][j] == 0:
                z_i = i
                z_j = j
    if z_i != -1 and z_j != -1:
        for i in range(h):
            matrix[i][z_j] = 0
        for j in range(w):
            matrix[z_i][j] = 0

    print("index: ", z_i, z_j)

    return matrix


# TESTS

matrix_1 = [
    [1, 1, 1, 1]
]

matrix_2 = []

matrix_3 = [
    [0, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1]
]

matrix_4 = [
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 0, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1]
]
for line in zeroMatrix(matrix_4):
    print(line)

# This solution should be O(N*M) space and O(1) space.
