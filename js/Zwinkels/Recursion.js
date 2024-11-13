"use strict";
const RecSumUpTo = (n) => {
    if (n <= 0) {
        return 0;
    }
    return n + RecSumUpTo(n - 1);
};
