"use strict";

/**
 * Generates ASCII chessboard.
 * @param {number|string} size
 * @returns {string|null}
 */
const chess = size => {
    if (isNaN((size = parseInt(size))) || size < 2) return null;
    const board = [];
    const rowPart = '* ';

    const row = rowPart.repeat(size / 2 + 1).split('');
    const rowFirst = row.slice(0, size);
    const rowSecond = row.slice(1, size + 1);

    rowFirst.push('\n');
    rowSecond.push('\n');

    for (let i = 0; i < size; i++) {
        i % 2 !== 1 ? board.push(rowFirst.join('')) : board.push(rowSecond.join(''));
    }

    return board.join('');
};
