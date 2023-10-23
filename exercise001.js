
// promise
// 	.then((result) => console.log(`Yay! Promise resolved with response: ${result}`))
// 	.catch((err) => console.log(`Boo. Promise rejected with response:  ${err}`));

const main = async () => {
	try {
		const result = await new Promise((resolve, reject) => {
			if (Math.random() < 0.5) {
				setTimeout(() => resolve('done'), 2000);
			} else {
				setTimeout(() => reject('error'), 2000);
			}
		});
		console.log(`Yay! Promise resolved with response: ${result}`);
	} catch (err) {
		console.log(`Boo. Promise rejected with response:  ${err}`);
	}
}
const numberOfPromises = 10;
console.log(`Testing with ${numberOfPromises} promises`);
for (let i = 0; i < numberOfPromises; i++) main();