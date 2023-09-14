<?php

use App\Http\Controllers\ABTestingController;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\LivestreamController;
use App\Http\Controllers\NavigationController;
use App\Http\Controllers\PageController;
use App\Http\Controllers\PersonalizationController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('index');
});

Route::get('/navigation', NavigationController::class);

Route::get('/page/{slug}', PageController::class);

Route::get('/blog', [BlogController::class, 'index']);
Route::get('/blog/{slug}', [BlogController::class, 'show']);

Route::get('/livestream', [LivestreamController::class, 'index']);
Route::get('/livestream/{type}/{slug}', [LivestreamController::class, 'show']);

Route::get('/personalization', PersonalizationController::class);

Route::get('/a-b-testing', ABTestingController::class);
