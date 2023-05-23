<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Http;

class ABTestingController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke()
    {
        $response = Http::prepr([
            'query' => 'get-static-page-by-slug',
            'variables' => [
                'slug' => 'home-page-ab-testing',
            ],
            'headers' => [
                'Prepr-Customer-Id' => request()->get('customer_id', request()->session()->getId()),
            ],
        ]);

        return view('pages.a-b-testing.index', [
            'page' => data_get($response->json(), 'data.Page'),
        ]);
    }
}
