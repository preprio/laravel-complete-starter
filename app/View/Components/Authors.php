<?php

namespace App\View\Components;

use Closure;
use Illuminate\Contracts\View\View;
use Illuminate\Support\Facades\Http;
use Illuminate\View\Component;

class Authors extends Component
{
    public $authors;

    /**
     * Create a new component instance.
     */
    public function __construct()
    {
    }

    /**
     * Get the view / contents that represent the component.
     */
    public function render(): View|Closure|string
    {
        $response = Http::prepr([
            'query' => 'get-persons',
        ]);

        $this->authors = data_get($response->json(), 'data.Persons.items');

        return view('components.authors');
    }
}
