<div class="grid mx-4 lg:mx-0" v-if="store.showEducationalBanners">
    <div class="rounded-xl bg-gray-50">
        <div class="px-8 py-7">
            <h2 class="inline text-xl font-semibold leading-tight text-gray-900 sm:block">
                {{ $title }}
            </h2>
            <p class="my-4 text-base">
                See our A/B testing engine in action by selecting a version below.
            </p>

            <div class="inline-flex w-full rounded-md shadow-sm md:w-auto" role="group">


                <a href="{{ url('a-b-testing') }}" type="button" class="{{ !request()->get('customer_id') ? 'bg-gray-700 text-white focus:text-white' : 'bg-white text-gray-700 focus:text-gray-700' }} w-1/2 p-4 px-6 text-sm font-medium border border-gray-200 rounded-l-lg md:w-48 focus:z-10 focus:ring-2 focus:ring-gray-700 focus:text-gray-700">
                    You
                </a>

                <a href="{{ url('a-b-testing?customer_id=visitor-id-ef3125af') }}" type="button" class="{{ request()->get('customer_id') === 'visitor-id-ef3125af' ? 'bg-gray-700 text-white focus:text-white' : 'bg-white text-gray-700 focus:text-gray-700' }} w-1/2 p-4 px-6 text-sm font-medium border border-gray-200 md:w-48 focus:z-10 focus:ring-2 focus:ring-gray-700 focus:text-gray-700">
                    Customer A
                </a>

                <a href="{{ url('a-b-testing?customer_id=visitor-id-5feb47f4') }}" type="button" class="{{ request()->get('customer_id') === 'visitor-id-5feb47f4' ? 'bg-gray-700 text-white focus:text-white' : 'bg-white text-gray-700 focus:text-gray-700' }} w-1/2 p-4 px-6 text-sm font-medium border border-gray-200 md:w-48 rounded-r-md focus:z-10 focus:ring-2 focus:ring-gray-700 ">
                    Customer B
                </a>
            </div>
        </div>
    </div>
</div>