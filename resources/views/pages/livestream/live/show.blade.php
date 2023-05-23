<x-layout>
    <div class="container mx-auto md:px-0">
        <x-banner
                title="Live stream pattern"
                copy="A common UX pattern for live stream events that leverages the live stream features in Prepr. This pattern shows not only live events, but also upcoming and recorded live streams. Learn more about <a href='https://docs.prepr.io/managing-content/live-video-stream'>live streaming in Prepr</a> on our Documentation site."
                url1="https://docs.prepr.io/create-schema/live-stream-pattern/"
        />
        <x-hero :title="data_get($liveEvent,'title')" :description="data_get($liveEvent,'heading')">
            <x-badges.live-badge size="lg" />
        </x-hero>
        <div class="grid gap-8 overflow-hidden rounded-lg">
            <mux-player
                    ref="video"
                    class="flex w-full rounded-lg"
                    playback-id="{{ data_get($liveEvent,'live_stream.0.playback_id') }}"
                    metadata-video-id="{{ data_get($liveEvent,'live_stream.0.playback_id') }}"
                    loop
                    stream-type="live"
                    controls
                    autoplay
            ></mux-player>
        </div>
        <div class="grid grid-cols-2 gap-1 md:gap-8">
            <x-speakers :speakers="data_get($liveEvent,'speakers')" />
        </div>
    </div>
</x-layout>