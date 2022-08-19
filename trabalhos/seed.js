const fs = require('fs');

const arrays = {}

for (let k = 0; k < 100; k++) {

    let array = [];

    for (let j = 0; j < Math.floor(Math.random() * 100); j++) {
        array.push(Math.floor(Math.random() * 100));
        //garante que vai ter um número repetido no array
        if (k % 2 === 0) array.push(array[0]);

    }

    arrays[`${k}`] = array;

}

fs.writeFileSync('arrays.json', JSON.stringify(arrays))
