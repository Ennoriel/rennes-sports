export function clickAway(node: HTMLElement, method: () => void): { destroy: () => void } {
	function listener(e: MouseEvent) {
		if (!node.contains(e.target as HTMLElement)) {
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
