// Sample data for properties and services
const propertiesData = [
  {
    id: 1,
    title: "Modern Apartment with City View",
    location: "Downtown, Cityville",
    price: 250000,
    status: "sale",
    type: "apartment",
    bedrooms: 2,
    bathrooms: 2,
    area: 1200,
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
    ],
    description: "This stunning modern apartment offers breathtaking city views from its floor-to-ceiling windows. The open-concept living space is perfect for entertaining, while the gourmet kitchen features high-end stainless steel appliances and quartz countertops. The primary bedroom includes a luxurious en-suite bathroom with a soaking tub and walk-in shower. Additional features include hardwood floors throughout, in-unit laundry, and a private balcony.",
    features: ["Air Conditioning", "Balcony", "Elevator", "Gym", "Parking", "Security System"],
    agent: {
      name: "John Smith",
      phone: "+1 (555) 123-4567",
      email: "john.smith@citylife.com",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    featured: true
  },
  {
    id: 2,
    title: "Spacious Family Home",
    location: "Suburbia, Cityville",
    price: 450000,
    status: "sale",
    type: "house",
    bedrooms: 4,
    bathrooms: 3,
    area: 2500,
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    images: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
    ],
    description: "Perfect for a growing family, this spacious home offers four bedrooms and three bathrooms across two levels. The main floor features an open-concept kitchen and living area that flows seamlessly to the backyard patio. The large primary suite includes a walk-in closet and en-suite bathroom. The finished basement provides additional living space that can be used as a home office, gym, or entertainment room. Located in a family-friendly neighborhood with excellent schools nearby.",
    features: ["Backyard", "Fireplace", "Garage", "Central Heating", "Basement", "Garden"],
    agent: {
      name: "Sarah Johnson",
      phone: "+1 (555) 987-6543",
      email: "sarah.johnson@citylife.com",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    featured: true
  },
  {
    id: 3,
    title: "Luxury Penthouse Suite",
    location: "Marina District, Cityville",
    price: 1200000,
    status: "sale",
    type: "apartment",
    bedrooms: 3,
    bathrooms: 3.5,
    area: 3000,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
      "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
    ],
    description: "Experience the pinnacle of luxury living in this stunning penthouse suite with panoramic water and city views. This exclusive residence features three spacious bedrooms, each with its own en-suite bathroom, plus a powder room for guests. The gourmet kitchen is equipped with top-of-the-line appliances and opens to a grand living and dining area with soaring ceilings. Additional highlights include a private rooftop terrace, wine cellar, and smart home technology throughout.",
    features: ["Rooftop Terrace", "Wine Cellar", "Smart Home", "Concierge", "Private Elevator", "Floor-to-ceiling Windows"],
    agent: {
      name: "Michael Chen",
      phone: "+1 (555) 456-7890",
      email: "michael.chen@citylife.com",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    featured: false
  },
  {
    id: 4,
    title: "Cozy Studio Apartment",
    location: "University District, Cityville",
    price: 1200,
    status: "rent",
    type: "apartment",
    bedrooms: 0,
    bathrooms: 1,
    area: 500,
    image: "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    images: [
      "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
    ],
    description: "This efficiently designed studio apartment is perfect for students or young professionals. The space features a modern kitchenette, full bathroom with shower, and a comfortable living/sleeping area. Large windows provide plenty of natural light, and built-in storage solutions maximize the available space. The building offers laundry facilities, bike storage, and is just a short walk from the university campus and public transportation.",
    features: ["Furnished", "Utilities Included", "Laundry in Building", "Bike Storage", "Pet Friendly", "High-Speed Internet"],
    agent: {
      name: "Emily Rodriguez",
      phone: "+1 (555) 234-5678",
      email: "emily.rodriguez@citylife.com",
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    featured: true
  },
  {
    id: 5,
    title: "Modern Office Space",
    location: "Business District, Cityville",
    price: 3500,
    status: "rent",
    type: "office",
    bedrooms: 0,
    bathrooms: 2,
    area: 1800,
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    images: [
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
    ],
    description: "This premium office space is ideal for small to medium-sized businesses looking for a professional environment in the heart of the business district. The open floor plan can accommodate up to 15 workstations and includes a private conference room, kitchenette, and two restrooms. The space features modern design elements, high ceilings, and large windows providing abundant natural light. Building amenities include 24/7 security, high-speed internet, and a shared rooftop terrace.",
    features: ["24/7 Access", "Conference Room", "Kitchenette", "High-Speed Internet", "Security System", "Elevator Access"],
    agent: {
      name: "David Wilson",
      phone: "+1 (555) 876-5432",
      email: "david.wilson@citylife.com",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    featured: false
  },
  {
    id: 6,
    title: "Charming Cottage",
    location: "Riverside, Cityville",
    price: 320000,
    status: "sale",
    type: "house",
    bedrooms: 2,
    bathrooms: 1,
    area: 1100,
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    images: [
      "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
    ],
    description: "This charming cottage offers a peaceful retreat in the desirable Riverside neighborhood. The home features two cozy bedrooms, a renovated bathroom, and an updated kitchen that opens to a bright living room with a wood-burning fireplace. French doors lead to a private backyard with mature landscaping and a covered patio perfect for outdoor dining. Additional features include hardwood floors, built-in bookshelves, and a detached garage that could be converted into a studio or workshop.",
    features: ["Fireplace", "Hardwood Floors", "Private Yard", "Detached Garage", "Updated Kitchen", "Patio"],
    agent: {
      name: "Sarah Johnson",
      phone: "+1 (555) 987-6543",
      email: "sarah.johnson@citylife.com",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    featured: false
  },
  {
    id: 7,
    title: "Luxury Villa with Pool",
    location: "Hillside Estates, Cityville",
    price: 1800000,
    status: "sale",
    type: "villa",
    bedrooms: 5,
    bathrooms: 4.5,
    area: 4500,
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    images: [
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
    ],
    description: "This magnificent villa offers the ultimate in luxury living with breathtaking views of the city and mountains. The grand entrance leads to an open floor plan with soaring ceilings, a gourmet kitchen with top-of-the-line appliances, and a great room with a stone fireplace. The primary suite features a spa-like bathroom and private balcony. Outside, the resort-style backyard includes a swimming pool, spa, outdoor kitchen, and covered patio. Additional features include a home theater, wine cellar, and three-car garage.",
    features: ["Swimming Pool", "Home Theater", "Wine Cellar", "Outdoor Kitchen", "Mountain Views", "Smart Home System"],
    agent: {
      name: "Michael Chen",
      phone: "+1 (555) 456-7890",
      email: "michael.chen@citylife.com",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    featured: true
  },
  {
    id: 8,
    title: "Downtown Loft",
    location: "Arts District, Cityville",
    price: 2200,
    status: "rent",
    type: "apartment",
    bedrooms: 1,
    bathrooms: 1,
    area: 950,
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    images: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
    ],
    description: "This stylish loft apartment is located in the vibrant Arts District, surrounded by galleries, restaurants, and boutiques. The open-concept space features exposed brick walls, polished concrete floors, and large industrial windows that flood the space with natural light. The modern kitchen includes stainless steel appliances and a breakfast bar, while the living area offers plenty of space for both relaxing and entertaining. A spiral staircase leads to the sleeping loft with a custom-built closet system.",
    features: ["Exposed Brick", "High Ceilings", "Industrial Windows", "In-unit Laundry", "Rooftop Access", "Bike Storage"],
    agent: {
      name: "Emily Rodriguez",
      phone: "+1 (555) 234-5678",
      email: "emily.rodriguez@citylife.com",
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    featured: false
  }
];

const servicesData = [
  {
    id: 1,
    title: "The Green Garden Restaurant",
    category: "restaurant",
    rating: 4.8,
    location: "123 Main Street, Downtown, Cityville",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    images: [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
    ],
    description: "The Green Garden is a farm-to-table restaurant offering seasonal menus crafted from locally sourced ingredients. Our elegant dining room provides the perfect setting for both intimate dinners and special celebrations. The outdoor patio, surrounded by a lush garden, offers al fresco dining during the warmer months. Our award-winning chef creates innovative dishes that highlight the natural flavors of the ingredients while our sommelier has curated an extensive wine list to complement your meal.",
    phone: "+1 (555) 123-4567",
    website: "www.thegreengarden.com",
    email: "info@thegreengarden.com",
    hours: [
      { day: "Monday", hours: "Closed" },
      { day: "Tuesday - Thursday", hours: "5:00 PM - 10:00 PM" },
      { day: "Friday - Saturday", hours: "5:00 PM - 11:00 PM" },
      { day: "Sunday", hours: "11:00 AM - 3:00 PM (Brunch), 5:00 PM - 9:00 PM (Dinner)" }
    ],
    features: ["Outdoor Seating", "Vegetarian Options", "Full Bar", "Private Dining", "Takeout Available", "Wheelchair Accessible"],
    featured: true
  },
  {
    id: 2,
    title: "City Pharmacy",
    category: "pharmacy",
    rating: 4.6,
    location: "456 Oak Avenue, Midtown, Cityville",
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    images: [
      "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
      "https://images.unsplash.com/photo-1563453392212-326f5e854473?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
      "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
    ],
    description: "City Pharmacy is a full-service pharmacy committed to providing personalized healthcare solutions to our community. Our experienced pharmacists offer medication counseling, immunizations, and health screenings. We also carry a wide selection of over-the-counter medications, vitamins, and health and wellness products. Our convenient location, ample parking, and prescription delivery service make managing your healthcare needs easier than ever.",
    phone: "+1 (555) 456-7890",
    website: "www.citypharmacy.com",
    email: "info@citypharmacy.com",
    hours: [
      { day: "Monday - Friday", hours: "8:00 AM - 9:00 PM" },
      { day: "Saturday", hours: "9:00 AM - 6:00 PM" },
      { day: "Sunday", hours: "10:00 AM - 4:00 PM" }
    ],
    features: ["Prescription Delivery", "Drive-thru Window", "Immunizations", "Health Screenings", "Medical Equipment", "Compounding Services"],
    featured: true
  },
  {
    id: 3,
    title: "Urban Fitness Center",
    category: "healthcare",
    rating: 4.9,
    location: "789 Elm Street, Downtown, Cityville",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    images: [
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
      "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
    ],
    description: "Urban Fitness Center offers state-of-the-art facilities and expert guidance to help you achieve your health and fitness goals. Our 15,000 square foot facility includes a comprehensive weight training area, cardio zone, group fitness studios, and a dedicated functional training space. Our certified personal trainers provide customized workout plans and one-on-one coaching, while our group classes range from high-intensity interval training to yoga and pilates. Additional amenities include locker rooms with saunas, a smoothie bar, and childcare services.",
    phone: "+1 (555) 789-0123",
    website: "www.urbanfitnesscenter.com",
    email: "info@urbanfitnesscenter.com",
    hours: [
      { day: "Monday - Thursday", hours: "5:00 AM - 11:00 PM" },
      { day: "Friday", hours: "5:00 AM - 10:00 PM" },
      { day: "Saturday - Sunday", hours: "7:00 AM - 8:00 PM" }
    ],
    features: ["Personal Training", "Group Classes", "Sauna", "Smoothie Bar", "Childcare", "24/7 Access Available"],
    featured: false
  },
  {
    id: 4,
    title: "Bookworm's Paradise",
    category: "shop",
    rating: 4.7,
    location: "321 Pine Road, Arts District, Cityville",
    image: "https://images.unsplash.com/photo-1526243741027-444d633d7365?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    images: [
      "https://images.unsplash.com/photo-1526243741027-444d633d7365?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
      "https://images.unsplash.com/photo-1521056787327-266aac440a9e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
    ],
    description: "Bookworm's Paradise is an independent bookstore offering a carefully curated selection of new and used books across all genres. Our knowledgeable staff provides personalized recommendations to help you find your next great read. The cozy reading nooks throughout the store invite you to sit and explore before you buy, while our in-store café serves locally roasted coffee and homemade pastries. We host regular author events, book clubs, and children's story times to foster a community of readers and thinkers.",
    phone: "+1 (555) 321-6789",
    website: "www.bookwormsparadise.com",
    email: "info@bookwormsparadise.com",
    hours: [
      { day: "Monday - Thursday", hours: "9:00 AM - 8:00 PM" },
      { day: "Friday - Saturday", hours: "9:00 AM - 10:00 PM" },
      { day: "Sunday", hours: "10:00 AM - 6:00 PM" }
    ],
    features: ["In-store Café", "Author Events", "Book Clubs", "Children's Corner", "Special Orders", "Online Shopping"],
    featured: true
  },
  {
    id: 5,
    title: "Cityville General Hospital",
    category: "healthcare",
    rating: 4.5,
    location: "1000 Health Boulevard, Northside, Cityville",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    images: [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
      "https://images.unsplash.com/photo-1504439468489-c8920d796a29?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
    ],
    description: "Cityville General Hospital is a comprehensive medical center providing high-quality healthcare services to our community. Our state-of-the-art facility houses emergency services, surgical suites, diagnostic imaging, laboratory services, and specialized departments including cardiology, oncology, orthopedics, and pediatrics. Our team of board-certified physicians, experienced nurses, and healthcare professionals is committed to delivering compassionate care and achieving excellent patient outcomes. We also offer outpatient services, preventive care programs, and community health education.",
    phone: "+1 (555) 000-1111",
    website: "www.cityvillehospital.org",
    email: "info@cityvillehospital.org",
    hours: [
      { day: "Emergency Department", hours: "24/7" },
      { day: "Outpatient Services", hours: "Monday - Friday: 8:00 AM - 6:00 PM" },
      { day: "Visitor Hours", hours: "Daily: 10:00 AM - 8:00 PM" }
    ],
    features: ["Emergency Services", "Surgical Center", "Diagnostic Imaging", "Laboratory Services", "Outpatient Care", "Rehabilitation Services"],
    featured: false
  },
  {
    id: 6,
    title: "Fresh Market Grocery",
    category: "shop",
    rating: 4.4,
    location: "555 Market Street, Westside, Cityville",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    images: [
      "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
      "https://images.unsplash.com/photo-1534723452862-4c874018d66d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
      "https://images.unsplash.com/photo-1579113800032-c38bd7635818?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
    ],
    description: "Fresh Market Grocery offers a premium shopping experience with an emphasis on quality, freshness, and variety. Our produce department features locally grown fruits and vegetables delivered daily, while our meat and seafood counters offer the finest cuts and catches. The bakery produces artisanal breads and pastries throughout the day, and our deli prepares gourmet sandwiches, salads, and hot meals to go. We also carry a wide selection of organic, gluten-free, and international products to meet diverse dietary needs and preferences.",
    phone: "+1 (555) 222-3333",
    website: "www.freshmarketgrocery.com",
    email: "info@freshmarketgrocery.com",
    hours: [
      { day: "Monday - Saturday", hours: "7:00 AM - 10:00 PM" },
      { day: "Sunday", hours: "8:00 AM - 9:00 PM" }
    ],
    features: ["Local Produce", "Organic Options", "Prepared Foods", "Bakery", "Deli", "Delivery Service"],
    featured: false
  },
  {
    id: 7,
    title: "Bella Italia Restaurant",
    category: "restaurant",
    rating: 4.7,
    location: "789 Olive Avenue, Little Italy, Cityville",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    images: [
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
    ],
    description: "Bella Italia brings the authentic flavors of Italy to Cityville with traditional recipes passed down through generations. Our menu features hand-made pastas, wood-fired pizzas, and classic Italian entrées prepared with imported ingredients and local produce. The warm, rustic interior with stone walls and soft lighting creates a cozy atmosphere perfect for romantic dinners or family gatherings. Our extensive wine list showcases selections from Italy's finest wine regions, and our knowledgeable staff can help you find the perfect pairing for your meal.",
    phone: "+1 (555) 444-5555",
    website: "www.bellaitalia.com",
    email: "info@bellaitalia.com",
    hours: [
      { day: "Monday", hours: "Closed" },
      { day: "Tuesday - Thursday", hours: "5:00 PM - 9:30 PM" },
      { day: "Friday - Saturday", hours: "5:00 PM - 10:30 PM" },
      { day: "Sunday", hours: "4:00 PM - 9:00 PM" }
    ],
    features: ["Authentic Italian Cuisine", "Wood-Fired Pizza", "Extensive Wine List", "Private Dining Room", "Catering", "Outdoor Patio"],
    featured: true
  },
  {
    id: 8,
    title: "Quick Care Clinic",
    category: "healthcare",
    rating: 4.3,
    location: "222 Wellness Way, Eastside, Cityville",
    image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    images: [
      "https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
    ],
    description: "Quick Care Clinic provides convenient, affordable healthcare for non-emergency medical needs. Our walk-in clinic treats common illnesses and injuries including colds, flu, infections, minor cuts, sprains, and more. We also offer preventive care services such as vaccinations, physical exams, and health screenings. Our team of board-certified physicians and nurse practitioners delivers prompt, professional care with minimal wait times. We accept most insurance plans and offer transparent pricing for self-pay patients.",
    phone: "+1 (555) 666-7777",
    website: "www.quickcareclinic.com",
    email: "info@quickcareclinic.com",
    hours: [
      { day: "Monday - Friday", hours: "8:00 AM - 8:00 PM" },
      { day: "Saturday - Sunday", hours: "9:00 AM - 5:00 PM" },
      { day: "Holidays", hours: "Hours may vary" }
    ],
    features: ["Walk-in Service", "Short Wait Times", "Lab Testing", "X-Ray Services", "Vaccinations", "Telemedicine"],
    featured: false
  }
];