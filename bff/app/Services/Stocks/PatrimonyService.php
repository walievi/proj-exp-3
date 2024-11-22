<?php

namespace App\Services\Stocks;

use GuzzleHttp\Client;

class PatrimonyService
{
    protected $httpClient;

    public function __construct()
    {
        if (is_null(env('STOCK_SERVER'))) {
            throw new \Exception('Stock service base URI is not defined');
        }
        $this->httpClient = new Client(['base_uri' => env('STOCK_SERVER')]);
    }

    public function getAllPatrimonies()
    {
        $response = $this->httpClient->get('/patrimony');
        return json_decode($response->getBody()->getContents(), true);
    }

    public function getPatrimonyById($id)
    {
        $response = $this->httpClient->get("/patrimony/{$id}");
        return json_decode($response->getBody()->getContents(), true);
    }

    public function createPatrimony(array $data)
    {
        $response = $this->httpClient->post('/patrimony', [
            'json' => $data,
        ]);
        return json_decode($response->getBody()->getContents(), true);
    }

    public function updatePatrimony($id, array $data)
    {
        $response = $this->httpClient->put("/patrimony/{$id}", [
            'json' => $data,
        ]);
        return json_decode($response->getBody()->getContents(), true);
    }

    public function deletePatrimony($id)
    {
        $this->httpClient->delete("/patrimony/{$id}");
    }
}
