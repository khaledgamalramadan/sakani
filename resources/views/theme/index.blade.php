@extends('theme.master')

@section('title', 'Home')

@section('home-active', 'active')

@section('content')
    <section id="home" class="section active">
        @include('theme.layout.hero')
        <div class="container">
            <div class="section-title animate__animated animate__fadeInUp">
                <h2>Featured Properties</h2>
                <a href="#" class="view-all" data-section="properties">View All</a>
            </div>
            <div class="property-grid" id="featured-properties">
                <!-- Featured properties will be loaded here -->
            </div>

            <div class="section-title animate__animated animate__fadeInUp">
                <h2>Popular Services</h2>
                <a href="#" class="view-all" data-section="services">View All</a>
            </div>
            <div class="services-grid" id="popular-services">
                <!-- Popular services will be loaded here -->
            </div>

            <!-- Contact Section on Home Page -->
            <div class="section-title animate__animated animate__fadeInUp">
                <h2>Get in Touch</h2>
            </div>
            <div class="contact-container home-contact animate__animated animate__fadeInUp">
                <div class="contact-info">
                    <h2>Contact Us</h2>
                    <p>Have questions about a property or service? Contact us and we'll get back to you as soon as
                        possible.</p>
                    <div class="info-item">
                        <span class="icon">📍</span>
                        <p>New Bani-suef - Egypt</p>
                    </div>
                    <div class="info-item">
                        <span class="icon">📞</span>
                        <p>01091786973</p>
                    </div>
                    <div class="info-item">
                        <span class="icon">✉️</span>
                        <p>sakani@gmail.com</p>
                    </div>
                    <div class="social-links">
                        <a href="www.facebook.com" class="social-link">Facebook</a>
                        <a href="www.x.com" class="social-link">Twitter</a>
                        <a href="www.instagram.com" class="social-link">Instagram</a>
                    </div>
                </div>
                <div class="contact-form">
                    <h2>Send us a Message</h2>
                    <form id="home-contact-form">
                        <div class="form-group">
                            <label for="home-name">Name</label>
                            <input type="text" id="home-name" name="name" required>
                        </div>
                        <div class="form-group">
                            <label for="home-email">Email</label>
                            <input type="email" id="home-email" name="email" required>
                        </div>
                        <div class="form-group">
                            <label for="home-subject">Subject</label>
                            <input type="text" id="home-subject" name="subject" required>
                        </div>
                        <div class="form-group">
                            <label for="home-message">Message</label>
                            <textarea id="home-message" name="message" rows="5" required></textarea>
                        </div>
                        <button type="submit" class="submit-btn">Send Message</button>
                    </form>
                </div>
            </div>
        </div> -
    </section>
@endsection
