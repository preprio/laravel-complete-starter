<div class="p-5 mb-6 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700">
    <h4 class="mb-8 text-sm font-bold text-gray-900 uppercase dark:text-white">
        Author
    </h4>
    @if($data)
        @foreach($data as $author)
            <div class="flex items-center space-x-2">
                <div class="text-base font-medium leading-tight dark:text-white">
                    <div class="flex flex-row items-center mb-2">
                        @if(data_get($author,'profile_pic.0.url'))
                        <img class="object-cover w-6 h-6 mr-2 rounded-full" src="{{ data_get($author,'profile_pic.0.url') }}" alt=""/>
                        @endif
                        <div>{{ data_get($author,'full_name') }}</div>
                    </div>

                    <div class="mb-4 text-sm font-normal text-gray-500 dark:text-gray-400 line-clamp-2">
                        {{ data_get($author,'bio') }}
                    </div>
                    <button data-modal-target="popup-modal" data-modal-toggle="popup-modal" type="submit" class="text-white bg-violet-700 hover:bg-violet-800 focus:ring-4 focus:ring-violet-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-violet-600 dark:hover:bg-violet-700 focus:outline-none dark:focus:ring-violet-800 text-center w-full">
                        Follow
                    </button>
                </div>
            </div>
        @endforeach
    @endif
</div>