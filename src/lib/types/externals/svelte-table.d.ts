declare module 'svelte-table' {
	import type { SvelteComponentTyped } from 'svelte';

	type Row = $$Generic;

	type Column = {
		key: string;
		title: string;
		searchValue?: Function;
		renderValue?: Function;
		value?: Function;
		filterOptions?: Function;
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
			filterSelections?: Object;
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
