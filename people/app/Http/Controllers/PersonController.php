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
        try {
            $person = Person::create($request->json()->all());
            return response()->json($person, 201);
        }catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 400);
        }
    }

    public function show(Person $person)
    {
        return response()->json($person, 200);
    }

    public function update(Request $request, Person $person)
    {
        try {
            $person->update($request->json()->all());
            return response()->json($person, 200);

        }catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 400);
        }
    }

    public function destroy(Person $person)
    {
        $person->delete();

        return response()->json(null, 204);
    }
}
