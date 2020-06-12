let rotateMatrix = (matrix) => {
    let n = matrix.length;
    let i = 0;
    let j = 0;

    while (true) {
        let temp = matrix[n - 1 - j][i];
        matrix[n - 1 - j][i] = matrix[n - 1 - i][n - 1 - j];
        matrix[n - i - 1][n - 1 - j] = matrix[j][n - i - 1];
        matrix[j][n - i - 1] = matrix[i][j];
        matrix[i][j] = temp;

        if (j + 1 < n - 1 - i) {
            j++;
        } else if (n == 2 || (i == Math.floor(n / 2) && j == Math.floor(n / 2))) {
            break;
        } else {
            i++;
            j = i;
        }
    }
    return matrix
}

// TESTS

let matrix_5 = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25]
]

let matrix_6 = [
    [1, 2, 3, 4, 5, 26],
    [6, 7, 8, 9, 10, 27],
    [11, 12, 13, 14, 15, 28],
    [16, 17, 18, 19, 20, 29],
    [21, 22, 23, 24, 25, 30],
    [31, 32, 33, 34, 35, 36]
]

let matrix_4 = [
    [1, 2, 3, 10],
    [4, 5, 6, 11],
    [7, 8, 9, 12],
    [13, 14, 15, 16]
]

let matrix_2 = [
    [1],
    [3, 4]
]
let matrix_1 = [
    [1]
]


console.log(rotateMatrix(matrix_6))

// This solution should be O(nlogn) time and O(1) space