export function clickAway(node: HTMLElement, method: () => void): { destroy: () => void } {
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
