<script lang="ts">
	export let label = 'E-mail';
	export let name: string;
</script>

<label>
	{label}
	<input type="email" {name} />
</label>

<style>
	label {
		display: flex;
		flex-direction: column;
		text-align: center;
		margin-bottom: 16px;
		font-weight: 100;
	}

	input {
		height: 42px;
		border-radius: 21px;
		border: none;
		box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
		padding: 0 16px;
		color: var(--main-color);
		text-align: center;
		margin-top: 6px;
	}

	:focus-visible {
		outline: 2px solid var(--focus-color);
		outline-offset: 2px;
	}
</style>
