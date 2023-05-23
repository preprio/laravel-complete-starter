<x-layout>
    <div class="container mx-auto md:px-0">
        <x-banner
                title="Live stream pattern"
                copy="A common UX pattern for live stream events that leverages the live stream features in Prepr. This pattern shows not only live events, but also upcoming and recorded live streams. Learn more about <a href='https://docs.prepr.io/managing-content/live-video-stream'>live streaming in Prepr</a> on our Documentation site."
                url1="https://docs.prepr.io/create-schema/live-stream-pattern/"
        />
        <x-hero
                title="Live Events"
                description="Through our live events, join our baking community and skill up on basic and advanced skills. Turn your baked goodies into unforgettable treats for your family, friends or customers."
        />
        <div class="grid gap-4 mb-12">
            <h3 class="text-xl font-bold md:text-2xl">Live</h3>
            <div class="grid gap-6">
                <x-livestream-card type="live" :event="$live" />
            </div>
        </div>

        <div class="grid gap-4 mb-12">
            <h3 class="text-xl font-bold md:text-2xl">Upcoming</h3>
            <div class="grid gap-6">
                @if($upcoming)
                    @foreach($upcoming as $stream)
                        <div class="col-span-12">
                            <x-livestream-card type="upcoming" :event="$stream" />
                        </div>
                    @endforeach
                @endif
            </div>
        </div>

        <div class="grid gap-4">
            <h3 class="text-xl font-bold md:text-2xl">Recorded</h3>
            <div class="grid gap-6">
                @if($recorded)
                    @foreach($recorded as $stream)
                        <div class="col-span-12">
                            <x-livestream-card type="recorded" :event="$stream" />
                        </div>
                    @endforeach
                @endif
            </div>
        </div>
    </div>
</x-layout>