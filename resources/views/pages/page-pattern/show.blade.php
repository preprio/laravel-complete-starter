<x-layout>
    <div class="container mx-auto md:px-0">
        <x-banner
                title="Page pattern"
                copy="The generic page pattern can be used for different kinds of pages such as a landing page or a homepage. This pattern makes use of the Prepr Stack field to compose the elements on a page easily."
                url1="https://docs.prepr.io/create-schema/page-pattern/"
        />
    </div>

    @if(data_get($page,'stack'))
        <x-component :stack="data_get($page,'stack')" />
    @endif
</x-layout>