<?php

namespace App\View\Components;

use Closure;
use Illuminate\Contracts\View\View;
use Illuminate\Support\Facades\Http;
use Illuminate\View\Component;

class SidebarList extends Component
{
    public $categories;

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
            'query' => 'get-categories',
        ]);

        $this->categories = data_get($response->json(), 'data.Categories.items');

        return view('components.sidebar-list');
    }
}
