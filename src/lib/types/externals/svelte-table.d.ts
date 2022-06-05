declare module 'svelte-table' {
	import type { SvelteComponentTyped } from 'svelte';

	type Row = $$Generic;

	type NameValue = {
		name: string;
		value: string;
	};

	type Html = string;

	type Column = {
		key: string;
		title: string;
		searchValue?: (row: Row) => string | number;
		renderValue?: (row: Row) => Html | number;
		value?: (row: Row) => Html | number;
		filterOptions?: (row: Row) => NameValue | Array<string>;
		headerFilterClass?: string;
		headerClass?: string;
		class?: string;
		sortable?: boolean;
		renderComponent?: any;
	};

	export default class SvelteTable extends SvelteComponentTyped<
		{
			columns: Array<Column>;
			rows: Array<Row>;
			c_rows?: Array<Row>;
			sortOrders?: Array<number>;
			sortBy?: string;
			sortOrder?: number;
			filterSelections?: Record<string, string>;
			expanded?: Array<string | number>;
			expandRowKey?: string;
			expandSingle?: boolean;
			iconAsc?: string;
			iconDesc?: string;
			iconSortable?: string;
			iconExpanded?: string;
			showExpandIcon?: boolean;
			classNameTable?: string;
			classNameThead?: string;
			classNameTbody?: string;
			classNameSelect?: string;
			classNameInput?: string;
			classNameRow?: string;
			classNameCell?: string;
			classNameRowExpanded?: string;
			classNameExpandedContent?: string;
			classNameCellExpand?: string;
		},
		never,
		{
			header: {
				sortOrder?: number;
				sortBy?: string;
			};
			row: {
				row?: Row;
				n?: number;
			};
			expanded: {
				row?: Row;
				n?: number;
			};
		}
	> {}
}
