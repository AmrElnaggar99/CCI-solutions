def rotateMatrix(matrix):
    n = len(matrix)
    i, j = 0, 0
    while (True):
        # We need to swap elements in the four corners in each iteration
        temp = matrix[n-1-j][i]
        matrix[n-1-j][i] = matrix[n-i-1][n-1-j]
        matrix[n-i-1][n-1-j] = matrix[j][n-i-1]
        matrix[j][n-i-1] = matrix[i][j]
        matrix[i][j] = temp

        # decide the next i and j
        if j+1 < n - 1 - i:
            j += 1
        elif n == 2 or (i == n//2 and j == n//2):
            break
        else:
            i += 1
            j = i

    return matrix


# TESTS

matrix_5 = [[1, 2, 3, 4, 5],
            [6, 7, 8, 9, 10],
            [11, 12, 13, 14, 15],
            [16, 17, 18, 19, 20],
            [21, 22, 23, 24, 25]]

matrix_6 = [[1, 2, 3, 4, 5, 26],
            [6, 7, 8, 9, 10, 27],
            [11, 12, 13, 14, 15, 28],
            [16, 17, 18, 19, 20, 29],
            [21, 22, 23, 24, 25, 30],
            [31, 32, 33, 34, 35, 36]]

matrix_4 = [[1, 2, 3, 10],
            [4, 5, 6, 11],
            [7, 8, 9, 12],
            [13, 14, 15, 16]]

matrix_2 = [[1,2],
            [3, 4]]
matrix_1 = [[1]]

for line in rotateMatrix(matrix_6):
    print(line)


# This solution should be O(nlogn) time and O(1) space
