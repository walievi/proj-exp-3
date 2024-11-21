<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Person extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'name',
        'cpf',
        'rg',
        'birth_date',
        'email',
        'phone',
        'mother_name',
        'father_name',
        'is_disabled',
        'card_sus',
        'education_level',
    ];

    public function addresses()
    {
        return $this->hasMany(Address::class);
    }
}
