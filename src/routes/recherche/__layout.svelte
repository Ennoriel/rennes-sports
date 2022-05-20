<script lang="ts">
	import ResponsiveWrapper from '$lib/component/layout/ResponsiveWrapper.svelte';
	import MenuMobile from '$lib/component/layout/MenuMobile.svelte';
	import Menu from '$lib/component/layout/Menu.svelte';
	import Headroom from '$lib/component/layout/Headroom.svelte';
	import { state } from '$lib/store/state';
</script>

<Headroom zIndex={1003} bind:pin={$state.isPin}>
	<ResponsiveWrapper>
		<MenuMobile slot="s" />
		<Menu slot="l" />
	</ResponsiveWrapper>
</Headroom>

<slot />
