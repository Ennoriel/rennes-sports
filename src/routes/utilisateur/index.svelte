<script lang="ts">
	import SvelteTable from 'svelte-table';
	import Actions from './_actions.svelte';

	import type { User } from '$lib/types/user.type';
	import { icons } from '$lib/component/atom/TableOrderIcons';

	export let users: Array<User>;

	function callback(user) {
		users.splice(
			users.findIndex((u) => u._id === user._id),
			1,
			user
		);
		users = users;
	}

	const columns = [
		{
			key: 'email',
			title: 'email',
			value: (v) => v.email,
			sortable: true
		},
		{
			key: 'role',
			title: 'role',
			value: (v) => v.role,
			sortable: true
		},
		{
			key: 'association',
			title: 'association',
			value: (v) => v.association,
			sortable: true
		},
		{
			key: 'actions',
			title: 'actions',
			renderComponent: {
				component: Actions,
				props: { callback }
			}
		}
	];
</script>

<div id="table-users">
	<SvelteTable
		{columns}
		rows={users}
		sortOrders={[1, -1, 0]}
		iconSortable={icons.sortable}
		iconAsc={icons.asc}
		iconDesc={icons.desc}
	/>
</div>

<style>
	#table-users :global(td) {
		text-align: center;
	}
</style>
