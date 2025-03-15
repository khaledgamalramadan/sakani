<!doctype html>
<html lang="en">

@include('admin.layout.head')


<body>
    <div id="app">
        <div class="dashboard-container">
            @include('admin.layout.sidpar')
            @include('admin.layout.nav')

            <div class="content-body">
                <!-- Users Section -->
                @yield('user-content')
                <!-- Apartments Section -->
                @yield('apartments-content')
                <!-- Services Section -->
                @yield('services-content')
            </div>
            
        </div>
    </div>

    {{--
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

    <!-- Modal for adding/editing apartments -->
    <div class="modal" id="apartment-modal">
        <div class="modal-content">
            <div class="modal-header">
                <h2 id="apartment-modal-title">Add New Apartment</h2>
                <span class="close-modal">&times;</span>
            </div>
            <div class="modal-body">
                <form id="apartment-form">
                    <div class="form-group">
                        <label for="apartment-name">Name/Number</label>
                        <input type="text" id="apartment-name" required>
                    </div>
                    <div class="form-group">
                        <label for="apartment-address">Address</label>
                        <input type="text" id="apartment-address" required>
                    </div>
                    <div class="form-group">
                        <label for="apartment-size">Size (sqm)</label>
                        <input type="number" id="apartment-size" required>
                    </div>
                    <div class="form-group">
                        <label for="apartment-price">Price</label>
                        <input type="number" id="apartment-price" required>
                    </div>
                    <div class="form-group">
                        <label for="apartment-owner">Owner</label>
                        <select id="apartment-owner" required>
                            <!-- Will be populated with owners -->
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="apartment-status">Status</label>
                        <select id="apartment-status" required>
                            <option value="available">Available</option>
                            <option value="occupied">Occupied</option>
                            <option value="maintenance">Under Maintenance</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="apartment-description">Description</label>
                        <textarea id="apartment-description" rows="3"></textarea>
                    </div>
                    <div class="form-group">
                        <label for="apartment-photos">Photos</label>
                        <div class="photo-upload-container">
                            <div class="photo-preview" id="photo-preview"></div>
                            <input type="file" id="apartment-photos" multiple accept="image/*">
                            <button type="button" class="upload-btn" id="upload-photos-btn">
                                <i class="fas fa-upload"></i> Upload Photos
                            </button>
                        </div>
                    </div>
                    <div class="form-actions">
                        <button type="button" class="cancel-btn">Cancel</button>
                        <button type="submit" class="save-btn">Save</button>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <!-- Modal for adding/editing services -->
    <div class="modal" id="service-modal">
        <div class="modal-content">
            <div class="modal-header">
                <h2 id="service-modal-title">Add New Service</h2>
                <span class="close-modal">&times;</span>
            </div>
            <div class="modal-body">
                <form id="service-form">
                    <div class="form-group">
                        <label for="service-name">Name</label>
                        <input type="text" id="service-name" required>
                    </div>
                    <div class="form-group">
                        <label for="service-type">Type</label>
                        <select id="service-type" required>
                            <option value="restaurant">Restaurant</option>
                            <option value="pharmacy">Pharmacy</option>
                            <option value="bakery">Bakery</option>
                            <option value="grocery">Grocery Store</option>
                            <option value="laundry">Laundry</option>
                            <option value="gym">Gym</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="service-location">Location</label>
                        <input type="text" id="service-location" required>
                    </div>
                    <div class="form-group">
                        <label for="service-contact">Contact</label>
                        <input type="text" id="service-contact" required>
                    </div>
                    <div class="form-group">
                        <label for="service-status">Status</label>
                        <select id="service-status" required>
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="service-description">Description</label>
                        <textarea id="service-description" rows="3"></textarea>
                    </div>
                    <div class="form-group">
                        <label for="service-photo">Photo</label>
                        <div class="photo-upload-container">
                            <div class="photo-preview single" id="service-photo-preview"></div>
                            <input type="file" id="service-photo" accept="image/*">
                            <button type="button" class="upload-btn" id="upload-service-photo-btn">
                                <i class="fas fa-upload"></i> Upload Photo
                            </button>
                        </div>
                    </div>
                    <div class="form-actions">
                        <button type="button" class="cancel-btn">Cancel</button>
                        <button type="submit" class="save-btn">Save</button>
                    </div>
                </form>
            </div>
        </div>
    </div> --}}

    @include('admin.layout.script')
</body>

</html>
