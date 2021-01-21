<?php

use Illuminate\Support\Facades\Route;
use Spatie\Permission\Models\Permission;
use App\Http\Controllers\User\UserController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
require __DIR__.'/auth.php';


Route::get('{any}', function () {
    // dd(auth()->user()->email);

    // auth()->user()->givePermissionTo('see hidden menu');
    return view('homepage');
})
->where('any', '^(?!api).*$')
->middleware(['auth']);


Route::prefix('api')->group(function () {
    Route::get('/user', [UserController::class, 'getAuthUser']);
});



// Route::get('/dashboard', function () {
//     return view('dashboard');
// })->middleware(['auth'])->name('dashboard');




