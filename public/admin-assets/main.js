

// Sample data for demonstration
const sampleUsers = [
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890', role: 'admin' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '234-567-8901', role: 'owner' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', phone: '345-678-9012', role: 'resident' }
];

const sampleApartments = [
    { id: 1, name: 'A101', address: '123 Main St, Apt 101', size: 75, price: 1200, owner: 'Jane Smith', status: 'available', photos: [] },
    { id: 2, name: 'B202', address: '123 Main St, Apt 202', size: 90, price: 1500, owner: 'Jane Smith', status: 'occupied', photos: [] },
    { id: 3, name: 'C303', address: '123 Main St, Apt 303', size: 120, price: 1800, owner: 'Bob Johnson', status: 'maintenance', photos: [] }
];

const sampleServices = [
    { id: 1, name: 'City Pharmacy', type: 'pharmacy', location: '125 Main St', contact: '123-456-7890', status: 'active' },
    { id: 2, name: 'Fresh Bakery', type: 'bakery', location: '130 Main St', contact: '234-567-8901', status: 'active' },
    { id: 3, name: 'Golden Restaurant', type: 'restaurant', location: '140 Main St', contact: '345-678-9012', status: 'inactive' }
];

// State management
let users = [...sampleUsers];
let apartments = [...sampleApartments];
let services = [...sampleServices];
let currentEditId = null;
let uploadedPhotos = [];

// DOM Elements
const navItems = document.querySelectorAll('.nav-item');
const sections = document.querySelectorAll('.section');
const sectionTitle = document.getElementById('section-title');

// Modals
const userModal = document.getElementById('user-modal');
const apartmentModal = document.getElementById('apartment-modal');
const serviceModal = document.getElementById('service-modal');
const closeModalButtons = document.querySelectorAll('.close-modal, .cancel-btn');

// Buttons
const addUserBtn = document.getElementById('add-user-btn');
const addApartmentBtn = document.getElementById('add-apartment-btn');
const addServiceBtn = document.getElementById('add-service-btn');
const uploadPhotosBtn = document.getElementById('upload-photos-btn');
const uploadServicePhotoBtn = document.getElementById('upload-service-photo-btn');

// Forms
const userForm = document.getElementById('user-form');
const apartmentForm = document.getElementById('apartment-form');
const serviceForm = document.getElementById('service-form');

// Search inputs
const searchUsers = document.getElementById('search-users');
const searchApartments = document.getElementById('search-apartments');
const searchServices = document.getElementById('search-services');

// Tables
const usersTable = document.getElementById('users-table').querySelector('tbody');
const apartmentsTable = document.getElementById('apartments-table').querySelector('tbody');
const servicesTable = document.getElementById('services-table').querySelector('tbody');

// Photo preview containers
const photoPreview = document.getElementById('photo-preview');
const servicePhotoPreview = document.getElementById('service-photo-preview');

// Navigation
navItems.forEach(item => {
    item.addEventListener('click', () => {
        // Update active nav item
        navItems.forEach(nav => nav.classList.remove('active'));
        item.classList.add('active');

        // Show corresponding section
        const targetId = item.getAttribute('data-target');
        sections.forEach(section => section.classList.remove('active'));
        document.getElementById(`${targetId}-section`).classList.add('active');

        // Update section title
        sectionTitle.textContent = `${targetId.charAt(0).toUpperCase() + targetId.slice(1)} Management`;
    });
});

