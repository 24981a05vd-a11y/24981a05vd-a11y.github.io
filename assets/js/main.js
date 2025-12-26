// Project Data
const projects = [
    {
        id: 1,
        title: "Navanidhi Academy Webapp",
        category: "webapp",
        client: "Navanidhi Academy",
        image: "assets/img/navanidhi-academy-webapp.jpg",
        outcomes: [
            "100% Digital Record Keeping",
            "Reduced Admin Time by 40%",
            "Real-time Parent Updates"
        ],
        stack: ["Firebase", "JavaScript", "HTML/CSS", "Node Js"],
        featured: true,
        links: {
            live: "#",
            source: null,
        },
        description: "Built a custom management system for classes, schedules, and student progress tracking.",
        caseStudy: {
            problem: "The academy was relying on manual paper registers for attendance and fee tracking, leading to data errors and time-consuming report generation.",
            solution: "We built a centralized Firebase-powered dashboard that digitizes all student records, attendance, and fee status. The system provides real-time access for admins and generates automatic performance reports.",
            impact: "Eliminated paper usage for records, reduced administrative workload by 40%, and provided parents with instant transparency into their child's progress."
        }
    },
    {
        id: 2,
        title: "Navanidhi Credit Society Webapp",
        category: "webapp",
        client: "Credit Society",
        image: "assets/img/credit-society-webapp.jpg",
        outcomes: [
            "Zero Calculation Errors",
            "Secure Transaction History",
            "Instant Account Retrieval"
        ],
        stack: ["Firebase", "JavaScript", "Node Js", "HTML/CSS"],
        featured: true,
        links: {
            live: "#",
            source: null,
        },
        description: "Developed a society management solution with member accounts, transactions, and comprehensive record management.",
        caseStudy: {
            problem: "Managing member accounts and loan calculations manually on paper led to discrepancies and difficulty in retrieving historical transaction data.",
            solution: "We developed a secure web application that manages individual member profiles, tracks all credits/debits, and automatically calculates interest. The system includes role-based access for society managers.",
            impact: "achieved 100% accuracy in financial calculations and reduced the time to audit accounts from days to minutes."
        }
    },
    {
        id: 3,
        title: "MMrunchulu",
        category: "ecommerce",
        client: "MMrunchulu",
        image: "assets/img/mmruchulu.jpeg",
        outcomes: [
            "Expanded Customer Reach",
            "Automated Order Flow",
            "24/7 Digital Sales Channel"
        ],
        stack: ["WordPress", "WooCommerce"],
        featured: true,
        links: {
            live: "#",
            source: null,
        },
        description: "Launched and managed an online store. Handled product listings, order fulfillment, and payment processing.",
        caseStudy: {
            problem: "The business was limited to local, offline sales and lacked a digital presence to showcase their traditional snack products to a wider audience.",
            solution: "We deployed a fully functional WooCommerce store with a custom theme. We set up payment gateways, shipping zones, and simplified the checkout process for non-tech-savvy users.",
            impact: "Established a 24/7 sales channel, allowing the business to receive orders from across the region and significantly increasing monthly revenue."
        }
    },
    {
        id: 4,
        title: "Reclaim AI (Prototype)",
        category: "website",
        client: "Personal Project",
        image: "assets/img/reclaim Ai.jpeg",
        outcomes: [
            "AI-Powered Sorting",
            "Innovative Waste Management",
            "High Accuracy Model"
        ],
        stack: ["WordPress", "AI Integration", "Python"],
        featured: false,
        links: {
            live: "#",
            source: null,
        },
        description: "Developed a prototype that uses AI to provide creative reuse suggestions for waste items.",
        caseStudy: {
            problem: "Households often struggle to identify recyclable materials or find creative ways to reuse common waste items, leading to unnecessary landfill contribution.",
            solution: "We integrated Hugging Face AI models with a Python backend to analyze user-uploaded images of waste. The system identifies the object and generates creative DIY reuse ideas.",
            impact: "Demonstrated the viability of using accessible AI to promote sustainability, with the prototype successfully identifying common household waste items."
        }
    },
    {
        id: 5,
        title: "Navanidhi Academy (LMS)",
        category: "website",
        client: "Navanidhi Academy",
        image: "assets/img/navanidhi-academy-lms.jpg",
        outcomes: [
            "Remote Learning Access",
            "Structured Course Content",
            "Student Progress Analytics"
        ],
        stack: ["WordPress"],
        featured: false,
        links: {
            live: "#",
            source: null,
        },
        description: "A comprehensive LMS Platform for Students to access courses and track their learning journey.",
        caseStudy: {
            problem: "Students needed a way to access course materials and lectures remotely, especially outside of classroom hours.",
            solution: "We implemented a robust LMS using WordPress, organizing curriculum into structured modules with video capabilities, quizzes, and progress tracking for each student.",
            impact: "Enabled seamless remote learning, allowing students to review materials at their own pace and increasing course completion rates."
        }
    },
    {
        id: 6,
        title: "Navanidhi Digital System",
        category: ["webapp", "mobileapp"],
        client: "Navanidhi Digital System",
        image: "assets/img/navanidhi-digital-services.jpg",
        outcomes: [
            "Unified Service Platform",
            "Mobile & Web Access",
            "Rural Digital Empowerment"
        ],
        stack: ["Flutter", "Go", "Supabase", "Redis"],
        featured: true,
        links: {
            live: "#",
            source: null,
        },
        description: "A Mobile + webapp for all types of Digital Services in Rural Areas, including recharges and village products.",
        caseStudy: {
            problem: "Rural users had to visit multiple physical locations for basic digital services like recharges, rentals, and buying village products.",
            solution: "We built a 'Super App' ecosystem using Flutter for mobile and a web dashboard. The system aggregates these services into one platform, supported by a high-performance Go backend and Redis caching.",
            impact: "Centralized digital services for the village, significantly saving time for users and creating a new digital marketplace for local sellers."
        }
    },
    {
        id: 7,
        title: "3D Edu-Visualizer",
        category: "website",
        client: "Educational Institute",
        image: "assets/img/3d.jpg",
        outcomes: [
            "Immersive Learning",
            "Complex Concept Clarity",
            "Interactive Anatomy"
        ],
        stack: ["WordPress", "3D Elements", "Interactive"],
        featured: true,
        links: {
            live: "#",
            source: null,
        },
        description: "An educational platform featuring interactive 3D elements for visualizing complex biological concepts.",
        caseStudy: {
            problem: "Students struggled to visualize complex biological structures like the human heart and kidneys from 2D textbook diagrams.",
            solution: "We developed an interactive educational site that embeds manipulatable 3D models. Students can rotate, zoom, and explore anatomy directly in the browser.",
            impact: "Transformed passive reading into active exploration, helping students grasp spatial relationships and complex biological functions much faster."
        }
    }
];

