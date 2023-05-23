<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class PersonalizationController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke()
    {
        $response = Http::prepr([
            'query' => 'get-page-by-slug',
            'variables' => [
                'slug' => 'home-page-personalization',
                'segment' => request()->get('segment', ''),
            ],
        ]);

        return view('pages.personalization.index', [
            'page' => data_get($response->json(), 'data.Page'),
        ]);
    }
}
