<x-layout xmlns="http://www.w3.org/1999/html">
    <div class="container mx-auto md:px-0">
        <x-banner
                title="Navigation pattern"
                copy="Navigation is a key structure that is implemented in every web app. This pattern shows parent and child relationships between menu items within a navigation."
                url1="https://docs.prepr.io/create-schema/navigation-pattern/"
        />
    </div>
    <div class="container mx-auto md:px-0">
        @if($navigation)
        <header class="mt-24">
            <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
                <div class="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto ">
                    <a href="https://flowbite.com" class="flex items-center">
                        <img src="https://flowbite.com/docs/images/logo.svg" class="h-6 mr-3 sm:h-9" alt="Flowbite Logo"/>
                        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                            {{ data_get($navigation,'title') }}
                        </span>
                    </a>
                    <div class="flex items-center lg:order-2">
                        <button
                                data-collapse-toggle="mobile-menu-2"
                                type="button"
                                class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                aria-controls="mobile-menu-2"
                                aria-expanded="false"
                        >
                            <span class="sr-only">Open main menu</span>
                            <svg
                                    class="w-6 h-6"
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
                            <svg
                                    class="hidden w-6 h-6"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                        fill-rule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clip-rule="evenodd"
                                ></path>
                            </svg>
                        </button>
                    </div>
                    <div class="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                        <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            @if(data_get($navigation,'menu_items'))
                                @foreach(data_get($navigation,'menu_items') AS $navigationItem)
                                    <li>
                                        @if(!data_get($navigationItem,'children'))
                                        <a href="{{ url('navigation') }}" class="block py-2 pl-3 pr-4 text-gray-600 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-violet-600 lg:p-0 dark:text-violet-500 lg:dark:hover:text-violet-500 dark:hover:bg-gray-700 dark:hover:text-violet-500 lg:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">
                                            {{ data_get($navigationItem,'title') }}
                                        </a>
                                        @endif

                                        @if(data_get($navigationItem,'children'))
                                            <button id="{{ data_get($navigationItem,'title') }}" data-dropdown-toggle="{{ data_get($navigationItem,'_id') }}" class="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-violet-600 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
                                                {{ data_get($navigationItem,'title') }}
                                                <svg
                                                        class="w-5 h-5 ml-1"
                                                        aria-hidden="true"
                                                        fill="currentColor"
                                                        viewBox="0 0 20 20"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                            fill-rule="evenodd"
                                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                            clip-rule="evenodd"
                                                    ></path>
                                                </svg>
                                            </button>

                                            <!-- Dropdown menu -->
                                            <div id="{{ data_get($navigationItem,'_id') }}" class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-60 dark:bg-gray-700 dark:divide-gray-600">
                                                <ul class="py-2 text-sm text-gray-600 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                                                    @if(data_get($navigationItem,'children'))
                                                        @foreach(data_get($navigationItem,'children') as $child)
                                                            <li>
                                                                <a href="#" class="block px-4 py-2 text-base font-semibold leading-none hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                                                    <span class="inline-flex items-center justify-center w-8 h-8 mr-4 rounded-lg shadow-md">
                                                                        <img class="w-4 h-4" src="{{ data_get($child,'icon.0.url') }}"/>
                                                                    </span> {{ data_get($child,'title') }}
                                                                </a>
                                                            </li>
                                                        @endforeach
                                                    @endif
                                                </ul>
                                            </div>
                                        @endif
                                    </li>
                                @endforeach
                            @endif
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
        @endif
    </div>
</x-layout>