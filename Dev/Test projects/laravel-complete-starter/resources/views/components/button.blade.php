@props([
    'buttonStyle' => 'primary',
    'className' => '',
])

@php
    $baseClasses = 'flex rounded-full text-sm px-6 py-2.5 font-medium';

    $styleClasses = match($buttonStyle) {
        'primary' => 'bg-primary-600 hover:bg-primary-700 text-white',
        'secondary' => 'bg-white hover:bg-gray-50 text-secondary-700',
        default => '',
    };

    $classes = trim("{$baseClasses} {$styleClasses} {$className}");
@endphp

<button {{ $attributes->merge(['class' => $classes]) }}>
    {{ $slot }}
</button>
