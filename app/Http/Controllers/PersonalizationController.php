<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class PersonalizationController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $segment = $request->get('segment');

        if (empty($segment)) {
            $segment = 'None';
        }

        $response = Http::prepr([
            'query' => 'get-page-by-slug',
            'variables' => [
                'slug' => 'home-page-personalization',
                'segment' => $segment,
            ],
        ]);

        return view('pages.personalization.index', [
            'page' => data_get($response->json(), 'data.Page'),
        ]);
    }
}
