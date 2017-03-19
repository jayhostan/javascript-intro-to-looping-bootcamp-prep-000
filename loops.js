var forLoop = function(array) {
    let i = 0;
    for (i = 0; i < 25; i++) {
        if (i === 1) {
            array.push("I am 1 strange loop.");
        } else {
            array.push(`I am ${i} strange loops.`);
        }
    }
    return array;
};

var whileLoop = function(n) {
    let counter = n;
    while (counter > 0) {
        console.log(--counter);
    }
    return 'done';
};

var doWhileLoop = function(array) {
    function maybeTrue() {
        return Math.random() >= 0.5
    }

    do {
        array = array.slice(1);
    } while (array.length > 0 && maybeTrue());
    return array;
};
