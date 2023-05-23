<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class NavigationController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke()
    {
        $response = Http::prepr([
            'query' => 'get-navigation',
        ]);

        return view('pages.navigation.index', [
            'navigation' => data_get($response->json(), 'data.Navigation'),
        ]);
    }
}
