const rok =  2005;

if ((rok % 4 == 0 && rok % 100 != 0) || rok % 400 == 0) {
    console.log(`Rok ${rok} jest przestępny`);
} else {
    console.log(`Rok ${rok} nie jest przestępny`);
}