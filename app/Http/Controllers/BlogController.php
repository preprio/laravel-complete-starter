<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class BlogController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function index(Request $request)
    {
        $variables = [];

        if ($request->get('category')) {
            $variables = [
                'where' => [
                    'categories' => [
                        '_slug_any' => $request->get('category'),
                    ],
                ],
            ];
        }

        $response = Http::prepr([
            'query' => 'get-articles',
            'variables' => $variables,
        ]);

        return view('pages.blog.index', [
            'articles' => data_get($response->json(), 'data.Articles'),
        ]);
    }

    public function show(string $slug)
    {
        $response = Http::prepr([
            'query' => 'get-article-by-slug',
            'variables' => [
                'slug' => $slug,
            ],
        ]);

        if (data_get($response->json(), 'data.Article')) {
            return view('pages.blog.show', [
                'article' => data_get($response->json(), 'data.Article'),
            ]);
        }
        abort(404);
    }
}
