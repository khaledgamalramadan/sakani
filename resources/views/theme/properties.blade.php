@extends('theme.master')

@section('title', 'Properties')

@section('properties-active', 'active')


    <!-- Properties Section -->
@section('properties-content')
    اهلا خالد
    <section id="properties" class="section">
        <div class="container">
            <div class="section-header animate__animated animate__fadeIn">
                <h1>Properties</h1>
                <div class="filter-container">
                    <div class="filter-group">
                        <label for="property-type">Type</label>
                        <select id="property-type">
                            <option value="all">All Types</option>
                            <option value="apartment">Apartment</option>
                            <option value="house">House</option>
                            <option value="villa">Villa</option>
                            <option value="office">Office</option>
                        </select>
                    </div>
                    <div class="filter-group">
                        <label for="property-status">Status</label>
                        <select id="property-status">
                            <option value="all">All</option>
                            <option value="sale">For Sale</option>
                            <option value="rent">For Rent</option>
                        </select>
                    </div>
                    <div class="filter-group">
                        <label for="property-price">Price Range</label>
                        <select id="property-price">
                            <option value="all">All Prices</option>
                            <option value="0-100000">$0 - $100,000</option>
                            <option value="100000-300000">$100,000 - $300,000</option>
                            <option value="300000-500000">$300,000 - $500,000</option>
                            <option value="500000+">$500,000+</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="property-grid" id="all-properties">
                <!-- All properties will be loaded here -->
            </div>
        </div>
    </section>
@endsection
