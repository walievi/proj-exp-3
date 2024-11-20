<?php
namespace App\Services;

use GuzzleHttp\Client;

class PersonService
{
    protected $httpClient;

    public function __construct()
    {
        if(is_null(env('PEOPLE_SERVER'))) {
            throw new \Exception('People service base URI is not defined');
        }
        $this->httpClient = new Client(['base_uri' => env('PEOPLE_SERVER')]);
    }

    public function getAllPeople()
    {
        $response = $this->httpClient->get('/api/people');
        return json_decode($response->getBody()->getContents(), true);
    }

    public function getPersonById($id)
    {
        $response = $this->httpClient->get("/api/people/{$id}");
        return json_decode($response->getBody()->getContents(), true);
    }

    public function createPerson(array $data)
    {
        $response = $this->httpClient->post('/api/people', [
            'json' => $data,
        ]);
        return json_decode($response->getBody()->getContents(), true);
    }

    public function updatePerson($id, array $data)
    {
        $response = $this->httpClient->put("/api/people/{$id}", [
            'json' => $data,
        ]);
        return json_decode($response->getBody()->getContents(), true);
    }

    public function deletePerson($id)
    {
        $this->httpClient->delete("/api/people/{$id}");
    }
}