// Modal functions
function openModal(modal, isEdit = false, id = null) {
    modal.style.display = 'block';
    currentEditId = isEdit ? id : null;

    // Reset form if adding new
    if (!isEdit) {
        if (modal === userModal) {
            userForm.reset();
            document.getElementById('user-modal-title').textContent = 'Add New User';
        } else if (modal === apartmentModal) {
            apartmentForm.reset();
            document.getElementById('apartment-modal-title').textContent = 'Add New Apartment';
            photoPreview.innerHTML = '';
            uploadedPhotos = [];

            // Populate owner dropdown
            const ownerSelect = document.getElementById('apartment-owner');
            ownerSelect.innerHTML = '';
            users.filter(user => user.role === 'owner').forEach(owner => {
                const option = document.createElement('option');
                option.value = owner.name;
                option.textContent = owner.name;
                ownerSelect.appendChild(option);
            });
        } else if (modal === serviceModal) {
            serviceForm.reset();
            document.getElementById('service-modal-title').textContent = 'Add New Service';
            servicePhotoPreview.innerHTML = '';
        }
    } else {
        // Fill form with data if editing
        if (modal === userModal) {
            const user = users.find(u => u.id === id);
            document.getElementById('user-name').value = user.name;
            document.getElementById('user-email').value = user.email;
            document.getElementById('user-phone').value = user.phone;
            document.getElementById('user-role').value = user.role;
            document.getElementById('user-password').value = '********'; // Placeholder
            document.getElementById('user-modal-title').textContent = 'Edit User';
        } else if (modal === apartmentModal) {
            const apartment = apartments.find(a => a.id === id);
            document.getElementById('apartment-name').value = apartment.name;
            document.getElementById('apartment-address').value = apartment.address;
            document.getElementById('apartment-size').value = apartment.size;
            document.getElementById('apartment-price').value = apartment.price;
            document.getElementById('apartment-status').value = apartment.status;
            document.getElementById('apartment-description').value = apartment.description || '';
            document.getElementById('apartment-modal-title').textContent = 'Edit Apartment';

            // Populate owner dropdown
            const ownerSelect = document.getElementById('apartment-owner');
            ownerSelect.innerHTML = '';
            users.filter(user => user.role === 'owner').forEach(owner => {
                const option = document.createElement('option');
                option.value = owner.name;
                option.textContent = owner.name;
                ownerSelect.appendChild(option);
            });
            ownerSelect.value = apartment.owner;

            // Display existing photos
            photoPreview.innerHTML = '';
            uploadedPhotos = [...apartment.photos];
            displayPhotos();
        } else if (modal === serviceModal) {
            const service = services.find(s => s.id === id);
            document.getElementById('service-name').value = service.name;
            document.getElementById('service-type').value = service.type;
            document.getElementById('service-location').value = service.location;
            document.getElementById('service-contact').value = service.contact;
            document.getElementById('service-status').value = service.status;
            document.getElementById('service-description').value = service.description || '';
            document.getElementById('service-modal-title').textContent = 'Edit Service';

            // Display existing photo if any
            servicePhotoPreview.innerHTML = '';
            if (service.photo) {
                const photoItem = document.createElement('div');
                photoItem.className = 'photo-item';
                photoItem.innerHTML = `
            <img src="${service.photo}" alt="${service.name}">
            <span class="remove-photo" data-id="0">&times;</span>
        `;
                servicePhotoPreview.appendChild(photoItem);

                // Add event listener to remove button
                photoItem.querySelector('.remove-photo').addEventListener('click', () => {
                    servicePhotoPreview.innerHTML = '';
                    service.photo = null;
                });
            }
        }
    }
}

function closeModal(modal) {
    modal.style.display = 'none';
    currentEditId = null;
}

// Close modals
closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        closeModal(userModal);
        closeModal(apartmentModal);
        closeModal(serviceModal);
    });
});

// Open modals for adding new items
addUserBtn.addEventListener('click', () => openModal(userModal));
addApartmentBtn.addEventListener('click', () => openModal(apartmentModal));
addServiceBtn.addEventListener('click', () => openModal(serviceModal));

// Photo upload handling
uploadPhotosBtn.addEventListener('click', () => {
    document.getElementById('apartment-photos').click();
});

document.getElementById('apartment-photos').addEventListener('change', (e) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    // Convert FileList to array and add to uploadedPhotos
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();

        reader.onload = function (event) {
            uploadedPhotos.push(event.target.result);
            displayPhotos();
        };

        reader.readAsDataURL(file);
    }
});

function displayPhotos() {
    photoPreview.innerHTML = '';

    uploadedPhotos.forEach((photo, index) => {
        const photoItem = document.createElement('div');
        photoItem.className = 'photo-item';
        photoItem.innerHTML = `
      <img src="${photo}" alt="Apartment Photo">
      <span class="remove-photo" data-id="${index}">&times;</span>
    `;
        photoPreview.appendChild(photoItem);

        // Add event listener to remove button
        photoItem.querySelector('.remove-photo').addEventListener('click', (e) => {
            const index = parseInt(e.target.getAttribute('data-id'));
            uploadedPhotos.splice(index, 1);
            displayPhotos();
        });
    });
}

// Service photo upload
uploadServicePhotoBtn.addEventListener('click', () => {
    document.getElementById('service-photo').click();
});

document.getElementById('service-photo').addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = function (event) {
        servicePhotoPreview.innerHTML = '';
        const photoItem = document.createElement('div');
        photoItem.className = 'photo-item';
        photoItem.innerHTML = `
      <img src="${event.target.result}" alt="Service Photo">
      <span class="remove-photo" data-id="0">&times;</span>
    `;
        servicePhotoPreview.appendChild(photoItem);

        // Add event listener to remove button
        photoItem.querySelector('.remove-photo').addEventListener('click', () => {
            servicePhotoPreview.innerHTML = '';
        });
    };

    reader.readAsDataURL(file);
});

