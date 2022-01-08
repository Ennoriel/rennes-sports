<script lang="ts">
    import { getHost } from '$lib/utils/static.util';

    export let imgSrc;
    export let target;
    export let alt;
    export let href;
</script>

<a {target} {href}>
    <img {alt} src="{getHost()}{imgSrc}" />
    <slot/>
</a>

<style>
    a {
        display: block;
        text-align: center;
        line-height: 17px;
        color: black;
        text-decoration: none;
        outline: none;
    }
    a:hover,
    a:focus {
        color: var(--secondary-color);
    }
</style>
