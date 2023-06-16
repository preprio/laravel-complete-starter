@if($stack)
    @foreach($stack as $element)

        @if(data_get($element,'__typename') === 'PageHeader')
            <x-page-header :data="$element"/>
        @elseif(data_get($element,'__typename') === 'ImageAndText')
            <x-image-and-text :data="$element"/>
        @elseif(data_get($element,'__typename') === 'ArticleCollection')
            <x-article-collection :data="$element"/>
        @elseif(data_get($element,'__typename') === 'ProductCollection')
            <x-product-collection :data="$element"/>
        @elseif(data_get($element,'__typename') === 'CallToAction')
            <x-call-to-action :data="$element"/>
        @endif

    @endforeach
@endif
