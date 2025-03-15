<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ThemeController extends Controller
{
    function index() {
        return view('theme.index');
    }
    function about() {
        return view('theme.about');
    }

    function contact() {
        return view('theme.contact');
    }

    function services() {
        return view('theme.services');
    }

}
