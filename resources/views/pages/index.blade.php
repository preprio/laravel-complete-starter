<head>
    <!-- import app.css -->
    @vite('resources/css/app.css')

    <!-- Your Prepr Tracking Code -->
  
    <meta property='prepr:id' content="{{ data_get($page,'_id') }}"/>
    <x-navbar/>

</head>
<body>
<!-- Loop through elements in the content stack field and assign the matching components-->
<div>
    @if(data_get($page,'content'))
      @foreach(data_get($page,'content') as $element)
        @if(data_get($element,'__typename') === 'Hero')
          <x-hero-section :data="$element"/>
        @elseif(data_get($element,'__typename') === 'Feature')
          <x-feature-section :data="$element"/>
        @endif
      @endforeach
    @endif
  </div>
</body>
