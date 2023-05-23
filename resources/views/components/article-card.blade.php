<a href="{{ url('blog/' . data_get($data,'_slug')) }}" class="flex flex-col items-center mb-6 transition-shadow bg-white border rounded-lg shadow-md hover:shadow-lg md:flex-row dark:border-gray-700 dark:bg-gray-800">
    @if(data_get($data,'cover.0.url'))
    <img class="object-coverw-full rounded-t-lg h-[158px] md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="{{ data_get($data,'cover.0.url') }}" alt=""/>
    @endif
    <div class="flex flex-col items-stretch justify-between p-5 leading-normal grow">
        <div class="flex justify-between mb-4">
            <x-badge
                    :label="data_get($data,'categories.0.title')"
                    :iconUrl="data_get($data,'categories.0.icon.0.url')"
                    classes="bg-violet-100 text-violet-800"
            />
            <span class="text-sm text-gray-400">{{ Carbon\Carbon::parse(data_get($data,'_publish_on'))->toFormattedDateString() }}</span>
        </div>
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {{ data_get($data,'title') }}
        </h5>
        <div class="mb-4 text-base font-normal text-gray-500 line-clamp-2">
            {!! data_get($data,'excerpt') !!}
        </div>
        <div class="flex flex-row items-center justify-between">
            @if(data_get($data,'authors'))
                @foreach(data_get($data,'authors') as $author)
                    <div class="flex items-center space-x-4">
                        <img class="object-cover w-6 h-6 rounded-full" src="{{ data_get($author,'profile_pic.0.url') }}" alt=""/>
                        <div class="text-base font-medium leading-tight dark:text-white">
                            <div>{{ data_get($data,'authors.0.full_name') }}</div>
                        </div>
                    </div>
                @endforeach
            @endif

            <button class="inline-flex items-center text-base font-medium leading-tight text-violet-600 dark:text-violet-500 hover:underline">
                Read more
                <svg
                        aria-hidden="true"
                        class="w-5 h-5 ml-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                            fill-rule="evenodd"
                            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                    ></path>
                </svg>
            </button>
        </div>
    </div>
</a>