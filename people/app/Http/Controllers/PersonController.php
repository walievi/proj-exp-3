<?php

namespace App\Http\Controllers;

use App\Models\Person;
use Illuminate\Http\Request;

class PersonController extends Controller
{
    public function index()
    {
        return response()->json(Person::all(), 200);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'cpf' => 'required|string|size:11|unique:people',
            'rg' => 'nullable|string|max:20',
            'birth_date' => 'required|date',
            'email' => 'required|email|unique:people',
            'phone' => 'nullable|string|max:15',
            'is_disabled' => 'boolean',
            'card_sus' => 'nullable|string|max:255',
            'education_level' => 'nullable|string|max:255',
        ]);

        $person = Person::create($validated);

        return response()->json($person, 201);
    }

    public function show($id)
    {
        $person = Person::findOrFail($id);
        return response()->json($person, 200);
    }

    public function update(Request $request, $id)
    {
        $person = Person::findOrFail($id);

        $validated = $request->validate([
            'name' => 'sometimes|string|max:255',
            'cpf' => 'sometimes|string|size:14|unique:people,cpf,' . $id,
            'rg' => 'nullable|string|max:20',
            'birth_date' => 'sometimes|date',
            'email' => 'sometimes|email|unique:people,email,' . $id,
            'phone' => 'nullable|string|max:15',
            'is_disabled' => 'boolean',
            'card_sus' => 'nullable|string|max:255',
            'education_level' => 'nullable|string|max:255',
        ]);

        $person->update($validated);

        return response()->json($person, 200);
    }

    public function destroy($id)
    {
        $person = Person::findOrFail($id);
        $person->delete();

        return response()->json(null, 204);
    }
}
