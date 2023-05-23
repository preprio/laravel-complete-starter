<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Http;

class PagePatternController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(string $slug)
    {
        $response = Http::prepr([
            'query' => 'get-page-by-slug',
            'variables' => [
                'slug' => $slug,
                'segment' => '',
            ],
        ]);

        if (data_get($response->json(), 'data.Page')) {
            return view('pages.page-pattern.show', [
                'page' => data_get($response->json(), 'data.Page'),
            ]);
        }
    }
}
