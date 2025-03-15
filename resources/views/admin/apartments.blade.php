@extends('admin.index')
@section('title', 'Apartments Management')

@section('apartments-content')
    <!-- Apartments Section -->
    <div class="section" id="apartments-section">
        <div class="section-header">
            <button class="add-btn" id="add-apartment-btn">
                <i class="fas fa-plus"></i> Add Apartment
            </button>
            <div class="search-container">
                <input type="text" placeholder="Search apartments..." id="search-apartments">
                <i class="fas fa-search"></i>
            </div>
        </div>
        <div class="table-container">
            <table class="data-table" id="apartments-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Size</th>
                        <th>Price</th>
                        <th>Owner</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- Apartment data will be populated here -->
                </tbody>
            </table>
        </div>
    </div>
@endsection
@show
