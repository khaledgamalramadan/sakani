@extends('admin.index')

@section('title', 'Services Management')

@section('services-content')  {{-- حرف s صغير لمطابقة index.blade.php --}}
    <!-- Services Section -->
    <div class="section active" id="services-section">
        <div class="section-header">
            <button class="add-btn" id="add-service-btn">
                <i class="fas fa-plus"></i> Add Service
            </button>
            <div class="search-container">
                <input type="text" placeholder="Search services..." id="search-services">
                <i class="fas fa-search"></i>
            </div>
        </div>
        <div class="table-container">
            <table class="data-table" id="services-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- Service data will be populated here -->
                </tbody>
            </table>
        </div>
    </div> {{-- تأكد من إغلاق الـ div --}}
@endsection
