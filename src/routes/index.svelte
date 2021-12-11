<script>
	import { getHost } from '../lib/utils/static.util';
</script>

<main>

	<img
		class='background-image'
		src='{getHost()}/home-background.png'
		alt='3 sportifs en action.'
	/>

	<nav>
		<ul>
			<li>
				<a href='{getHost()}/'>
					<img src='{getHost()}/svg/icon.svg' alt='icon app'/>
				</a>
			</li>
			<li>
				<a href='{getHost()}/sports'>
					Liste
				</a>
			</li>
			<li>
				<a href='{getHost()}/'>
					Carte
				</a>
			</li>
		</ul>
	</nav>

	<div id='content'>
		<h1>
			Inscris-toi
			<br/>
			dans un club
			<br/>
			près de chez toi !
		</h1>

		<p>
			Grâce à nos outils, trouve facilement le créneau
			<br/>
			de ton sport préféré à proximité !
		</p>

		<ul class='details'>
			<li data-type='Liste'>
				<a href='{getHost()}/sports'>
					Tri des créneaux par sport, âge, sexe, jour, type de pratique...
				</a>
			</li>
			<li data-type='Carte'>Localisation des équipements sportifs à proximité</li>
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

	nav {
			font-size: 18px;
			padding: 16px 0;
	}

	nav ul {
			height: 64px;
			margin: 0;
			padding: 0;
			list-style: none;

			display: flex;
			align-items: stretch;
			gap: 32px;
	}

	nav ul a {
			height: 64px;
			line-height: 64px;
			display: block;
	}

	nav ul li:not(:first-child) a {
      padding: 0 16px;
	}

	a {
			text-decoration: none;
			color: inherit;

      position: relative;
      top: 0;
      transition: top ease 0.5s;
	}

	a:hover {
			top: -2px;
	}

  nav ul a:hover {
      top: -4px;
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

	ul.details {
			list-style: none;
			padding: 0;
	}

  ul.details li {
			margin: 8px;
	}

	ul.details li::before {
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