// Form submissions
userForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const userData = {
        name: document.getElementById('user-name').value,
        email: document.getElementById('user-email').value,
        phone: document.getElementById('user-phone').value,
        role: document.getElementById('user-role').value
    };

    if (currentEditId) {
        // Update existing user
        const index = users.findIndex(u => u.id === currentEditId);
        users[index] = { ...users[index], ...userData };
    } else {
        // Add new user
        const newId = users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1;
        users.push({ id: newId, ...userData });
    }

    renderUsers();
    closeModal(userModal);
});

apartmentForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const apartmentData = {
        name: document.getElementById('apartment-name').value,
        address: document.getElementById('apartment-address').value,
        size: parseInt(document.getElementById('apartment-size').value),
        price: parseInt(document.getElementById('apartment-price').value),
        owner: document.getElementById('apartment-owner').value,
        status: document.getElementById('apartment-status').value,
        description: document.getElementById('apartment-description').value,
        photos: [...uploadedPhotos]
    };

    if (currentEditId) {
        // Update existing apartment
        const index = apartments.findIndex(a => a.id === currentEditId);
        apartments[index] = { ...apartments[index], ...apartmentData };
    } else {
        // Add new apartment
        const newId = apartments.length > 0 ? Math.max(...apartments.map(a => a.id)) + 1 : 1;
        apartments.push({ id: newId, ...apartmentData });
    }

    renderApartments();
    closeModal(apartmentModal);
});

serviceForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const serviceData = {
        name: document.getElementById('service-name').value,
        type: document.getElementById('service-type').value,
        location: document.getElementById('service-location').value,
        contact: document.getElementById('service-contact').value,
        status: document.getElementById('service-status').value,
        description: document.getElementById('service-description').value
    };

    // Get photo if exists
    if (servicePhotoPreview.querySelector('img')) {
        serviceData.photo = servicePhotoPreview.querySelector('img').src;
    }

    if (currentEditId) {
        // Update existing service
        const index = services.findIndex(s => s.id === currentEditId);
        services[index] = { ...services[index], ...serviceData };
    } else {
        // Add new service
        const newId = services.length > 0 ? Math.max(...services.map(s => s.id)) + 1 : 1;
        services.push({ id: newId, ...serviceData });
    }

    renderServices();
    closeModal(serviceModal);
});

// Render functions
function renderUsers(filteredUsers = null) {
    const dataToRender = filteredUsers || users;
    usersTable.innerHTML = '';

    dataToRender.forEach(user => {
        const row = document.createElement('tr');
        row.innerHTML = `
      <td>${user.id}</td>
      <td>${user.name}</td>
      <td>${user.email}</td>
      <td>${user.phone}</td>
      <td>${user.role}</td>
      <td>
        <div class="action-buttons">
          <button class="action-btn edit-btn" data-id="${user.id}"><i class="fas fa-edit"></i></button>
          <button class="action-btn delete-btn" data-id="${user.id}"><i class="fas fa-trash"></i></button>
        </div>
      </td>
    `;
        usersTable.appendChild(row);
    });

    // Add event listeners to action buttons
    usersTable.querySelectorAll('.edit-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = parseInt(btn.getAttribute('data-id'));
            openModal(userModal, true, id);
        });
    });

    usersTable.querySelectorAll('.delete-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = parseInt(btn.getAttribute('data-id'));
            if (confirm('Are you sure you want to delete this user?')) {
                users = users.filter(user => user.id !== id);
                renderUsers();
            }
        });
    });
}

