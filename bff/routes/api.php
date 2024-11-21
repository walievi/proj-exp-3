<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\People\PersonController;
use \App\Http\Controllers\Stocks\CategoryController;
use App\Http\Controllers\Stocks\EquipamentController;
use App\Http\Middleware\KeycloakAuthMiddleware;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redis;
use Illuminate\Support\Facades\Route;


Route::post('auth', [AuthController::class, 'getToken']);

Route::apiResource('equipaments', EquipamentController::class);

Route::middleware(KeycloakAuthMiddleware::class)->group(function () {
    Route::apiResource('categories', CategoryController::class);
    Route::apiResource('people', PersonController::class);
});
