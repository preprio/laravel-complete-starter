<x-layout>
    <div class="container mx-auto md:px-0">
        <x-banner
                title="Blog pattern"
                copy="A typical pattern for blog articles and news sections. It also incorporates a setup to show related authors and categories. This pattern shows a summary of articles and a specific article in detail. In this pattern we also showcase the recommendations feature in Prepr."
                url1="https://docs.prepr.io/create-schema/blog-pattern/"
        />
        <x-hero
                title="Our blog"
                description="Fun recipes, tips-and-tricks and more from our in-house chefs."
        >
        </x-hero>
        <div class="grid grid-cols-4 gap-1 md:gap-12">
            <div class="col-span-4 md:hidden">
                <x-search />
            </div>
            <div class="hidden col-span-1 md:block">
                <x-sidebar-list/>
            </div>
            <div class="col-span-4 md:col-span-2">
                @if(data_get($articles,'items'))
                    @foreach(data_get($articles,'items') as $article)
                        <x-article-card :data="$article"/>
                    @endforeach
                @endif
            </div>
            <div class="hidden col-span-1 md:block">
                <x-search />
                <x-authors />
            </div>
        </div>
    </div>
</x-layout>