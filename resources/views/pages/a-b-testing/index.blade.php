<x-layout>
    <div class="grid max-w-screen-xl gap-4 mx-auto lg:grid-cols-2">
        <x-banner
                title="A/B test pattern"
                copy="The A/B test pattern shows variants of web pages used for A/B testing. This pattern makes use of the A/B Testing feature in Prepr. Use it to implement A/B testing in your web app and optimize your content."
                url1="https://docs.prepr.io/create-schema/ab-test-pattern/"
        />
        <x-a-b-switch title="Try it out!" @set-segment="changeSegment" />
    </div>

    @if(data_get($page,'stack'))
        <x-component :stack="data_get($page,'stack')" />
    @endif
</x-layout>