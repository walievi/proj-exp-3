<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PersonController;
use App\Http\Controllers\PatientController;
use App\Http\Controllers\EmployeeController;

Route::apiResource('people', PersonController::class);
Route::apiResource('patients', PatientController::class);
Route::apiResource('employees', EmployeeController::class);

