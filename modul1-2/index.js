const wylosowana =  Math.floor(Math.random()*10+1);

let prompt = require('prompt');
prompt.start();
prompt.get(['zgaduj'], function (err, result) {
    if (wylosowana == result.zgaduj) {
        console.log(`Udało się`);
    } else {
        console.log(`Spróbuj ponownie`);
    }
   // console.log(`twoja liczba to `+ result.zgaduj);
});

//console.log(`wylosowana to ${wylosowana}`);
