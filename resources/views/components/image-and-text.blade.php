<div class="container mx-auto md:px-0">
    <section class="bg-white dark:bg-gray-900">
        <div class="items-center max-w-screen-xl gap-8 px-4 py-8 mx-auto xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
            <img class="{{ data_get($data,'image_position') === 'Right' ? 'order-last' : '' }} object-cover w-full rounded-lg shadow-xl  h-60 md:h-96 dark:hidden" src="{{ data_get($data,'image.0.url') }}" alt="dashboard image"/>
            <img class="hidden w-full dark:block" src="{{ data_get($data,'image.0.url') }}" alt="dashboard image"/>
            <div class="mt-8 md:mt-4 md:mt-0">
                <h2 class="mb-4 text-xl font-extrabold tracking-tight text-center text-gray-900  md:text-left md:text-4xl dark:text-white">
                    {{ data_get($data,'title') }}
                </h2>
                <p class="font-light text-center text-gray-500  md:mb-6 md:text-left md:text-lg dark:text-gray-400">
                    {{ data_get($data,'text') }}
                </p>
            </div>
        </div>
    </section>
</div>