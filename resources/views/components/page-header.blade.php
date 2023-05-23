@if(data_get($data,'image.0.url'))

    <section style="background-image: url({{ data_get($data,'image.0.url') }})" class="my-12 flex items-center h-[600px] bg-no-repeat bg-cover">
        <div class="container mx-auto md:px-0">
            <h1 class="mb-4 text-3xl font-extrabold leading-none tracking-tight text-white md:text-6xl md:text-5xl lg:text-6xl">
                {{ data_get($data,'heading') }}
            </h1>
            <p class="mb-8 text-base font-normal text-white md:text-lg lg:text-xl">
                {{ data_get($data,'text') }}
            </p>
            @if(data_get($data,'cta_label'))
            <a href="#" data-modal-target="popup-modal" data-modal-toggle="popup-modal" class="inline-flex items-center px-6 py-3.5 text-sm font-medium text-center text-white rounded-lg bg-violet-700 hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-violet-300 dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-800">
                {{ data_get($data,'cta_label') }}
                <svg
                        aria-hidden="true"
                        class="w-5 h-5 ml-2 -mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                            fill-rule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                    ></path>
                </svg>
            </a>
            @endif
        </div>
    </section>
@else
    <div class="container mx-auto md:px-0">
        <section class="bg-white dark:bg-gray-900">
            <div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-12">
                <h1 class="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-6xl md:text-5xl lg:text-6xl dark:text-white">
                    {{ data_get($data,'heading') }}
                </h1>
                <p class="mb-8 text-base font-normal text-gray-500 md:text-lg lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
                    {{ data_get($data,'text') }}
                </p>
                @if(data_get($data,'cta_label'))
                <a href="#notify" data-modal-target="popup-modal" data-modal-toggle="popup-modal" class="inline-flex items-center px-6 py-3.5 text-sm font-medium text-center text-white rounded-lg bg-violet-700 hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-violet-300 dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-800">
                    {{ data_get($data,'cta_label') }}
                    <svg
                            aria-hidden="true"
                            class="w-5 h-5 ml-2 -mr-1"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                                fill-rule="evenodd"
                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                clip-rule="evenodd"
                        ></path>
                    </svg>
                </a>
                @endif
            </div>
        </section>
    </div>
@endif