"use strict";

/**
 * Generates ASCII chessboard.
 * @param {number|string} size
 * @returns {string|null}
 */
const chess = size => {
    if (isNaN((size = parseInt(size))) || size < 2) return null;
    let row = [], board = [], flag = 1, result;

    for (let i = 0; i < size / 2 + 1; i++) {
        row.push('*', ' ');
    }

    const rowFirst = row.slice(0, size);
    const rowSecond = row.slice(1, size + 1);

    rowFirst.push('\n');
    rowSecond.push('\n');

    for (let i = 0; i < size; i++, flag *= -1) {
        flag === 1 ? board.push(rowFirst.join('')) : board.push(rowSecond.join(''));
    }

    return board.join('');
};
