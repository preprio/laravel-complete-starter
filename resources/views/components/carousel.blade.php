<div id="indicators-carousel" class="relative overflow-hidden" data-carousel="static">
    {{ $slot }}
    <div class="relative z-50 flex items-center justify-between w-2/4 mx-auto mt-6">
        <button type="button" data-carousel-prev class="flex items-center justify-center w-5 h-5 bg-gray-400 rounded-full">
            <svg
                    width="6"
                    height="8"
                    viewBox="0 0 6 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
            >
                <path
                        d="M4.31266 6.91634L1.396 3.99967L4.31266 1.08301"
                        stroke="white"
                        stroke-width="1.4375"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                />
            </svg>
        </button>
        <div class="flex mx-auto space-x-3">
            @if($items)
                @foreach($items as $index => $item)
                    <button type="button" class="w-2 h-2 bg-gray-300 rounded-full aria-[current=true]:bg-gray-900"
                            aria-current="{{ $index === 0 }}"
                            aria-label="Slide {{ $index + 1 }}"
                            data-carousel-slide-to="index"
                    ></button>
                @endforeach
            @endif
        </div>
        <button type="button" data-carousel-next class="flex items-center justify-center w-5 h-5 bg-gray-400 rounded-full">
            <svg
                    width="6"
                    height="8"
                    class="rotate-180"
                    viewBox="0 0 6 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
            >
                <path
                        d="M4.31266 6.91634L1.396 3.99967L4.31266 1.08301"
                        stroke="white"
                        stroke-width="1.4375"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                />
            </svg>
        </button>
    </div>
</div>