// Testimonial Data
const testimonials = [
    {
        name: "Prasad",
        role: "Business Manager",
        company: "Sony Networks",
        text: "Jayaprakash transformed our outdated platform into a modern masterpiece. His attention to detail is unmatched.",
        rating: 5
    },
    {
        name: "Nanaji",
        role: "Founder",
        company: "Tokyo Exchange",
        text: "Incredible speed and quality. He understood our requirements perfectly and delivered ahead of schedule.",
        rating: 5
    },
    {
        name: "Emily Davis",
        role: "Marketing Director",
        company: "Creative Agency",
        text: "The best freelancer we've worked with. Communication was seamless and the end result was stunning.",
        rating: 5
    }
];

// DOM Elements
const projectsGrid = document.getElementById('projects-grid');
const filterBtns = document.querySelectorAll('.filter-btn');
const navbar = document.getElementById('navbar');
const testimonialTrack = document.getElementById('testimonial-track');

// Initial Render
document.addEventListener('DOMContentLoaded', () => {
    renderProjects('all');
    renderTestimonials();
    setupIntersectionObserver();
});

// Render Projects
function renderProjects(filter) {
    projectsGrid.innerHTML = '';

    // Sort featured first, then standard filter
    let filteredProjects = projects;

    if (filter !== 'all') {
        filteredProjects = projects.filter(p => {
            const categories = Array.isArray(p.category) ? p.category : [p.category];
            return categories.includes(filter);
        });
    }

    // Sort featured first
    filteredProjects.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));

    filteredProjects.forEach(project => {
        const categoryDisplay = Array.isArray(project.category)
            ? project.category.join(' & ').toUpperCase()
            : project.category.toUpperCase();

        const card = document.createElement('div');
        card.className = 'project-card';
        card.innerHTML = `
            <div class="project-thumb" style="background-image: url('${project.image}'); background-size: cover; background-position: center;"></div>
            <div class="project-content">
                <h3>${project.title}</h3>
                <span class="client-name">${project.client} | ${categoryDisplay}</span>
                
                <ul class="project-outcomes">
                    ${project.outcomes.map(o => `<li>${o}</li>`).join('')}
                </ul>
                
                <div class="project-tags">
                    ${project.stack.map(s => `<span class="tag">${s}</span>`).join('')}
                </div>
                
                <div class="project-actions">
                    <a href="${project.links.live}" target="_blank" class="btn btn-small btn-live">View Live</a>
                    <button class="btn btn-small btn-case" onclick="openModal(${project.id})">Case Study</button>
                    ${project.links.source ? `<a href="${project.links.source}" target="_blank" class="btn btn-small btn-case">Code</a>` : ''}
                </div>
            </div>
        `;
        projectsGrid.appendChild(card);
    });
}

// Filter Logic
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class
        filterBtns.forEach(b => b.classList.remove('active'));
        // Add active class
        btn.classList.add('active');
        // Filter
        renderProjects(btn.dataset.filter);
    });
});

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Active Link Highlight (Intersection Observer)
function setupIntersectionObserver() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, { threshold: 0.5 }); // Trigger when 50% of the section is visible

    sections.forEach(section => observer.observe(section));
}

