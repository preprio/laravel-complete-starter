<div class="max-w-screen-xl mx-4 lg:mx-0" v-if="store.showEducationalBanners">
    <div class="rounded-xl bg-violet-50">
        <div class="px-8 py-7">
            <h2 class="inline text-2xl font-bold tracking-tight text-gray-900 sm:block">
                {{ $title }}
            </h2>
            <div class="my-4 article">{!! $copy !!}</div>
            <a href="{{ $url1 }}" target="_blank" class="text-white bg-violet-600 hover:bg-violet-700 focus:ring-4 border mb-4 md:mb-0 border-violet-600 hover:border-violet-700 focus:outline-none focus:ring-violet-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 text-center inline-flex items-center mr-2 dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-800 font-medium">
                <svg class="w-5 h-5 mr-2 -ml-1" fill="currentColor">
                    <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M2 5.5C2 4.96957 2.21071 4.46086 2.58579 4.08579C2.96086 3.71071 3.46957 3.5 4 3.5H12C12.5304 3.5 13.0391 3.71071 13.4142 4.08579C13.7893 4.46086 14 4.96957 14 5.5V15.5C14 16.0304 14.2107 16.5391 14.5858 16.9142C14.9609 17.2893 15.4696 17.5 16 17.5H4C3.46957 17.5 2.96086 17.2893 2.58579 16.9142C2.21071 16.5391 2 16.0304 2 15.5V5.5ZM5 6.5H11V10.5H5V6.5ZM11 12.5H5V14.5H11V12.5Z"
                            fill="white"
                    />
                    <path
                            d="M15 7.5H16C16.5304 7.5 17.0391 7.71071 17.4142 8.08579C17.7893 8.46086 18 8.96957 18 9.5V15C18 15.3978 17.842 15.7794 17.5607 16.0607C17.2794 16.342 16.8978 16.5 16.5 16.5C16.1022 16.5 15.7206 16.342 15.4393 16.0607C15.158 15.7794 15 15.3978 15 15V7.5Z"
                            fill="white"
                    />
                </svg>

                Learn about this pattern
            </a>
        </div>
    </div>
</div>