<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <title>Prepr Patterns</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    @vite('resources/css/app.css')
    @vite('resources/js/app.js')
</head>
<body>
<div class="min-h-screen pt-24 antialiased md:pt-0">

    <x-nav/>

    {{ $slot }}

    <x-footer/>
    <x-default-popup/>

</div>
</body>
</html>