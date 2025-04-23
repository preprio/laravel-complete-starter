<section class="bg-primary-50">
    <div class="mx-auto max-w-8xl p-spacing py-10 lg:py-10 xl:py-20">
        <div class="flex flex-col items-start md:items-center md:flex-row gap-8 xl:gap-28 text-secondary-700">
            <div class="{{data_get($data, 'image_position') === 'LEFT' ? 'order-first' : 'order-last';}} basis-1/2">
                <img class="rounded-2xl w-full aspect-[29/19] object-cover"  src="{{ data_get($data,'image.url') }}" alt="Feature image" width="800" height="300"/>
            </div>
            <div class="basis-1/2">
                <h2 class="text-mb-4xl lg:text-5xl font-medium text-secondary-700 text-balance">
                    {{ data_get($data,'heading') }}
                </h2>
                <p class="text-lg mt-4 xl:mt-6 font-medium text-wrap text-balance">
                    {{ data_get($data,'sub_heading') }}
                </p>
                <a href="#">
                    <x-button>
                        {{ data_get($data,'button.text') }}
                    </x-button>
                </a>
            </div>
        </div>
    </div>
</section>