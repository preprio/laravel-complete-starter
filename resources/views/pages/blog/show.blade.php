<x-layout>
    <div class="container mx-auto md:px-0">
        <x-banner
                title="Blog pattern"
                copy="A typical pattern for blog articles and news sections. It also incorporates a setup to show related authors and categories. This pattern shows a summary of articles and a specific article in detail. In this pattern we also showcase the recommendations feature in Prepr."
                url1="https://docs.prepr.io/create-schema/blog-pattern/"
        />
        <main class="pb-16 mt-20 bg-white lg:pb-24 dark:bg-gray-900">
            <div class="relative z-20 flex justify-between max-w-screen-xl mx-auto bg-white rounded dark:bg-gray-900">
                <article class="xl:w-[928px] w-full max-w-none format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
                    <h1 class="mb-10 text-6xl font-bold leading-none text-gray-900">
                        {{ data_get($article,'title') }}
                    </h1>
                    <div class="flex flex-col justify-between py-6 mb-10 border-t border-b border-gray-200 lg:flex-row lg:items-center dark:border-gray-700">
                        <span class="mb-4 text-base font-normal text-gray-500 lg:mb-0 dark:text-gray-400">
                            By
                            <a href="#" rel="author" class="font-medium text-gray-900 no-underline dark:text-white hover:underline">
                                {{ data_get($article,'authors.0.full_name') }}
                            </a>
                            in
                            @if(data_get($article,'categories'))
                                @foreach(data_get($article,'categories') as $index => $category)
                                    <a href="#" class="font-medium text-gray-900 no-underline dark:text-gray-400 hover:underline">
                                        {{ data_get($category,'title') }}{{ $index+1 < count(data_get($article,'categories')) ?? '<span>,</span>' }}
                                    </a>
                                @endforeach
                            @endif
                        </span>
                    </div>
                    @if(data_get($article,'content'))
                        @foreach(data_get($article,'content') as $contentType)
                            <div>
                                @if(data_get($contentType,'__typename') === 'Assets')
                                <div class="my-10">
                                    <img class="rounded-lg" src="{{ data_get($contentType,'items.0.url') }}"/>
                                    @if(data_get($contentType,'items.0.caption'))
                                    <p class="mt-4 text-center text-gray-500">
                                        {{ data_get($contentType,'items.0.caption') }}
                                    </p>
                                    @endif
                                </div>
                                @endif
                                @if(data_get($contentType,'__typename') === 'Text')
                                <div class="mb-2 article">
                                    {!! data_get($contentType,'body') !!}
                                </div>
                                @endif
                            </div>
                        @endforeach
                    @endif
                </article>
                <aside class="hidden xl:block" aria-labelledby="sidebar-label">
                    <div class="xl:w-[304px] sticky top-6">
                        <h3 id="sidebar-label" class="sr-only">
                            Sidebar
                        </h3>
                        <x-newsletter-subscribe />
                        <x-article-author :data="data_get($article,'authors')" />
                    </div>
                </aside>
            </div>
        </main>
    </div>
</x-layout>