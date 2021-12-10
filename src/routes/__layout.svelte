<slot/>

<style>
	:global(body) {
      font-family: 'Roboto', sans-serif;
			font-size: 14px;
			line-height: 1.5em;
			background-color: #FAFAFA;
			margin: 0;

			--main-color: #002395;
	}
  :global(*) {
			--dark: #CCC;
			--light: #FAFAFA;
      scrollbar-width: thin;
      scrollbar-color: var(--dark) var(--light);
      scroll-behavior: smooth;
  }
  :global(*::-webkit-scrollbar-track) {
      background: var(--light);
  }
  :global(*::-webkit-scrollbar-thumb) {
      background-color: var(--dark) ;
  }
  :global(*::-webkit-scrollbar) {
      width: 7px;
  }
</style>