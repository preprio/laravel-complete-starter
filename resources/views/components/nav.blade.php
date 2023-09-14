<x-clone-banner/>
<nav class="absolute top-0 left-0 right-0 bg-white border-gray-200 md:relative dark:border-gray-600 dark:bg-gray-900">
    <div class="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto min-h-20 md:h-20 md:px-6">
        <x-logo/>
        <button
            id="mega-menu-full-cta-button"
            data-collapse-toggle="mega-menu-full-cta"
            type="button"
            class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mega-menu-full-cta"
            aria-expanded="false"
        >
            <span class="sr-only">Open main menu</span>
            <svg
                class="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                ></path>
            </svg>
        </button>

        <div id="mega-menu-full-cta" class="hidden items-center justify-between w-full md:flex md:w-auto md:grow md:basis-auto">
            <ul class="flex flex-col pl-4 text-sm font-medium md:flex-row md:space-x-8 md:mt-0">
                <li>
                    <a href="{{ url('/page/home') }}" class="{{ Request::is('page*') ? 'text-violet-600 font-semibold' : 'text-gray-700 font-medium' }} block py-2 pr-4 border-t border-b border-gray-100 md:pl-3 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-violet-700 md:p-0 dark:text-gray-400 md:dark:hover:text-violet-500 dark:hover:bg-gray-700 dark:hover:text-violet-500 md:dark:hover:bg-transparent dark:border-gray-700">
                        Page
                    </a>
                </li>
                <li>
                    <a href="{{ url('/blog') }}" class="{{ Request::is('blog*') ? 'text-violet-600 font-semibold' : 'text-gray-700 font-medium' }} block py-2 pr-4 border-b border-gray-100 md:pl-3 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-violet-700 md:p-0 dark:text-gray-400 md:dark:hover:text-violet-500 dark:hover:bg-gray-700 dark:hover:text-violet-500 md:dark:hover:bg-transparent dark:border-gray-700">
                        Blog
                    </a>
                </li>
                <li>
                    <a href="{{ url('/livestream') }}" class="{{ Request::is('livestream*') ? 'text-violet-600 font-semibold' : 'text-gray-700 font-medium' }} block py-2 pr-4 border-b border-gray-100 md:pl-3 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-violet-700 md:p-0 dark:text-gray-400 md:dark:hover:text-violet-500 dark:hover:bg-gray-700 dark:hover:text-violet-500 md:dark:hover:bg-transparent dark:border-gray-700">
                        Live stream
                    </a>
                </li>
                <li>
                    <a href="{{ url('/navigation') }}" class="{{ Request::is('navigation*') ? 'text-violet-600 font-semibold' : 'text-gray-700 font-medium' }} block py-2 pr-4 border-b border-gray-100 md:pl-3 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-violet-700 md:p-0 dark:text-gray-400 md:dark:hover:text-violet-500 dark:hover:bg-gray-700 dark:hover:text-violet-500 md:dark:hover:bg-transparent dark:border-gray-700">
                        Navigation
                    </a>
                </li>
                <li>
                    <a href="{{ url('/personalization') }}" class="{{ Request::is('personalization*') ? 'text-violet-600 font-semibold' : 'text-gray-700 font-medium' }} block py-2 pr-4 border-b border-gray-100 md:pl-3 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-violet-700 md:p-0 dark:text-gray-400 md:dark:hover:text-violet-500 dark:hover:bg-gray-700 dark:hover:text-violet-500 md:dark:hover:bg-transparent dark:border-gray-700">
                        Personalization
                    </a>
                </li>
                <li>
                    <a href="{{ url('/a-b-testing') }}" class="{{ Request::is('a-b-testing*') ? 'text-violet-600 font-semibold' : 'text-gray-700 font-medium' }} block py-2 pr-4 border-b border-gray-100 md:pl-3 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-violet-700 md:p-0 dark:text-gray-400 md:dark:hover:text-violet-500 dark:hover:bg-gray-700 dark:hover:text-violet-500 md:dark:hover:bg-transparent dark:border-gray-700">
                        A/B testing
                    </a>
                </li>
            </ul>
        </div>
    </div>
</nav>
