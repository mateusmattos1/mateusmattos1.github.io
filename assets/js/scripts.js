/**
 * Portfolio Navigation & Utility Functions
 * Handles responsive menu toggling and interactions
 */

class NavigationManager {
	constructor() {
		this.navToggle = document.getElementById("nav-toggle");
		this.navMenu = document.querySelector(".nav-menu");
		this.navLinks = document.querySelectorAll(".nav-link");

		this.init();
	}

	init() {
		this.attachEventListeners();
	}

	attachEventListeners() {
		// Toggle menu
		this.navToggle?.addEventListener("click", () => this.toggleMenu());

		// Close menu when a link is clicked
		this.navLinks.forEach((link) => {
			link.addEventListener("click", () => this.closeMenu());
		});

		// Close menu when clicking outside
		document.addEventListener("click", (e) => {
			if (
				!e.target.closest(".navigation") &&
				this.navMenu?.classList.contains("active")
			) {
				this.closeMenu();
			}
		});

		// Close menu on escape key
		document.addEventListener("keydown", (e) => {
			if (e.key === "Escape" && this.navMenu?.classList.contains("active")) {
				this.closeMenu();
			}
		});
	}

	toggleMenu() {
		const isOpen = this.navMenu?.classList.contains("active");

		if (isOpen) {
			this.closeMenu();
		} else {
			this.openMenu();
		}
	}

	openMenu() {
		this.navMenu?.classList.add("active");
		this.navToggle?.setAttribute("aria-expanded", "true");
	}

	closeMenu() {
		this.navMenu?.classList.remove("active");
		this.navToggle?.setAttribute("aria-expanded", "false");
	}
}

/**
 * Intersection Observer for lazy animations
 * Animate elements as they come into view
 */
class ScrollAnimations {
	constructor() {
		this.observerOptions = {
			threshold: 0.1,
			rootMargin: "0px 0px -50px 0px",
		};

		this.init();
	}

	init() {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("animate");
					observer.unobserve(entry.target);
				}
			});
		}, this.observerOptions);

		// Observe all elements with data-animate attribute
		document.querySelectorAll("[data-animate]").forEach((el) => {
			observer.observe(el);
		});
	}
}

/**
 * Initialize when DOM is ready
 */
document.addEventListener("DOMContentLoaded", () => {
	new NavigationManager();
	new ScrollAnimations();

	// Log initialization in development
	if (process.env.NODE_ENV === "development") {
		console.log("Portfolio initialized successfully");
	}
});
