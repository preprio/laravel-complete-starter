@php
    $navItems = [
        ['text' => 'Find a car', 'href' => '#'],
        ['text' => 'About Acme', 'href' => '/about-acme'],
        ['text' => 'Blog', 'href' => '#'],
        ['text' => 'Contacts', 'href' => '#'],
    ];
@endphp

<header class="bg-primary-100 py-4">
    <nav aria-label="Global">
        <div class="mx-auto max-w-8xl p-spacing flex items-center justify-between">
            <a href="/">
                {{-- Mobile logo --}}
                <span class="flex md:hidden">
                    <x-logo :text="false" />
                </span>
                {{-- Desktop logo --}}
                <span class="hidden md:flex">
                    <x-logo />
                </span>
            </a>

            <ul class="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
                @foreach ($navItems as $item)
                    <li>
                        <a href="{{ $item['href'] }}" class="text-base font-medium text-gray-700 hover:text-gray-900">
                            {{ $item['text'] }}
                        </a>
                    </li>
                @endforeach
            </ul>
        </div>
    </nav>
</header>
