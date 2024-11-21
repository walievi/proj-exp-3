<?php

use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\PatientController;
use App\Http\Controllers\People\PersonController;
use Illuminate\Support\Facades\Route;

Route::apiResource('people', PersonController::class);
Route::apiResource('patients', PatientController::class);
Route::apiResource('employees', EmployeeController::class);

