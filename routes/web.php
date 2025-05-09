<?php
use Illuminate\Support\Facades\Route;

// Include the PageController class
use App\Http\Controllers\PageController;

// Add a route to the PageController function
Route::get('/{param?}', [PageController::class, 'index']);
