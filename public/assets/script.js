document.addEventListener('DOMContentLoaded', function() {
  // Initialize the application
  initApp();
  
  // Add event listeners
  setupEventListeners();
});

// Initialize the application
function initApp() {
  // Load featured properties and services on the home page
  loadFeaturedProperties();
  loadPopularServices();
  
  // Load all properties and services
  loadAllProperties();
  loadAllServices();
  
  // Add animation classes to elements when they come into view
  animateOnScroll();
}

// Set up event listeners
function setupEventListeners() {
  // Navigation menu
  const navLinks = document.querySelectorAll('nav ul li a, .footer-section a[data-section]');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const section = this.getAttribute('data-section');
      showSection(section);
      
      // Update active nav link
      document.querySelectorAll('nav ul li a').forEach(navLink => {
        navLink.classList.remove('active');
      });
      document.querySelectorAll(`nav ul li a[data-section="${section}"]`).forEach(navLink => {
        navLink.classList.add('active');
      });
    });
  });
  
  // View all links
  const viewAllLinks = document.querySelectorAll('.view-all');
  viewAllLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const section = this.getAttribute('data-section');
      showSection(section);
      
      // Update active nav link
      document.querySelectorAll('nav ul li a').forEach(navLink => {
        navLink.classList.remove('active');
      });
      document.querySelectorAll(`nav ul li a[data-section="${section}"]`).forEach(navLink => {
        navLink.classList.add('active');
      });
    });
  });
  
  // Search tabs
  const tabBtns = document.querySelectorAll('.tab-btn');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      tabBtns.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
    });
  });
  
  // Property filters
  const propertyTypeFilter = document.getElementById('property-type');
  const propertyStatusFilter = document.getElementById('property-status');
  const propertyPriceFilter = document.getElementById('property-price');
  
  if (propertyTypeFilter && propertyStatusFilter && propertyPriceFilter) {
    propertyTypeFilter.addEventListener('change', filterProperties);
    propertyStatusFilter.addEventListener('change', filterProperties);
    propertyPriceFilter.addEventListener('change', filterProperties);
  }
  
  // Service filters
  const serviceTypeFilter = document.getElementById('service-type');
  const serviceRatingFilter = document.getElementById('service-rating');
  
  if (serviceTypeFilter && serviceRatingFilter) {
    serviceTypeFilter.addEventListener('change', filterServices);
    serviceRatingFilter.addEventListener('change', filterServices);
  }
  
  // Mobile menu toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav');
  
  if (menuToggle && nav) {
    menuToggle.addEventListener('click', function() {
      this.classList.toggle('active');
      nav.classList.toggle('active');
    });
  }
  
  // Close modals
  const closeModalBtns = document.querySelectorAll('.close-modal');
  closeModalBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const modal = this.closest('.modal');
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    });
  });
  
  // Close modal when clicking outside
  window.addEventListener('click', function(e) {
    const propertyModal = document.getElementById('property-detail-modal');
    const serviceModal = document.getElementById('service-detail-modal');
    
    if (e.target === propertyModal) {
      propertyModal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
    
    if (e.target === serviceModal) {
      serviceModal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });
  
  // Contact form submission
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Thank you for your message! We will get back to you soon.');
      contactForm.reset();
    });
  }
  
  // Home contact form submission
  const homeContactForm = document.getElementById('home-contact-form');
  if (homeContactForm) {
    homeContactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Thank you for your message! We will get back to you soon.');
      homeContactForm.reset();
    });
  }
  
  // Gallery thumbnail click
  document.addEventListener('click', function(e) {
    if (e.target.closest('.gallery-thumb')) {
      const thumbImg = e.target.closest('.gallery-thumb').querySelector('img');
      const mainImg = e.target.closest('.property-detail-gallery, .service-detail-gallery').querySelector('.gallery-main img');
      
      if (thumbImg && mainImg) {
        const tempSrc = mainImg.src;
        mainImg.src = thumbImg.src;
        thumbImg.src = tempSrc;
        
        // Add animation to main image
        mainImg.classList.add('animate__animated', 'animate__fadeIn');
        setTimeout(() => {
          mainImg.classList.remove('animate__animated', 'animate__fadeIn');
        }, 500);
      }
    }
  });
  
  // Scroll event for animations
  window.addEventListener('scroll', animateOnScroll);
}

