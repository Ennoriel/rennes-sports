<script lang="ts">
	import User from '$lib/component/atom/User.svelte';
</script>

<main>
	<article id="laius">
		<h1>Pourquoi ce projet ?</h1>
		<p>
			Remplis de bonnes résolutions à la rentrée, nous nous sommes aperçus qu’il n’était pas facile
			de se retrouver parmi la multitude de créneaux sportifs proposés par les très nombreux clubs
			locaux.
		</p>
		<p>
			Si par malheur nous avions raté le forum de sports de notre quartier en septembre, nous étions
			bons pour une interminable recherche sur internet !
		</p>
		<p>
			Souhaitant avant tout pratiquer une activité physique pas très loin de notre lieu de résidence
			et en dehors de nos horaires de travail, la création de cet outil nous a paru indispensable !
		</p>

		<img src="/home-background.png" alt="3 sportifs en action." />
	</article>

	<article id="who-we-are">
		<h1>Qui sommes nous ?</h1>
		<div>
			<User
				name="Claire Birgand"
				description="Infographiste salariée pendant plus de 8 ans, elle vient de se lancer depuis en freelance !"
				imgSrc="img/claire-birgand.jpg"
				links={[
					{
						label: 'Portfolio',
						href: 'https://www.clairebirgand.fr/'
					},
					{
						label: 'LinkedIn',
						href: 'https://www.linkedin.com/in/claire-birgand-20b1b2149/'
					}
				]}
			/>
			<User
				name="Maxime Dupont"
				description="Développeur reconverti depuis plus de 5 ans, il travaille pour Jamespot !"
				imgSrc="img/maxime-dupont.jpg"
				links={[
					{
						label: 'Github',
						href: 'https://github.com/Ennoriel'
					},
					{
						label: 'LinkedIn',
						href: 'https://www.linkedin.com/in/maxime-dupont-dev/'
					}
				]}
			/>
		</div>
	</article>
</main>

<style>
	article {
		padding: 16px;
	}

	#laius {
		background-color: var(--main-color);
		color: white;
	}

	#who-we-are {
		color: var(--main-color);
	}

	h1 {
		font-size: 32px;
		line-height: 64px;
		margin-bottom: 32px;
	}

	p {
		font-size: 14px;
		padding-bottom: 16px;
		font-weight: 300;
	}

	h1,
	p {
		text-align: center;
	}

	img {
		display: block;
		width: min(400px, calc(100vw - 100px));
		margin: 0 auto -35px;
	}

	@media (min-width: 721px) {
		main {
			padding-bottom: 32px;
		}

		#laius {
			padding-left: max(0px, calc((100vw - 1000px) / 2));
			padding-right: max(300px, calc((100vw - 1000px) / 2 + 300px));
		}

		#who-we-are > div {
			display: flex;
			gap: 32px;
		}

		h1 {
			font-size: 44px;
			margin-bottom: 32px;
		}

		h1,
		p {
			text-align: left;
		}

		article {
			position: relative;
			padding: 2% max(0px, calc((100vw - 1000px) / 2));
		}

		img {
			visibility: visible;
			height: auto;
			width: 300px;

			position: absolute;
			bottom: 5px;
			right: max(25px, calc((100vw - 1000px) / 2) - 75px);
		}
	}
</style>