function renderApartments(filteredApartments = null) {
    const dataToRender = filteredApartments || apartments;
    apartmentsTable.innerHTML = '';

    dataToRender.forEach(apartment => {
        const row = document.createElement('tr');
        row.innerHTML = `
      <td>${apartment.id}</td>
      <td>${apartment.name}</td>
      <td>${apartment.address}</td>
      <td>${apartment.size} sqm</td>
      <td>$${apartment.price}</td>
      <td>${apartment.owner}</td>
      <td><span class="status-badge status-${apartment.status}">${apartment.status}</span></td>
      <td>
        <div class="action-buttons">
          <button class="action-btn view-btn" data-id="${apartment.id}"><i class="fas fa-eye"></i></button>
          <button class="action-btn edit-btn" data-id="${apartment.id}"><i class="fas fa-edit"></i></button>
          <button class="action-btn delete-btn" data-id="${apartment.id}"><i class="fas fa-trash"></i></button>
        </div>
      </td>
    `;
        apartmentsTable.appendChild(row);
    });

    // Add event listeners to action buttons
    apartmentsTable.querySelectorAll('.view-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = parseInt(btn.getAttribute('data-id'));
            const apartment = apartments.find(a => a.id === id);
            alert(`Apartment Details:\n\nName: ${apartment.name}\nAddress: ${apartment.address}\nSize: ${apartment.size} sqm\nPrice: $${apartment.price}\nOwner: ${apartment.owner}\nStatus: ${apartment.status}\nDescription: ${apartment.description || 'N/A'}\nPhotos: ${apartment.photos.length}`);
        });
    });

    apartmentsTable.querySelectorAll('.edit-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = parseInt(btn.getAttribute('data-id'));
            openModal(apartmentModal, true, id);
        });
    });

    apartmentsTable.querySelectorAll('.delete-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = parseInt(btn.getAttribute('data-id'));
            if (confirm('Are you sure you want to delete this apartment?')) {
                apartments = apartments.filter(apartment => apartment.id !== id);
                renderApartments();
            }
        });
    });
}

function renderServices(filteredServices = null) {
    const dataToRender = filteredServices || services;
    servicesTable.innerHTML = '';

    dataToRender.forEach(service => {
        const row = document.createElement('tr');
        row.innerHTML = `
      <td>${service.id}</td>
      <td>${service.name}</td>
      <td>${service.type}</td>
      <td>${service.location}</td>
      <td>${service.contact}</td>
      <td><span class="status-badge status-${service.status}">${service.status}</span></td>
      <td>
        <div class="action-buttons">
          <button class="action-btn view-btn" data-id="${service.id}"><i class="fas fa-eye"></i></button>
          <button class="action-btn edit-btn" data-id="${service.id}"><i class="fas fa-edit"></i></button>
          <button class="action-btn delete-btn" data-id="${service.id}"><i class="fas fa-trash"></i></button>
        </div>
      </td>
    `;
        servicesTable.appendChild(row);
    });

    // Add event listeners to action buttons
    servicesTable.querySelectorAll('.view-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = parseInt(btn.getAttribute('data-id'));
            const service = services.find(s => s.id === id);
            alert(`Service Details:\n\nName: ${service.name}\nType: ${service.type}\nLocation: ${service.location}\nContact: ${service.contact}\nStatus: ${service.status}\nDescription: ${service.description || 'N/A'}`);
        });
    });

    servicesTable.querySelectorAll('.edit-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = parseInt(btn.getAttribute('data-id'));
            openModal(serviceModal, true, id);
        });
    });

    servicesTable.querySelectorAll('.delete-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = parseInt(btn.getAttribute('data-id'));
            if (confirm('Are you sure you want to delete this service?')) {
                services = services.filter(service => service.id !== id);
                renderServices();
            }
        });
    });
}

// Search functionality
searchUsers.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    if (searchTerm.trim() === '') {
        renderUsers();
        return;
    }

    const filtered = users.filter(user =>
        user.name.toLowerCase().includes(searchTerm) ||
        user.email.toLowerCase().includes(searchTerm) ||
        user.phone.toLowerCase().includes(searchTerm) ||
        user.role.toLowerCase().includes(searchTerm)
    );

    renderUsers(filtered);
});

searchApartments.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    if (searchTerm.trim() === '') {
        renderApartments();
        return;
    }

    const filtered = apartments.filter(apartment =>
        apartment.name.toLowerCase().includes(searchTerm) ||
        apartment.address.toLowerCase().includes(searchTerm) ||
        apartment.owner.toLowerCase().includes(searchTerm) ||
        apartment.status.toLowerCase().includes(searchTerm)
    );

    renderApartments(filtered);
});

searchServices.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    if (searchTerm.trim() === '') {
        renderServices();
        return;
    }

    const filtered = services.filter(service =>
        service.name.toLowerCase().includes(searchTerm) ||
        service.type.toLowerCase().includes(searchTerm) ||
        service.location.toLowerCase().includes(searchTerm) ||
        service.contact.toLowerCase().includes(searchTerm) ||
        service.status.toLowerCase().includes(searchTerm)
    );

    renderServices(filtered);
});

// Initialize the dashboard
function initDashboard() {
    renderUsers();
    renderApartments();
    renderServices();
}

// Start the application
initDashboard();
