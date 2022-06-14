<a href="/">
	<div role="img" aria-label="Icone de l'application" />
	<img src="/logo-typo.png" aria-hidden="true" alt="" />
</a>

<style>
	a {
		border-radius: 8px;

		display: flex;
		align-items: center;
		height: 60px;
		padding-right: 8px;
		margin-right: 16px;
	}
	a div {
		width: 46.45px;
		height: 45px;
		margin: 7.5px;
		background: url('/fav.png');
		background-size: 100% 100%;
	}

	a:hover div,
	a:focus-visible div {
		background: url('/fav.gif');
		background-size: 100% 100%;
	}

	a:focus-visible {
		outline: 2px solid white;
		outline-offset: -4px;
	}

	img {
		height: 36px;
		width: 100px;
		transform: skewX(-5deg);
		margin-top: 4px;
	}
</style>
