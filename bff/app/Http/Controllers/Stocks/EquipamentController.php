<?php

namespace App\Http\Controllers\Stocks;

use App\Http\Controllers\Controller;
use App\Services\Stocks\EquipamentService;
use Illuminate\Http\Request;

class EquipamentController extends Controller
{
    protected $equipamentService;

    public function __construct(EquipamentService $equipamentService)
    {
        $this->equipamentService = $equipamentService;
    }

    public function index()
    {
        $equipaments = $this->equipamentService->getAllEquipaments();
        return response()->json($equipaments);
    }

    public function store(Request $request)
    {
        // $validated = $request->validate([
        //     'name' => 'required|string|max:255',
        //     'category_id' => 'required|integer',
        //     'description' => 'nullable|string|max:255',
        // ]);

        $equipament = $this->equipamentService->createEquipament($request);
        return response()->json($equipament, 201);
    }

    public function show($id)
    {
        $equipament = $this->equipamentService->getEquipamentById($id);
        return response()->json($equipament);
    }

    public function update(Request $request, $id)
    {
        // $validated = $request->validate([
        //     'name' => 'required|string|max:255',
        //     'category_id' => 'required|integer',
        //     'description' => 'nullable|string|max:255',
        // ]);

        $equipament = $this->equipamentService->updateEquipament($id, $request);
        return response()->json($equipament);
    }

    public function destroy($id)
    {
        $this->equipamentService->deleteEquipament($id);
        return response()->json(['message' => 'Equipament deleted successfully.'], 200);
    }
}
