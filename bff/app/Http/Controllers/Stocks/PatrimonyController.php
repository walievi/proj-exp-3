<?php

namespace App\Http\Controllers\Stocks;

use App\Http\Controllers\Controller;
use App\Services\Stocks\PatrimonyService;
use Illuminate\Http\Request;

class PatrimonyController extends Controller
{
    protected $patrimonyService;

    public function __construct(PatrimonyService $patrimonyService)
    {
        $this->patrimonyService = $patrimonyService;
    }

    public function index()
    {
        $patrimony = $this->patrimonyService->getAllPatrimonies();
        return response()->json($patrimony);
    }

    public function store(Request $request)
    {
        // $validated = $request->validate([
        //     'name' => 'required|string|max:255',
        //     'category_id' => 'required|integer',
        //     'description' => 'nullable|string|max:255',
        // ]);

        $patrimony = $this->patrimonyService->createPatrimony($request->all());
        return response()->json($patrimony, 201);
    }

    public function show($id)
    {
        $patrimony = $this->patrimonyService->getPatrimonyById($id);
        return response()->json($patrimony);
    }

    public function update(Request $request, $id)
    {
        // $validated = $request->validate([
        //     'name' => 'required|string|max:255',
        //     'category_id' => 'required|integer',
        //     'description' => 'nullable|string|max:255',
        // ]);

        $patrimony = $this->patrimonyService->updatePatrimony($id, $request->all());
        return response()->json($patrimony);
    }

    public function destroy($id)
    {
        $this->patrimonyService->deletePatrimony($id);
        return response()->json(['message' => 'Patrimony deleted successfully.'], 200);
    }
}
