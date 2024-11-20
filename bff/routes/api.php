<?php

use App\Http\Middleware\KeycloakAuthMiddleware;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Redis;
use Illuminate\Http\Request;
use App\Http\Controllers\PersonController;

Route::middleware(KeycloakAuthMiddleware::class)->group(function () {
    Route::apiResource('people', PersonController::class);
});
