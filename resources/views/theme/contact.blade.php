@extends('theme.master')

@section('title', 'Contact')

@section('contact-active', 'active')

@section('contact')
    hello khaled from contact
    <!-- Contact Section -->
    <section id="contact" class="section">
        <div class="container">
            <div class="contact-container animate__animated animate__fadeIn">
                <div class="contact-info">
                    <h2>Get in Touch </h2>
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
                    <form id="contact-form">
                        <div class="form-group">
                            <label for="name">Name</label>
                            <input type="text" id="name" name="name" required>
                        </div>
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" id="email" name="email" required>
                        </div>
                        <div class="form-group">
                            <label for="subject">Subject</label>
                            <input type="text" id="subject" name="subject" required>
                        </div>
                        <div class="form-group">
                            <label for="message">Message</label>
                            <textarea id="message" name="message" rows="5" required></textarea>
                        </div>
                        <button type="submit" class="submit-btn">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
@endsection
