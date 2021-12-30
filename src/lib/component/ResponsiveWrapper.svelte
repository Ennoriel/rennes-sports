<span class="l">
    <slot name="l"/>
</span>
<span class="s">
    <slot name="s">
        <slot name="l" />
    </slot>
</span>

<style>
    @media (max-width: 720px) {
        .l {
            display: none;
        }
    }
    @media (min-width: 721px) {
        .s {
            display: none;
        }
    }
</style>