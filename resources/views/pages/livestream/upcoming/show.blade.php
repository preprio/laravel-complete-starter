<x-layout>
    <div class="container mx-auto md:px-0">
        <x-banner
                title="Live stream pattern"
                copy="A common UX pattern for live stream events that leverages the live stream features in Prepr. This pattern shows not only live events, but also upcoming and recorded live streams. Learn more about <a href='https://docs.prepr.io/managing-content/live-video-stream'>live streaming in Prepr</a> on our Documentation site."
                url1="https://docs.prepr.io/create-schema/live-stream-pattern/"
        />
        <x-hero :title="data_get($liveEvent,'title')" :description="data_get($liveEvent,'heading')">
            <button data-modal-target="popup-modal" data-modal-toggle="popup-modal" class="text-white bg-violet-700 hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-violet-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-800">
                Notify me
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
            </button>
        </x-hero>

        <x-count-down :startdate="data_get($liveEvent,'start_day_and_time')" />

        <div id="notify" class="flex items-center justify-between mt-16 mb-8 space-x-40 md:mt-28">
            <div class="w-full md:basis-2/4">
                <h3 class="mb-4 text-xl font-semibold tracking-tight text-center text-gray-900 md:text-left dark:text-white">
                    {{ data_get($liveEvent,'heading') }}
                </h3>
                <p class="mb-6 text-base leading-relaxed text-center text-gray-500 md:text-left dark:text-gray-400">
                    {{ data_get($liveEvent,'live_stream_intro') }}
                </p>
                <form action="#">
                    <div class="flex items-center max-w-screen-md mx-auto">
                        <div class="relative w-5/6 mr-3 md:w-4/6">
                            <label for="email" class="hidden mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">
                                Email address
                            </label>
                            <input
                                    class="block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-violet-500 focus:border-violet-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-violet-500 dark:focus:border-violet-500"
                                    placeholder="Your email address"
                                    type="email"
                                    id="email"
                                    required=""
                            />
                        </div>
                        <div class="w-1/6 md:w-auto">
                            <button type="button" data-modal-target="popup-modal" data-modal-toggle="popup-modal" class="inline-flex w-full px-5 py-3 text-sm font-medium text-center text-white rounded-lg cursor-pointer bg-violet-700 hover:bg-violet-800 focus:ring-4 focus:ring-violet-300 dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-800">
                                <span class="hidden md:inline">
                                    Notify me
                                </span>
                                <svg
                                        aria-hidden="true"
                                        class="w-5 h-5 -mr-1 md:ml-2"
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
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <div class="hidden md:flex basis-2/4">
                <img class="object-cover w-full rounded-lg h-96" src="{{ data_get($liveEvent,'cover.0.url') }}" alt="Live Stream"/>
            </div>
        </div>

        <div class="grid grid-cols-2 gap-8">
            <x-speakers :speakers="data_get($liveEvent,'speakers')" />
        </div>
    </div>
</x-layout>