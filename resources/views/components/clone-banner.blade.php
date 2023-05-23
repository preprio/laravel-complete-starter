@if(isset($showBanner))
<div class="mb-4 mx-auto pt-20 md:pt-0">
    <div class="mx-0">
        <div class="bg-gray-100">
            <div class="items-center pt-6 pb-1 px-7 md:grid md:grid-cols-8">
                <div class="col-span-4 lg:col-span-5">
                    <h2 class="inline text-xl font-bold tracking-tight text-gray-900 sm:block">
                        Showing content from your Prepr environment
                    </h2>
                    <div class="my-2 article">
                        <div class="mb-">
                            Clone and edit this Laravel repository to include your own models and fields.
                        </div>
                        <div class="mb-3 font-medium">
                            Disconnect using the button below. The site will be reconnected to the default Patterns site content.
                        </div>
                        <button
                                @click.prevent="resetToken"
                                class="text-violet-600 focus:ring-4 mb-2 focus:outline-none focus:ring-violet-300 font-medium rounded-lg text-sm px5 py-2.5 mr-2 text-center inline-flex items-center mr-2 dark:bg-violet-600 font-medium"
                        >
                            <svg
                                    fill="currentColor"
                                    class="w-4 h-5 mr-2 -ml-1"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                            >
                                <path
                                        clip-rule="evenodd"
                                        fill-rule="evenodd"
                                        d="M15.312 11.424a5.5 5.5 0 01-9.201 2.466l-.312-.311h2.433a.75.75 0 000-1.5H3.989a.75.75 0 00-.75.75v4.242a.75.75 0 001.5 0v-2.43l.31.31a7 7 0 0011.712-3.138.75.75 0 00-1.449-.39zm1.23-3.723a.75.75 0 00.219-.53V2.929a.75.75 0 00-1.5 0V5.36l-.31-.31A7 7 0 003.239 8.188a.75.75 0 101.448.389A5.5 5.5 0 0113.89 6.11l.311.31h-2.432a.75.75 0 000 1.5h4.243a.75.75 0 00.53-.219z"
                                ></path>
                            </svg>
                            Disconnect your Prepr environment
                        </button>
                    </div>
                </div>
                <div class="col-span-4 lg:col-span-3 md:text-right">
                    <div>
                        <a
                                href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fpreprio%2Fnuxt-starter&env=PREPR_ACCESS_TOKEN&envDescription=Your%20Prepr%20Access%20token.%20Found%20in%20Settings%20%3E%20Access%20Tokens.&envLink=https%3A%2F%2Fdocs.prepr.io%2Freference%2Fgraphql%2Fv1%2Fauthorization&project-name=prepr-patterns&repository-name=nuxt-starter&demo-title=Prepr%20Nuxt%20Starter&demo-description=Clone%20the%20Nuxt%20project%20to%20start%20working%20on%20your%20front-end.&demo-url=https%3A%2F%2Fpatterns.prepr.io%2Fpage-pattern&demo-image=https%3A%2F%2Fassets-site.prepr.io%2F%2F19pw7mgmcc89-patterns-preview.png"
                                target="_blank"
                                class="text-white bg-violet-600 hover:bg-violet-700 focus:ring-4 border mb-4 md:mb-0 focus:outline-none focus:ring-violet-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 text-center inline-flex items-center mr-2 dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-800 font-medium"
                        >
                            <svg
                                    viewBox="0 0 512 512"
                                    fill="white"
                                    class="w-4 h-5 mr-2 -ml-1"
                            >
                                <path
                                        d="M288 448H64V224h64V160H64c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H288c35.3 0 64-28.7 64-64V384H288v64zm-64-96H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H224c-35.3 0-64 28.7-64 64V288c0 35.3 28.7 64 64 64z"
                                />
                            </svg>
                            Deploy to Vercel
                        </a>
                        <a
                                href="https://github.com/preprio/nuxt-starter"
                                target="_blank"
                                class="text-white bg-gray-900 hover:bg-gray-700 focus:ring-4 border mb-4 md:mb-0 focus:outline-none focus:ring-violet-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 text-center inline-flex items-center mr-2 dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-800 font-medium"
                        >
                            <svg
                                    fill="white"
                                    class="w-4 h-5 mr-2 -ml-1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 496 512"
                            >
                                <path
                                        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                                />
                            </svg>
                            View on Github
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endif