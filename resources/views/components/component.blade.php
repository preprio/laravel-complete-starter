@if($stack)
    @foreach($stack as $stack)

        @if(data_get($stack,'__typename') === 'PageHeader')
            <x-page-header :data="$stack"/>
        @elseif(data_get($stack,'__typename') === 'ImageAndText')
            <x-image-and-text :data="$stack"/>
        @elseif(data_get($stack,'__typename') === 'ArticleCollection')
            <x-article-collection :data="$stack"/>
        @elseif(data_get($stack,'__typename') === 'ProductCollection')
            <x-product-collection :data="$stack"/>
        @elseif(data_get($stack,'__typename') === 'CallToAction')
            <x-call-to-action :data="$stack"/>
        @endif

    @endforeach
@endif