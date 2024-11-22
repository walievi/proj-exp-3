<?php

use App\Http\Controllers\People\PersonController;
use \App\Http\Controllers\Stocks\CategoryController;
use App\Http\Controllers\Stocks\EquipamentController;
use App\Http\Controllers\Stocks\PatrimonyController;
use Illuminate\Support\Facades\Route;


Route::prefix('dev')->group(function () {
    Route::apiResource('equipaments', EquipamentController::class);
    Route::apiResource('patrimonies', PatrimonyController::class);
    Route::apiResource('categories', CategoryController::class);
    Route::apiResource('people', PersonController::class);
});
