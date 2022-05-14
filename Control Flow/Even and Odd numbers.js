showNumbers(10);

function showNumbers(limit) {
    for(let i = 0; i <= limit; i++) {
        // first implementation
        // if(i % 2 === 0) console.log(i, 'EVEN');
        // else console.log(i, " ODD");

        // another implementation
        const message = (i % 2 === 0) ? 'EVEN' : 'ODD';
        console.log(i, message);
    }
}