// Animate elements when they come into view
function animateOnScroll() {
  const elements = document.querySelectorAll('.section-title, .property-card, .service-card, .contact-container');
  
  elements.forEach(element => {
    const elementPosition = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;
    
    if (elementPosition < screenPosition) {
      if (!element.classList.contains('animate__animated')) {
        element.classList.add('animate__animated', 'animate__fadeInUp');
      }
    }
  });
}

// Show the selected section
function showSection(sectionId) {
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
    section.classList.remove('active');
  });
  
  const selectedSection = document.getElementById(sectionId);
  if (selectedSection) {
    selectedSection.classList.add('active');
    
    // Reset animations for the selected section
    const animatedElements = selectedSection.querySelectorAll('.animate__animated');
    animatedElements.forEach(element => {
      element.classList.remove('animate__animated', 'animate__fadeIn', 'animate__fadeInUp');
      void element.offsetWidth; // Trigger reflow
      element.classList.add('animate__animated', 'animate__fadeInUp');
    });
    
    // Scroll to top
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}

// Load featured properties
function loadFeaturedProperties() {
  const featuredPropertiesContainer = document.getElementById('featured-properties');
  if (!featuredPropertiesContainer) return;
  
  const featuredProperties = propertiesData.filter(property => property.featured);
  
  featuredPropertiesContainer.innerHTML = '';
  
  featuredProperties.forEach(property => {
    featuredPropertiesContainer.appendChild(createPropertyCard(property));
  });
}

// Load popular services
function loadPopularServices() {
  const popularServicesContainer = document.getElementById('popular-services');
  if (!popularServicesContainer) return;
  
  const popularServices = servicesData.filter(service => service.featured);
  
  popularServicesContainer.innerHTML = '';
  
  popularServices.forEach(service => {
    popularServicesContainer.appendChild(createServiceCard(service));
  });
}

// Load all properties
function loadAllProperties() {
  const allPropertiesContainer = document.getElementById('all-properties');
  if (!allPropertiesContainer) return;
  
  allPropertiesContainer.innerHTML = '';
  
  propertiesData.forEach(property => {
    allPropertiesContainer.appendChild(createPropertyCard(property));
  });
}

// Load all services
function loadAllServices() {
  const allServicesContainer = document.getElementById('all-services');
  if (!allServicesContainer) return;
  
  allServicesContainer.innerHTML = '';
  
  servicesData.forEach(service => {
    allServicesContainer.appendChild(createServiceCard(service));
  });
}

// Create a property card
function createPropertyCard(property) {
  const card = document.createElement('div');
  card.className = 'property-card';
  card.setAttribute('data-id', property.id);
  
  card.innerHTML = `
    <div class="property-image">
      <img src="${property.image}" alt="${property.title}">
    </div>
    <div class="property-content">
      <span class="property-status status-${property.status}">${property.status === 'sale' ? 'For Sale' : 'For Rent'}</span>
      <h3 class="property-title">${property.title}</h3>
      <p class="property-location">${property.location}</p>
      <div class="property-features">
        <span class="feature feature-bed">${property.bedrooms} ${property.bedrooms === 1 ? 'Bed' : 'Beds'}</span>
        <span class="feature feature-bath">${property.bathrooms} ${property.bathrooms === 1 ? 'Bath' : 'Baths'}</span>
        <span class="feature feature-area">${property.area} sq ft</span>
      </div>
      <p class="property-price">${property.status === 'sale' ? '$' + property.price.toLocaleString() : '$' + property.price + '/month'}</p>
    </div>
  `;
  
  card.addEventListener('click', function() {
    showPropertyDetails(property.id);
  });
  
  return card;
}

