<?php

namespace app\Providers;

use Illuminate\Support\ServiceProvider;
use App\Http\Middleware\EncryptCookies;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
    }
}
