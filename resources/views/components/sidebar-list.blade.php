<aside class="w-full" aria-label="Sidebar">
    <div class="p-4 overflow-y-auto bg-white border border-gray-200 rounded rounded-lg dark:bg-gray-800 dark:border-gray-700">
        <ul>
            <li>
                <a href="{{ url('blog') }}" class="flex items-center p-2 text-base font-medium text-gray-500 rounded-lg dark:text-white hover:bg-gray-100 {{ request()->get('category') ?: 'text-violet-700' }}">
                    <img src="/assets/oven.svg" class="flex-shrink-0 w-3.5 h-3.5"/>
                    <span class="ml-3">All categories</span>
                </a>
            </li>
            @if($categories)
                @foreach($categories as $category)
                <li>
                    <a href="{{ url('blog?category=' . data_get($category,'_slug')) }}" class="flex items-center p-2 text-base font-medium text-gray-500 rounded-lg dark:text-white hover:bg-gray-100 {{ (request()->get('category') === data_get($category,'_slug')) ? 'text-violet-700' : '' }}">
                        @if(data_get($category,'icon.0.url'))
                        <img class="flex-shrink-0 w-3.5 h-3.5" src="{{ data_get($category,'icon.0.url') }}" />
                        @endif
                        <span class="flex-1 ml-3 whitespace-nowrap">
                            {{ data_get($category,'title') }}
                        </span>
                    </a>
                </li>
                @endforeach
            @endif
        </ul>
    </div>
</aside>