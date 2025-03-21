    <header>
        <div class="container">
            <div class="logo">
                <h1>Sakani</h1>
            </div>
            <nav>
                <ul>
                    <li><a href="{{ route('index') }}" class="@yield('home-active')" >Home</a></li>
                    <li><a href="{{ route('properties') }}" class="@yield('properties-active')" >Properties</a></li>
                    <li><a href="{{ route('services') }}" class="@yield('services-active')" >Services</a></li>
                    <li><a href="{{ route('contact') }}" class="@yield('contact-active')" >Contact</a></li>
                </ul>
            </nav>
            <div class="menu-toggle">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </header>
