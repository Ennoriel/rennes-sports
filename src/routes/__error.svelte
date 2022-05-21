<main>
	<h1>Vous semblez loin de la réalité !</h1>
	<p>Pour revenir vers l'accueil : <a href="/">c'est ici !</a></p>
</main>

<style>
	main {
		background-color: var(--main-color);
		height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-evenly;
	}

	h1 {
		font-size: 72px;
		color: white;
		text-align: center;
	}

	p {
		font-size: 24px;
		color: white;
	}

	a {
		font-weight: bolder;
		transition: all 0.2s;
	}

	a:hover {
		color: var(--secondary-color);
	}

	:focus-visible {
		transition: all 0s;
		border-radius: 8px;
		outline: 2px solid white;
		outline-offset: 2px;
	}
</style>
