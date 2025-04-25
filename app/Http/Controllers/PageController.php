<?php

namespace app\Http\Controllers;

// Include Http to make the query request
use Illuminate\Support\Facades\Http;

//Include to get cookie from request
use Illuminate\Http\Request;


class PageController extends Controller
{
    public function index(Request $request, $slug='/')
    {
        $response = Http::prepr([
            'query' => 'get-page-by-slug',
            'variables' => [
                'slug' => $slug,
            ],
            'headers' => [
                'Prepr-Customer-Id' => $request->cookie('__prepr_uid')
            ]
        ]);

        $page = data_get($response->json(), 'data.Page');

        // Return the page view with query response
        if ($page) {
            return view('pages.index', [
                'page' => $page,
            ]);
        }
    }
}
