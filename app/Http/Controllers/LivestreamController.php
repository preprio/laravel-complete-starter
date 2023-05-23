<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class LivestreamController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function index()
    {
        $responseStreamBySlug = Http::prepr([
            'query' => 'get-stream-by-slug',
            'variables' => [
                'slug' => 'fall-bake-a-thon',
            ],
        ]);

        $responseUpcomingLiveStreams = Http::prepr([
            'query' => 'get-upcoming-live-streams',
            'variables' => [
                'where' => [
                    'start_day_and_time_gt' => 'today',
                ],
            ],
        ]);

        $responseRecordedLiveStreams = Http::prepr([
            'query' => 'get-recorded-live-streams',
            'variables' => [
                'where' => [
                    'start_day_and_time_lt' => 'today',
                ],
            ],
        ]);

        return view('pages.livestream.index', [
            'live' => data_get($responseStreamBySlug->json(), 'data.LiveEvent'),
            'upcoming' => data_get($responseUpcomingLiveStreams->json(), 'data.LiveEvents.items'),
            'recorded' => data_get($responseRecordedLiveStreams->json(), 'data.LiveEvents.items'),
        ]);
    }

    public function show(string $type, string $slug)
    {
        $response = Http::prepr([
            'query' => 'get-stream-by-slug',
            'variables' => [
                'slug' => $slug,
            ],
        ]);

        if (data_get($response->json(), 'data.LiveEvent')) {
            if ($type === 'live') {
                return view('pages.livestream.live.show', [
                    'liveEvent' => data_get($response->json(), 'data.LiveEvent'),
                ]);
            } elseif ($type === 'upcoming') {
                return view('pages.livestream.upcoming.show', [
                    'liveEvent' => data_get($response->json(), 'data.LiveEvent'),
                ]);
            } elseif ($type === 'recorded') {
                return view('pages.livestream.recorded.show', [
                    'liveEvent' => data_get($response->json(), 'data.LiveEvent'),
                ]);
            }
        }
        abort(404);
    }
}
