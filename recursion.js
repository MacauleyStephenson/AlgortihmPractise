function fibRecursion(n, array = [0, 1]) {
	if (n === 0 || n === 1) {
		return array;
	} else {
		const previousFib = array[array.length - 1];
		const secondPreviousFib = array[array.length - 2]
		const newFib = previousFib + secondPreviousFib;
		array.push(newFib);
		return fibRecursion(n - 1, array);
	}
}

console.log(fibRecursion(8));