let zeroMatrix = (matrix) => {
    let h = matrix.length;
    if (h == 0) return matrix
    let w = matrix[0].length;
    let z_i = -1;
    let z_j = -1;
    // get the vertices of the element 0
    for (let i = 0; i < h; i++) {
        for (let j = 0; j < w; j++) {
            if (matrix[i][j] == 0) {
                z_i = i;
                z_j = j;
            }
        }
    }
    if (z_i > -1 && z_j > -1) {
        for (let i = 0; i < h; i++) {
            matrix[i][z_j] = 0;
        }
        for (let j = 0; j < w; j++) {
            matrix[z_i][j] = 0;
        }
    }

    return matrix;
}

// TESTS

let matrix_1 = [
    [1, 1, 1, 1]
]

let matrix_2 = []

let matrix_3 = [
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 0, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1]
]

let matrix_4 = [
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 0, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1]
]
console.log(zeroMatrix(matrix_1));

// This solution should be O(N*M) space and O(1) space.