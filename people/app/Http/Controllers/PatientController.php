<?php

namespace App\Http\Controllers;

use App\Models\Patient;
use Illuminate\Http\Request;

class PatientController extends Controller
{
    public function index()
    {
        return response()->json(Patient::with(['person', 'responsible'])->get(), 200);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'person_id' => 'required|exists:people,id',
            'responsible_id' => 'nullable|exists:people,id',
            'medical_record_number' => 'required|string|unique:patients',
            'notes' => 'nullable|string',
        ]);

        $patient = Patient::create($validated);

        return response()->json($patient, 201);
    }

    public function show($id)
    {
        $patient = Patient::with(['person', 'responsible'])->findOrFail($id);
        return response()->json($patient, 200);
    }

    public function update(Request $request, $id)
    {
        $patient = Patient::findOrFail($id);

        $validated = $request->validate([
            'person_id' => 'sometimes|exists:people,id',
            'responsible_id' => 'nullable|exists:people,id',
            'medical_record_number' => 'sometimes|string|unique:patients,medical_record_number,' . $id,
            'notes' => 'nullable|string',
        ]);

        $patient->update($validated);

        return response()->json($patient, 200);
    }

    public function destroy($id)
    {
        $patient = Patient::findOrFail($id);
        $patient->delete();

        return response()->json(null, 204);
    }
}
