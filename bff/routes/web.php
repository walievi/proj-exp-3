<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

use Illuminate\Support\Facades\Redis;
use Illuminate\Http\Request;

Route::get('/contador', function (Request $request) {
    $contador = Redis::incr('contador');
    return response()->json(['contador' => $contador]);
});
