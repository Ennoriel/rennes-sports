<script>
	import ResponsiveWrapper from '$lib/component/ResponsiveWrapper.svelte';
	import MenuMobile from '$lib/component/MenuMobile.svelte';
	import Menu from '$lib/component/Menu.svelte';

	import { getHost } from '$lib/utils/static.util';
</script>


<ResponsiveWrapper>
	<MenuMobile slot="s" filtrable={false}/>
	<Menu slot="l"/>
</ResponsiveWrapper>

<main>
	<div id="content">
		<h1>
			Inscris-toi
			<br />
			dans un club
			<br />
			près de chez toi !
		</h1>

		<p>
			Grâce à nos outils, trouve facilement le créneau <span>de ton sport préféré à proximité !</span>
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

	<img class="background-image" src="{getHost()}/home-background.png" alt="3 sportifs en action." />

</main>

<style>
	main {
		background-color: var(--main-color);
		color: white;
		padding: 1em;
	}
	main * {
		text-align: center;
	}
	h1 {
		font-size: 50px;
		line-height: 1.1;
		margin: .5em 0;
	}
	p {
		font-size: 20px;
		line-height: 1.3;
		margin: 2em;
	}

	ul {
		list-style: none;
		padding: 0;
	}

	ul li {
		font-size: 16px;
		margin: 2em;
		transition: all .2s;
	}

	ul li::before {
		content: attr(data-type);
		display: block;
		color: black;
		background-color: white;
		border-radius: 5px;
		margin: 8px auto;
		padding: 4px 8px;
		width: 45px;
		text-align: center;
		transition: all .2s;
	}

	a:focus {
		outline: none;
	}
	li:hover::before, li:focus-within::before {
		background-color: var(--main-color);
		outline: 2px solid white;
		color: white;
	}

	img {
		width: 90vw;
		margin: auto;
		display: block;
	}

	@media (min-width: 1024px) {
		main {
			padding: 1em 5em;
			min-height: calc(100vh - var(--header-height) - 2em);
		}
		#content {
			position: relative;
			z-index: 1;
		}
		main * {
			text-align: left;
		}
		p {
			margin: 2em 0;
		}
		p span {
			display: block;
		}
		ul li {
			margin: 1em 0;
		}
		ul li::before {
			display: inline-block;
			margin: 0 12px 0 0;
		}
		img {
			position: absolute;
			max-width: 500px;
			max-height: 80vh;
			object-fit: scale-down;
			top: 50%;
			transform: translateY(-50%);
			width: 50vw;
			right: min(5%, 100px);
			z-index: 0;
		}
	}
</style>
