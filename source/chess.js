"use strict";

/**
 * Generates ASCII chessboard.
 * @param {number|string} size
 * @returns {string|null}
 */
const chess = size => {
    if (isNaN((size = parseInt(size, 10))) || size < 2) return null;

    const row = "* ".repeat(size / 2 + 1).slice(0, size);
    const doubleRow = row + "\n" + row.reverse() + "\n";

    return size % 2 === 0 ? doubleRow.repeat(size / 2) : doubleRow.repeat(size / 2 + 1)
        .slice(0, size * (size + 1));
};
