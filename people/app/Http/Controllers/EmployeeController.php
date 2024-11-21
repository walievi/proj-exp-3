<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use Illuminate\Http\Request;

class EmployeeController extends Controller
{
    public function index()
    {
        return response()->json(Employee::with('person')->get(), 200);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'person_id' => 'required|exists:people,id',
            'position' => 'required|string|max:255',
            'hiring_date' => 'required|date',
            'salary' => 'nullable|numeric|min:0',
        ]);

        $employee = Employee::create($validated);

        return response()->json($employee, 201);
    }

    public function show($id)
    {
        $employee = Employee::with('person')->findOrFail($id);
        return response()->json($employee, 200);
    }

    public function update(Request $request, $id)
    {
        $employee = Employee::findOrFail($id);

        $validated = $request->validate([
            'person_id' => 'sometimes|exists:people,id',
            'position' => 'sometimes|string|max:255',
            'hiring_date' => 'sometimes|date',
            'salary' => 'nullable|numeric|min:0',
        ]);

        $employee->update($validated);

        return response()->json($employee, 200);
    }

    public function destroy($id)
    {
        $employee = Employee::findOrFail($id);
        $employee->delete();

        return response()->json(null, 204);
    }
}
