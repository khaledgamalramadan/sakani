<!DOCTYPE html>
<html lang="en">

@include('theme.layout.head')

<body>
@include('theme.layout.header')

    <main>
        <!-- Home Section -->
        @yield('home-content')

        <!-- Properties Section -->
        @yield('properties-content')

        <!-- Services Section -->
        @yield('services')

        @yield('contact')

        <!-- Property Detail Modal -->
        <div id="property-detail-modal" class="modal">
            <div class="modal-content animate__animated animate__zoomIn">
                <span class="close-modal">&times;</span>
                <div id="property-detail-content">
                    <!-- Property details will be loaded here -->
                </div>
            </div>
        </div>

        <!-- Service Detail Modal -->
        <div id="service-detail-modal" class="modal">
            <div class="modal-content animate__animated animate__zoomIn">
                <span class="close-modal">&times;</span>
                <div id="service-detail-content">
                    <!-- Service details will be loaded here -->
                </div>
            </div>
        </div>

    </main>
    @include('theme.layout.footer')
    @include('theme.layout.script')


</body>
</html>
