<div class="col-span-2 px-0 py-3 mx-auto text-center mt-14 md:px-4 md:py-8 lg:px-12">
    <h3 class="mb-4 text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white">
        Speakers
    </h3>
    <p class="text-base font-normal text-gray-500 md:text-xl lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
        Speaker descripton
    </p>
</div>
@if($speakers)
    @foreach($speakers as $speaker)
        <x-speaker-card :speaker="$speaker"/>
    @endforeach

    <div class="block col-span-2 lg:hidden">
        <x-carousel :items="$speakers">
            <div class="rounded-lg h-[364px]">
                @foreach($speakers as $index => $speaker)
                    <div data-carousel-item="{{ $index == 0 }}" class="absolute p-4 duration-700 bg-white h-[364px]">
                        <div class="p-4 border border-gray-200 rounded-lg">
                            @if(data_get($speaker,'profile_pic.0.url'))
                            <img class="object-cover w-full h-48 mb-6 rounded-lg" src="{{ data_get($speaker,'profile_pic.0.url') }}" alt=""/>
                            @endif
                            <div>
                                <h5 class="mb-3 text-lg font-bold leading-tight text-gray-900">
                                    {{ data_get($speaker,'full_name') }}
                                </h5>
                                <p class="text-sm font-normal text-gray-500">
                                    {{ data_get($speaker,'bio') }}
                                </p>
                            </div>
                        </div>
                    </div>
                @endforeach
            </div>
        </x-carousel>
    </div>
@endif