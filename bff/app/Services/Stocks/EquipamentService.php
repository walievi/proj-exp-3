<?php

namespace App\Services\Stocks;

use GuzzleHttp\Client;

class EquipamentService
{
    protected $httpClient;

    public function __construct()
    {
        if (is_null(env('STOCK_SERVER'))) {
            throw new \Exception('Stock service base URI is not defined');
        }
        $this->httpClient = new Client(['base_uri' => env('STOCK_SERVER')]);
    }

    public function getAllEquipaments()
    {
        $response = $this->httpClient->get('/equipament');
        return json_decode($response->getBody()->getContents(), true);
    }

    public function getEquipamentById($id)
    {
        $response = $this->httpClient->get("/equipament/{$id}");
        return json_decode($response->getBody()->getContents(), true);
    }

    public function createEquipament(array $data)
    {
        $response = $this->httpClient->post('/equipament', [
            'json' => $data,
        ]);
        return json_decode($response->getBody()->getContents(), true);
    }

    public function updateEquipament($id, array $data)
    {
        $response = $this->httpClient->put("/equipament/{$id}", [
            'json' => $data,
        ]);
        return json_decode($response->getBody()->getContents(), true);
    }

    public function deleteEquipament($id)
    {
        $this->httpClient->delete("/equipament/{$id}");
    }
}
