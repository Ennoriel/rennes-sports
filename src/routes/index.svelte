<script>
	import ResponsiveWrapper from '$lib/component/ResponsiveWrapper.svelte';
	import MenuMobile from '$lib/component/MenuMobile.svelte';
	import Menu from '$lib/component/Menu.svelte';

	import { getHost } from '$lib/utils/static.util';
</script>

<main>
	<img class="background-image" src="{getHost()}/home-background.png" alt="3 sportifs en action." />

	<ResponsiveWrapper>
		<MenuMobile slot="s" filtrable={false}/>
		<Menu slot="l"/>
	</ResponsiveWrapper>

	<div id="content">
		<h1>
			Inscris-toi
			<br />
			dans un club
			<br />
			près de chez toi !
		</h1>

		<p>
			Grâce à nos outils, trouve facilement le créneau
			<br />
			de ton sport préféré à proximité !
		</p>

		<ul>
			<li data-type="Liste">
				<a href="{getHost()}/recherche/liste">
					Tri des créneaux par sport, âge, sexe, jour, type de pratique...
				</a>
			</li>
			<li data-type="Carte">
				<a href="{getHost()}/recherche/carte">
					Localisation des équipements sportifs à proximité
				</a>
			</li>
		</ul>
	</div>
</main>

<style>
	main {
		width: calc(100vw - 240px);
		height: 100vh;
		padding: 0 120px;
		background-color: var(--main-color);
		color: white;
	}

	a {
		text-decoration: none;
		color: inherit;

		position: relative;
		top: 0;
		transition: top ease 0.4s;
	}

	a:hover {
		top: -2px;
	}

	#content {
		display: flex;
		flex-direction: column;
	}

	h1 {
		font-weight: 500;
		font-size: 48px;
		line-height: 48px;
		width: 800px;
	}

	p {
		font-size: 18px;
	}

	ul {
		list-style: none;
		padding: 0;
	}

	ul li {
		margin: 8px;
	}

	ul li::before {
		content: attr(data-type);
		display: inline-block;
		color: black;
		background-color: white;
		border-radius: 5px;
		margin-right: 16px;
		padding: 2px 6px;
		width: 35px;
		text-align: center;
	}

	.background-image {
		height: 450px;
		position: absolute;
		top: 50%;
		margin-top: -225px;
		right: 150px;
	}
</style>
