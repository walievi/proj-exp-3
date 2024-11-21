<?php

namespace App\Services\Stocks;

use GuzzleHttp\Client;

class CategoryService
{
    protected $httpClient;

    public function __construct()
    {
        if (is_null(env('STOCK_SERVER'))) {
            throw new \Exception('Stock service base URI is not defined');
        }
        $this->httpClient = new Client(['base_uri' => env('STOCK_SERVER')]);
    }

    public function getAllCategories()
    {
        $response = $this->httpClient->get('/category');
        return json_decode($response->getBody()->getContents(), true);
    }

    public function getCategoryById($id)
    {
        $response = $this->httpClient->get("/category/{$id}");
        return json_decode($response->getBody()->getContents(), true);
    }

    public function createCategory(array $data)
    {
        $response = $this->httpClient->post('/category', [
            'json' => $data,
        ]);
        return json_decode($response->getBody()->getContents(), true);
    }

    public function updateCategory($id, array $data)
    {
        $response = $this->httpClient->put("/category/{$id}", [
            'json' => $data,
        ]);
        return json_decode($response->getBody()->getContents(), true);
    }

    public function deleteCategory($id)
    {
        $this->httpClient->delete("/category/{$id}");
    }
}
