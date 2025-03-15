<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    // function index()
    // {
    //     return view('admin.index');
    // }
    function user()
    {
        return view('admin.user');
    }
    function services()
    {
        return view('admin.services');
    }
    function apartments()
    {
        return view('admin.apartments');
    }
}
