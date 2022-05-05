<script lang="ts">
	import ResponsiveWrapper from '$lib/component/layout/ResponsiveWrapper.svelte';
	import MenuMobile from '$lib/component/layout/MenuMobile.svelte';
	import Menu from '$lib/component/layout/Menu.svelte';
</script>

<ResponsiveWrapper>
	<MenuMobile slot="s" />
	<Menu slot="l" />
</ResponsiveWrapper>

<slot />
