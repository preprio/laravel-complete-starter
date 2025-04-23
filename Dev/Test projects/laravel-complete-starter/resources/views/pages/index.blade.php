<head>
    <!-- import app.css -->
    @vite('resources/css/app.css')

    <!-- Prepr Tracking Code -->
    <script>
        ! function (e, t, p, r, n, a, s) {
        e[r] || ((n = e[r] = function () {
        n.process ? n.process.apply(n, arguments) : n.queue.push(arguments)
        }).queue = [], n.t = +new Date, (a = t.createElement(p)).async = 1, a.src = "https://cdn.tracking.prepr.io/js/prepr_v2.min.js?t=" + 864e5 * Math.ceil(new Date / 864e5), (s = t.getElementsByTagName(p)[0]).parentNode.insertBefore(a, s))
        }(window, document, "script", "prepr"), prepr("init", "ac_02b4a145e69be5488eb0e3abeada8ae5a2f88b0af09b33d442533b59e3bf4cd8"), prepr("event", "pageload");
    </script>
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