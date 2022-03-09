<script>
	import ResponsiveWrapper from '$lib/component/ResponsiveWrapper.svelte';
	import MenuMobile from '$lib/component/MenuMobile.svelte';
	import Menu from '$lib/component/Menu.svelte';
</script>

<ResponsiveWrapper>
	<MenuMobile slot="s" filtrable={false} />
	<Menu slot="l" />
</ResponsiveWrapper>

<slot />