// Create a service card
function createServiceCard(service) {
  const card = document.createElement('div');
  card.className = 'service-card';
  card.setAttribute('data-id', service.id);
  
  card.innerHTML = `
    <div class="service-image">
      <img src="${service.image}" alt="${service.title}">
    </div>
    <div class="service-content">
      <span class="service-category">${capitalizeFirstLetter(service.category)}</span>
      <h3 class="service-title">${service.title}</h3>
      <p class="service-rating">${service.rating} (${Math.floor(Math.random() * 100) + 50} reviews)</p>
      <p class="service-location">${service.location}</p>
    </div>
  `;
  
  card.addEventListener('click', function() {
    showServiceDetails(service.id);
  });
  
  return card;
}

// Show property details
function showPropertyDetails(propertyId) {
  const property = propertiesData.find(p => p.id === propertyId);
  if (!property) return;
  
  const propertyDetailModal = document.getElementById('property-detail-modal');
  const propertyDetailContent = document.getElementById('property-detail-content');
  
  propertyDetailContent.innerHTML = `
    <div class="property-detail-header">
      <h2 class="property-detail-title">${property.title}</h2>
      <p class="property-detail-location">${property.location}</p>
    </div>
    
    <div class="property-detail-gallery">
      <div class="gallery-main">
        <img src="${property.images[0]}" alt="${property.title}">
      </div>
      <div class="gallery-thumbs">
        <div class="gallery-thumb">
          <img src="${property.images[1]}" alt="${property.title}">
        </div>
        <div class="gallery-thumb">
          <img src="${property.images[2]}" alt="${property.title}">
        </div>
      </div>
    </div>
    
    <div class="property-detail-info">
      <div class="property-detail-description">
        <h3>Description</h3>
        <p>${property.description}</p>
      </div>
      
      <div class="property-detail-features">
        <h3>Features</h3>
        <div class="features-list">
          ${property.features.map(feature => `<span class="feature-item">${feature}</span>`).join('')}
        </div>
      </div>
    </div>
    
    <div class="property-detail-agent">
      <div class="agent-image">
        <img src="${property.agent.image}" alt="${property.agent.name}">
      </div>
      <div class="agent-info">
        <h3>Contact Agent</h3>
        <h4>${property.agent.name}</h4>
        <p>${property.agent.email}</p>
        <p>${property.agent.phone}</p>
        <div class="agent-contact">
          <button class="agent-contact-btn">Call</button>
          <button class="agent-contact-btn">Email</button>
        </div>
      </div>
    </div>
  `;
  
  propertyDetailModal.style.display = 'block';
  document.body.style.overflow = 'hidden';
  
  // Reset animation classes
  const modalContent = propertyDetailModal.querySelector('.modal-content');
  modalContent.classList.remove('animate__animated', 'animate__zoomIn');
  void modalContent.offsetWidth; // Trigger reflow
  modalContent.classList.add('animate__animated', 'animate__zoomIn');
}

