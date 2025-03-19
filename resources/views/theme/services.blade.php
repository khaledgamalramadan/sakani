@extends('theme.master')

@section('title', 'Services')

@section('services-active', 'active')

@section('services')
welcome in services page
        <section id="services" class="section">
            <div class="container">
                <div class="section-header animate__animated animate__fadeIn">
                    <h1>City Services </h1>
                    <div class="filter-container">
                        <div class="filter-group">
                            <label for="service-type">Category</label>
                            <select id="service-type">
                                <option value="all">All Categories</option>
                                <option value="restaurant">Restaurants</option>
                                <option value="shop">Shops</option>
                                <option value="pharmacy">Pharmacies</option>
                                <option value="healthcare">Healthcare</option>
                                <option value="entertainment">Entertainment</option>
                            </select>
                        </div>
                        <div class="filter-group">
                            <label for="service-rating">Rating</label>
                            <select id="service-rating">
                                <option value="all">All Ratings</option>
                                <option value="4+">4+ Stars</option>
                                <option value="3+">3+ Stars</option>
                                <option value="2+">2+ Stars</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="services-grid" id="all-services">
                    <!-- All services will be loaded here -->
                </div>
            </div>
        </section>
@endsection
