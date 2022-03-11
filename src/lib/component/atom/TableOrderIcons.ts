const svg = ([str]: TemplateStringsArray) => {
	return `
        <svg style="width: 12px; height: 12px; margin-bottom: -2px;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linejoin="round">
            ${str}
        </svg> 
    `;
};

export const icons = {
	sortable: svg`<path d="M12 0 L4 10 L20 10Z"/><path d="M12 24 L4 14 L20 14Z"/>`,
	asc: svg`<path d="M12 0 L4 10 L20 10Z"/>`,
	desc: svg`<path d="M12 24 L4 14 L20 14Z"/>`
};
