<script lang="ts">
	import ResponsiveWrapper from '$lib/component/layout/ResponsiveWrapper.svelte';
	import MenuMobile from '$lib/component/layout/MenuMobile.svelte';
	import Menu from '$lib/component/layout/Menu.svelte';
	import BookButton from './_bookButtons.svelte';

	import Link from '$lib/component/atom/Link.svelte';
	import Spinner from '$lib/component/atom/Spinner.svelte';
	import Title from '$lib/component/atom/Title.svelte';
	import TextInput from '$lib/component/input/TextInput.svelte';
	import Radio from '$lib/component/input/Radio.svelte';
	import Checkbox from '$lib/component/input/Checkbox.svelte';
	import Range from '$lib/component/input/Range.svelte';
	import Select from '$lib/component/input/Select.svelte';
	import Autocomplete from '$lib/component/input/Autocomplete.svelte';
	import EmailInput from '../lib/component/input/EmailInput.svelte';
	import PasswordInput from '../lib/component/input/PasswordInput.svelte';
	import LeftRight from '../lib/component/book/LeftRight.svelte';
	import AddressAutocomplete from '../lib/component/input/AddressAutocomplete.svelte';
</script>

<ResponsiveWrapper>
	<MenuMobile slot="s" filtrable={false} />
	<Menu slot="l" />
</ResponsiveWrapper>

<div id="wrapper">
	<Title>Buttons</Title>
	<BookButton />

	<Title>Links</Title>
	<div class="container">
		<Link href="https://www.machyme.fr">Link</Link>
		<span style:width="20px" />
		<Link href="https://www.machyme.fr" img={{ src: '/svg/right-up.svg' }}>Link with icon</Link>
	</div>

	<Title>Spinner</Title>
	<div class="container" style:color="var(--main-color)">
		<Spinner />
	</div>

	<Title>Input</Title>

	<LeftRight>
		<TextInput slot="left" label="text input" name="text" variant="square" />
		<TextInput slot="right" label="text input" name="text" />
	</LeftRight>
	<LeftRight>
		<EmailInput slot="left" variant="square" />
		<EmailInput slot="right" />
	</LeftRight>
	<LeftRight>
		<PasswordInput slot="right" />
	</LeftRight>
	<LeftRight>
		<Autocomplete
			slot="left"
			name="autocomplete"
			label="select input"
			options={['option 1', 'option 2', 'option 3', 'option 4']}
			isCreatable={true}
			variant="square"
		/>
		<Autocomplete
			slot="right"
			name="autocomplete"
			label="select input"
			options={['option 1', 'option 2', 'option 3', 'option 4']}
			isCreatable={true}
		/>
	</LeftRight>
	<LeftRight>
		<Select slot="left" label="select input" name="select" options={['option 1', 'option 2']} />
	</LeftRight>
	<LeftRight>
		<AddressAutocomplete slot="left" variant="square" />
	</LeftRight>

	<Radio label="radio input" name="radio" options={['option 1', 'option 2']} />
	<Checkbox label="checkbox input" name="checkbox" options={['option 1', 'option 2']} />
	<Range label="range input" name="range" min={0} max={1200} step={20} />
</div>

<style>
	#wrapper {
		max-width: 600px;
		margin: 0 auto;
	}
	.container {
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 8px 8px 64px;
		gap: 8px;
	}
	.container :global(button) {
		flex-grow: 0;
	}
</style>
