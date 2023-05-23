<x-layout>
    <div class="grid max-w-screen-xl gap-4 mx-auto lg:grid-cols-2">
        <x-banner
                title="Personalization pattern"
                copy="An example pattern with personalized web pages. This pattern shows 3 variants of web pages that showcases personalization using the Stack field. Use it to create personalized user experiences in your own web app."
                url1="https://docs.prepr.io/create-schema/personalization-pattern/"
        />
        <x-segment-switch title="Try it out!"/>
    </div>

    @if(data_get($page,'stack'))
        <x-component :stack="data_get($page,'stack')" />
    @endif
</x-layout>