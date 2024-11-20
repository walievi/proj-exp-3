<?php
namespace App\Http\Controllers;

use App\Services\PersonService;
use App\Http\Requests\StorePersonRequest;
use Illuminate\Http\Request;

class PersonController extends Controller
{
    protected $personService;

    public function __construct(PersonService $personService)
    {
        $this->personService = $personService;
    }

    /**
     * Lista todas as pessoas
     */
    public function index()
    {
        $people = $this->personService->getAllPeople();
        return response()->json($people);
    }

    /**
     * Mostra os detalhes de uma pessoa
     */
    public function show($id)
    {
        $person = $this->personService->getPersonById($id);
        return response()->json($person);
    }

    /**
     * Cria uma nova pessoa
     */
    public function store(StorePersonRequest $request)
    {
        $data = $request->validated(); // Validação feita pela Request
        $person = $this->personService->createPerson($data);
        return response()->json($person, 201);
    }

    /**
     * Atualiza os dados de uma pessoa
     */
    public function update(StorePersonRequest $request, $id)
    {
        $data = $request->validated(); // Validação feita pela Request
        $person = $this->personService->updatePerson($id, $data);
        return response()->json($person);
    }

    /**
     * Remove uma pessoa
     */
    public function destroy($id)
    {
        $this->personService->deletePerson($id);
        return response()->json(['message' => 'Pessoa removida com sucesso.'], 200);
    }
}