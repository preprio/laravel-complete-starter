<x-layout>
    <div class="container mx-auto">
        <x-hero />
        <x-hero
                title="Prepr Patterns"
                description="This site provides examples of how Prepr can be used to structure and build various webpages. We offer examples for building blogs, live stream sections, navigation structures, landing pages and even personalized webpages or an A/B testing setup."
        />

        <div class="flex flex-wrap justify-center md:gap-y-3">
            <a href="{{ url('page/home') }}">
            <button type="button" class="text-white bg-violet-600 hover:bg-violet-700 focus:ring-4 border mb-4 md:mb-0 border-violet-600 hover:border-violet-700 focus:outline-none focus:ring-violet-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 text-center inline-flex items-center mr-2 dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-800 font-medium">
                Page pattern
            </button>
            </a>
            <a href="{{ url('blog') }}">
            <button type="button" class="text-white bg-violet-600 hover:bg-violet-700 focus:ring-4 border mb-4 md:mb-0 border-violet-600 hover:border-violet-700 focus:outline-none focus:ring-violet-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 text-center inline-flex items-center mr-2 dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-800 font-medium">
                Blog pattern
            </button>
            </a>
            <a href="{{ url('livestream') }}">
            <button type="button" class="text-white bg-violet-600 hover:bg-violet-700 focus:ring-4 border mb-4 md:mb-0 border-violet-600 hover:border-violet-700 focus:outline-none focus:ring-violet-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 text-center inline-flex items-center mr-2 dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-800 font-medium">
                Live stream pattern
            </button>
            </a>
            <a href="{{ url('navigation') }}">
            <button type="button" class="text-white bg-violet-600 hover:bg-violet-700 focus:ring-4 border mb-4 md:mb-0 border-violet-600 hover:border-violet-700 focus:outline-none focus:ring-violet-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 text-center inline-flex items-center mr-2 dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-800 font-medium">
                Navigation pattern
            </button>
            </a>
            <a href="{{ url('personalization') }}">
            <button type="button" class="text-white bg-violet-600 hover:bg-violet-700 focus:ring-4 border mb-4 md:mb-0 border-violet-600 hover:border-violet-700 focus:outline-none focus:ring-violet-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 text-center inline-flex items-center mr-2 dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-800 font-medium">
                Personalization pattern
            </button>
            </a>
            <a href="{{ url('a-b-testing') }}">
            <button type="button" class="text-white bg-violet-600 hover:bg-violet-700 focus:ring-4 border mb-4 md:mb-0 border-violet-600 hover:border-violet-700 focus:outline-none focus:ring-violet-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 text-center inline-flex items-center mr-2 dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-800 font-medium">
                A/B testing pattern
            </button>
            </a>
        </div>
    </div>
</x-layout>
