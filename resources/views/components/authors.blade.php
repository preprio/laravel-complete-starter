@if($authors)
<div class="p-5 rounded-lg bg-gray-50">
    @foreach($authors as $author)
    <div class="flex items-center mb-6 space-x-2">
        <div class="text-base font-medium leading-tight dark:text-white">
            <div class="flex flex-row">
                <img class="object-cover w-6 h-6 mr-2 rounded-full" src="{{ data_get($author,'profile_pic.0.url') }}" alt=""/>
                <div>{{ data_get($author,'full_name') }}</div>
            </div>

            <div class="ml-8 text-sm font-normal text-gray-500 dark:text-gray-400 line-clamp-2">
                {{ data_get($author,'bio') }}
            </div>
        </div>
        <div>
            <button data-modal-target="popup-modal" data-modal-toggle="popup-modal" class="px-3 py-2 text-xs font-medium text-gray-800 border border-gray-100 rounded-lg bg-gray-50 hover:bg-gray-200">
                Follow
            </button>
        </div>
    </div>
    @endforeach
</div>
@endif