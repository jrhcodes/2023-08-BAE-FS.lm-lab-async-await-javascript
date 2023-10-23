const promise = new Promise((resolve, reject) => {
	if (Math.random() < 0.5) {
		setTimeout(() => resolve('done'), 2000);
	} else {
		setTimeout(() => reject('error'), 2000);
	}
});

promise
	.then((result) => console.log(`Yay! Promise resolved with response: ${result}`))
	.catch((err) => console.log(`Boo. Promise rejected with response:  ${err}`));