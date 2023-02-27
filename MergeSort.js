function mergeSort(arr) {
	if (arr.length < 2) return arr;
	const [a, b] = [
		mergeSort(arr.slice(0, arr.length / 2)),
		mergeSort(arr.slice(arr.length / 2)),
	];
	let c = [];
	let [i, j] = [0, 0];
	while (i < a.length || j < b.length) {
		a[i] <= b[j] ? c.push(a[i++]) : c.push(b[j++]);
		// optimize if one side's biggest is smaller than the other side's smallest
		if (i == a.length) {
			c = c.concat(b.slice(j));
			break;
		}
		if (j == b.length) {
			c = c.concat(a.slice(i));
			break;
		}
	}
	return c;
}
