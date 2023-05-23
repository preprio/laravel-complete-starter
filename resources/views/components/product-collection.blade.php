<div class="container mx-auto md:px-0">
    <section class="bg-white dark:bg-gray-900">
        <div class="max-w-screen-xl px-4 py-8 mx-auto lg:py-14 lg:px-6">
            <div class="max-w-screen-sm mx-auto mb-6 text-center lg:mb-10">
                <h2 class="mb-4 text-xl font-extrabold tracking-tight text-gray-900 md:text-4xl dark:text-white">
                    {{ data_get($data,'heading') }}
                </h2>
                <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">
                    {{ data_get($data,'description') }}
                </p>

                <p class="mt-6 text-sm font-medium text-center md:text-lg text-violet-600">
                    <a href="#" data-modal-target="popup-modal" data-modal-toggle="popup-modal">{{ data_get($data,'cta_label') }}
                        <svg
                                class="inline ml-2"
                                width="16"
                                height="15"
                                viewBox="0 0 16 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M8.293 0.350129C8.48053 0.162658 8.73484 0.0573425 9 0.0573425C9.26516 0.0573425 9.51947 0.162658 9.707 0.350129L15.707 6.35013C15.8945 6.53766 15.9998 6.79196 15.9998 7.05713C15.9998 7.32229 15.8945 7.5766 15.707 7.76413L9.707 13.7641C9.5184 13.9463 9.2658 14.0471 9.0036 14.0448C8.7414 14.0425 8.49059 13.9374 8.30518 13.7519C8.11977 13.5665 8.0146 13.3157 8.01233 13.0535C8.01005 12.7913 8.11084 12.5387 8.293 12.3501L12.586 8.05713H1C0.734784 8.05713 0.48043 7.95177 0.292893 7.76424C0.105357 7.5767 0 7.32235 0 7.05713C0 6.79191 0.105357 6.53756 0.292893 6.35002C0.48043 6.16249 0.734784 6.05713 1 6.05713H12.586L8.293 1.76413C8.10553 1.5766 8.00021 1.32229 8.00021 1.05713C8.00021 0.791965 8.10553 0.537657 8.293 0.350129Z"
                                    fill="#4338CA"
                            />
                        </svg>
                    </a>
                </p>
            </div>
            <div class="hidden gap-8 md:grid sm:grid-cols-2 lg:grid-cols-3">

                @if(data_get($data,'products'))
                    @foreach(data_get($data,'products') AS $product)

                        <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                            <a href="#" class="">
                                <img class="object-contain w-full px-5 py-6 h-60" src="{{ data_get($product,'image') }}" alt="{{ data_get($product,'title') }} product image" />
                            </a>
                            <div class="px-5 pb-5">
                                <a href="#">
                                    <h5 class="mb-3 text-xl font-semibold tracking-tight text-gray-900 line-clamp-2 dark:text-white">
                                        {{ data_get($product,'title') }}
                                    </h5>
                                    <p class="mb-4 text-base font-normal text-gray-500 line-clamp-2">
                                        {{ data_get($product,'description') }}
                                    </p>
                                </a>

                                <div class="flex items-center justify-between">
                                    <span class="text-3xl font-bold text-gray-900 dark:text-white">
                                        ${{ number_format(data_get($product,'price'), 2) }}
                                    </span>
                                    <a href="#" data-modal-target="popup-modal" data-modal-toggle="popup-modal" class="text-white bg-violet-700 hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-violet-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-800">
                                        Add to cart
                                    </a>
                                </div>
                            </div>
                        </div>

                    @endforeach
                @endif
            </div>

            <div class="md:hidden">
                <x-carousel :items="data_get($data,'products')">
                    <div class="rounded-lg h-[278px]">
                        @foreach(data_get($data,'products') as $index => $product)
                        <div data-carousel-item="{{ $index == 0 }}" class="absolute w-full duration-700 bg-white border border-gray-200 rounded-lg h-[278px] dark:bg-gray-800 dark:border-gray-700">
                            <a href="#" class="">
                                <img class="object-cover w-full px-16 py-6 rounded-t-lg h-44" src="{{ data_get($product,'image') }}" alt="{{ data_get($product,'title') }} product image"/>
                            </a>
                            <div class="px-5 pb-5">
                                <a href="#">
                                    <h5 class="mb-5 text-xl font-semibold tracking-tight text-gray-900 line-clamp-1 dark:text-white">
                                        {{ data_get($product,'title') }}
                                    </h5>
                                </a>

                                <div class="flex items-center justify-between">
                                    <span class="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
                                        ${{ number_format(data_get($product,'price'), 2) }}
                                    </span>
                                    <a href="#" data-modal-target="popup-modal" data-modal-toggle="popup-modal" class="text-white bg-violet-700 hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-violet-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-800">
                                        Add to cart
                                    </a>
                                </div>
                            </div>
                        </div>
                        @endforeach
                    </div>
                </x-carousel>
            </div>
        </div>
    </section>
</div>