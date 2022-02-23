export function clickAway(node, method) {
	function listener(e) {
		if (!node.contains(e.target)) {
			method();
		}
	}

	if (method) document.addEventListener('click', listener);

	return {
		destroy() {
			document.removeEventListener('click', listener);
		}
	};
}
