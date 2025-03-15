<?php

use App\Http\Controllers\ThemeController;
use App\Http\Controllers\Admin\AdminController;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\View;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------

| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

// Theme Routes
Route::controller(ThemeController::class)->group(function () {
    Route::get('/index', 'index');
    Route::get('/about', 'about');
    Route::get('/contact', 'contact');
    Route::get('/services', 'services');
});


Route::controller(AdminController::class)->group(function () {
    Route::get('/admin', 'user');
    Route::get('/admin/services', 'services');
    Route::get('/admin/apartments', 'apartments');

});