// Show service details
function showServiceDetails(serviceId) {
  const service = servicesData.find(s => s.id === serviceId);
  if (!service) return;
  
  const serviceDetailModal = document.getElementById('service-detail-modal');
  const serviceDetailContent = document.getElementById('service-detail-content');
  
  serviceDetailContent.innerHTML = `
    <div class="service-detail-header">
      <h2 class="service-detail-title">${service.title}</h2>
      <p class="service-detail-location">${service.location}</p>
    </div>
    
    <div class="property-detail-gallery">
      <div class="gallery-main">
        <img src="${service.images[0]}" alt="${service.title}">
      </div>
      <div class="gallery-thumbs">
        <div class="gallery-thumb">
          <img src="${service.images[1]}" alt="${service.title}">
        </div>
        <div class="gallery-thumb">
          <img src="${service.images[2]}" alt="${service.title}">
        </div>
      </div>
    </div>
    
    <div class="property-detail-info">
      <div class="service-detail-description">
        <h3>About</h3>
        <p>${service.description}</p>
        
        <div style="margin-top: 20px;">
          <p><strong>Phone:</strong> ${service.phone}</p>
          <p><strong>Email:</strong> ${service.email}</p>
          <p><strong>Website:</strong> ${service.website}</p>
        </div>
      </div>
      
      <div class="service-detail-features">
        <h3>Features</h3>
        <div class="features-list">
          ${service.features.map(feature => `<span class="feature-item">${feature}</span>`).join('')}
        </div>
        
        <div class="service-hours">
          <h3>Business Hours</h3>
          ${service.hours.map(hour => `
            <div class="hours-item">
              <span>${hour.day}</span>
              <span>${hour.hours}</span>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
  
  serviceDetailModal.style.display = 'block';
  document.body.style.overflow = 'hidden';
  
  // Reset animation classes
  const modalContent = serviceDetailModal.querySelector('.modal-content');
  modalContent.classList.remove('animate__animated', 'animate__zoomIn');
  void modalContent.offsetWidth; // Trigger reflow
  modalContent.classList.add('animate__animated', 'animate__zoomIn');
}

// Filter properties
function filterProperties() {
  const typeFilter = document.getElementById('property-type').value;
  const statusFilter = document.getElementById('property-status').value;
  const priceFilter = document.getElementById('property-price').value;
  
  const allPropertiesContainer = document.getElementById('all-properties');
  allPropertiesContainer.innerHTML = '';
  
  let filteredProperties = propertiesData;
  
  // Filter by type
  if (typeFilter !== 'all') {
    filteredProperties = filteredProperties.filter(property => property.type === typeFilter);
  }
  
  // Filter by status
  if (statusFilter !== 'all') {
    filteredProperties = filteredProperties.filter(property => property.status === statusFilter);
  }
  
  // Filter by price
  if (priceFilter !== 'all') {
    if (priceFilter === '0-100000') {
      filteredProperties = filteredProperties.filter(property => property.price <= 100000);
    } else if (priceFilter === '100000-300000') {
      filteredProperties = filteredProperties.filter(property => property.price > 100000 && property.price <= 300000);
    } else if (priceFilter === '300000-500000') {
      filteredProperties = filteredProperties.filter(property => property.price > 300000 && property.price <= 500000);
    } else if (priceFilter === '500000+') {
      filteredProperties = filteredProperties.filter(property => property.price > 500000);
    }
  }
  
  // Display filtered properties
  filteredProperties.forEach(property => {
    allPropertiesContainer.appendChild(createPropertyCard(property));
  });
  
  // Show message if no properties match filters
  if (filteredProperties.length === 0) {
    allPropertiesContainer.innerHTML = '<p class="no-results">No properties match your criteria. Please try different filters.</p>';
  }
}

// Filter services
function filterServices() {
  const typeFilter = document.getElementById('service-type').value;
  const ratingFilter = document.getElementById('service-rating').value;
  
  const allServicesContainer = document.getElementById('all-services');
  allServicesContainer.innerHTML = '';
  
  let filteredServices = servicesData;
  
  // Filter by type
  if (typeFilter !== 'all') {
    filteredServices = filteredServices.filter(service => service.category === typeFilter);
  }
  
  // Filter by rating
  if (ratingFilter !== 'all') {
    const minRating = parseInt(ratingFilter.charAt(0));
    filteredServices = filteredServices.filter(service => service.rating >= minRating);
  }
  
  // Display filtered services
  filteredServices.forEach(service => {
    allServicesContainer.appendChild(createServiceCard(service));
  });
  
  // Show message if no services match filters
  if (filteredServices.length === 0) {
    allServicesContainer.innerHTML = '<p class="no-results">No services match your criteria. Please try different filters.</p>';
  }
}

// Helper function to capitalize first letter
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}