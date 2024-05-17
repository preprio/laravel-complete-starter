<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class PageController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request, string $slug)
    {
        // Uncomment to add utm_campaign to the request
        //   $segment = $request->get('utm_campaign');
        //
        //   if (empty($segment)) {
        //     $segment = 'None';
        //   }

        $response = Http::prepr([
            'query' => 'get-page-by-slug',
            'variables' => [
                'slug' => $slug,
                'segment' => '',
                //                'segment' => $segment,
            ],
        ]);

        if (data_get($response->json(), 'data.Page')) {
            return view('pages.page.show', [
                'page' => data_get($response->json(), 'data.Page'),
            ]);
        }
    }
}
