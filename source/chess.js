"use strict";

/**
 * Generates ASCII chessboard.
 * @param {number} size
 * @returns {string|null}
 */
const chess = size => {
    if (isNaN(parseInt(size)) || size < 2) return null;

    let row = '', board = '', flag = 1, rowShifted;
    for (let i = 0; i < size / 2 + 1; i++) {
        row += "* ";
    }

    row = row.substring(0, size);
    rowShifted = " " + row.substring(0, size - 1) + "\n";
    row += "\n";

    for (let i = 0; i < size; i++, flag *= -1)
        board += flag === 1 ? row : rowShifted;
    return board;
};