// Testimonial Carousel (Seamless Infinite Scroll)
let currentTestimonial = 1; // Start at 1 (because of clone)
const transitionSpeed = 0.5; // Seconds
let autoScrollInterval;

function renderTestimonials() {
    testimonialTrack.innerHTML = '';

    // Clone first and last for seamless loop
    const firstClone = { ...testimonials[0], isClone: true };
    const lastClone = { ...testimonials[testimonials.length - 1], isClone: true };

    const displayTestimonials = [lastClone, ...testimonials, firstClone];

    displayTestimonials.forEach(t => {
        const card = document.createElement('div');
        card.className = 'testimonial-card';
        card.innerHTML = `
            <p class="testimonial-text">"${t.text}"</p>
            <div class="testimonial-author">
                <h4>${t.name}</h4>
                <span>${t.role} at ${t.company}</span>
            </div>
        `;
        testimonialTrack.appendChild(card);
    });

    // Initial Position (show real first item)
    updateCarousel(false);
}

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

nextBtn.addEventListener('click', () => {
    if (currentTestimonial >= testimonials.length + 1) return;
    currentTestimonial++;
    updateCarousel(true);
    resetAutoScroll();
});

prevBtn.addEventListener('click', () => {
    if (currentTestimonial <= 0) return;
    currentTestimonial--;
    updateCarousel(true);
    resetAutoScroll();
});

function updateCarousel(animate = true) {
    const gap = 30; // CSS gap
    const width = testimonialTrack.clientWidth; // Card width (100% of parent)
    // Actually the track is flex, parent has width. 
    // Card min-width is 100%.
    // So shift is: (100% + gap) * index

    testimonialTrack.style.transition = animate ? `transform ${transitionSpeed}s ease-in-out` : 'none';
    testimonialTrack.style.transform = `translateX(calc(-${currentTestimonial * 100}% - ${currentTestimonial * gap}px))`;
}

testimonialTrack.addEventListener('transitionend', () => {
    // If we are at the last clone (after real last), jump to real first
    if (currentTestimonial === testimonials.length + 1) {
        currentTestimonial = 1; // Real first
        updateCarousel(false);
    }
    // If we are at the first clone (before real first), jump to real last
    if (currentTestimonial === 0) {
        currentTestimonial = testimonials.length; // Real last
        updateCarousel(false);
    }
});

function startAutoScroll() {
    autoScrollInterval = setInterval(() => {
        currentTestimonial++;
        updateCarousel(true);
    }, 5000);
}

function resetAutoScroll() {
    clearInterval(autoScrollInterval);
    startAutoScroll();
}

// Start auto-scroll
startAutoScroll();

// Pause on hover
const testimonialSection = document.querySelector('.testimonial-carousel');
testimonialSection.addEventListener('mouseenter', () => clearInterval(autoScrollInterval));
testimonialSection.addEventListener('mouseleave', startAutoScroll);

// Modal Logic
const modalOverlay = document.getElementById('modal-overlay');
const modalBody = document.querySelector('.modal-body');
const closeModal = document.querySelector('.close-modal');

window.openModal = function (id) {
    const project = projects.find(p => p.id === id);
    if (!project) return;

    modalBody.innerHTML = `
        <img src="${project.image}" alt="${project.title}" class="modal-project-image">
        <h2 style="margin-bottom: 12px; font-size: 2rem;">${project.title}</h2>
        <p style="color: var(--text-secondary); margin-bottom: 24px;">${project.description}</p>
        
        <h3 style="margin-bottom: 12px;">The Problem</h3>
        <p style="color: #ccc; margin-bottom: 24px;">${project.caseStudy.problem}</p>
        
        <h3 style="margin-bottom: 12px;">The Solution</h3>
        <p style="color: #ccc; margin-bottom: 24px;">${project.caseStudy.solution}</p>
        
        <h3 style="margin-bottom: 12px;">Key Results</h3>
        <p style="color: #ccc; margin-bottom: 32px;">${project.caseStudy.impact}</p>
        
        <div style="text-align: center;">
            <a href="#contact" class="btn btn-primary" onclick="closeModalFunc()">Contact me for a similar project</a>
        </div>
    `;

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModalFunc() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
}

closeModal.addEventListener('click', closeModalFunc);

modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        closeModalFunc();
    }
});

// Contact Form
document.getElementById('copy-email-btn').addEventListener('click', function () {
    const email = this.dataset.email;
    navigator.clipboard.writeText(email).then(() => {
        const originalText = this.innerHTML;
        this.innerHTML = '<i data-feather="check"></i> Copied!';
        feather.replace();
        setTimeout(() => {
            this.innerHTML = originalText;
            feather.replace();
        }, 2000);
    });
});
