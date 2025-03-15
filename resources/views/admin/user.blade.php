@extends('admin.master')
@section('title', 'Users Management')

@section('user-content')
    <div class="section active" id="users-section">
        <div class="section-header">
            <button class="add-btn" id="add-user-btn">
                <i class="fas fa-plus"></i> Add User
            </button>
            <div class="search-container">
                <input type="text" placeholder="Search users..." id="search-users">
                <i class="fas fa-search"></i>
            </div>
        </div>
        <div class="table-container">
            <table class="data-table" id="users-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Role</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- User data will be populated here -->
                </tbody>
            </table>
        </div>
    </div>

        <!-- Modal for adding/editing users -->
    <div class="modal" id="user-modal">
        <div class="modal-content">
            <div class="modal-header">
                <h2 id="user-modal-title">Add New User</h2>
                <span class="close-modal">&times;</span>
            </div>
            <div class="modal-body">
                <form id="user-form">
                    <div class="form-group">
                        <label for="user-name">Full Name</label>
                        <input type="text" id="user-name" required>
                    </div>
                    <div class="form-group">
                        <label for="user-email">Email</label>
                        <input type="email" id="user-email" required>
                    </div>
                    <div class="form-group">
                        <label for="user-phone">Phone</label>
                        <input type="tel" id="user-phone" required>
                    </div>
                    <div class="form-group">
                        <label for="user-role">Role</label>
                        <select id="user-role" required>
                            <option value="resident">Resident</option>
                            <option value="owner">Owner</option>
                            <option value="staff">Staff</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="user-password">Password</label>
                        <input type="password" id="user-password" required>
                    </div>
                    <div class="form-actions">
                        <button type="button" class="cancel-btn">Cancel</button>
                        <button type="submit" class="save-btn">Save</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
@endsection

@push('scripts')
    <script src="{{ asset('admin-assets') }}/data.js"></script>


@endpush
