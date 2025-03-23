document.addEventListener("DOMContentLoaded", () => {
    // Preloader
    const preloader = document.querySelector(".preloader")
    if (preloader) {
      window.addEventListener("load", () => {
        setTimeout(() => {
          preloader.classList.add("hidden")
        }, 2000)
      })
    }
  
    // Custom Cursor
    const cursorDot = document.querySelector(".cursor-dot")
    const cursorOutline = document.querySelector(".cursor-outline")
  
    if (cursorDot && cursorOutline) {
      document.addEventListener("mousemove", (e) => {
        cursorDot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
        cursorOutline.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
      })
  
      // Add magnetic effect to buttons and links
      const magneticElements = document.querySelectorAll("a, button, .service-card, .work-item")
  
      magneticElements.forEach((element) => {
        element.addEventListener("mouseenter", () => {
          cursorOutline.style.transform = "translate(-50%, -50%) scale(1.5)"
          cursorOutline.style.borderColor = "var(--color-primary-light)"
        })
  
        element.addEventListener("mouseleave", () => {
          cursorOutline.style.transform = "translate(-50%, -50%) scale(1)"
          cursorOutline.style.borderColor = "var(--color-primary)"
        })
      })
    }
  
    // Header Scroll Effect
    const header = document.querySelector(".header")
  
    if (header) {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
          header.classList.add("scrolled")
        } else {
          header.classList.remove("scrolled")
        }
      })
    }
  
    // Mobile Menu Toggle
    const menuToggle = document.querySelector(".menu-toggle")
    const mobileMenu = document.querySelector(".mobile-menu")
    const mobileMenuClose = document.querySelector(".mobile-menu-close")
    const mobileNavLinks = document.querySelectorAll(".mobile-nav-link")
  
    if (menuToggle && mobileMenu) {
      menuToggle.addEventListener("click", () => {
        mobileMenu.classList.add("show")
        document.body.style.overflow = "hidden"
      })
    }
  
    if (mobileMenuClose && mobileMenu) {
      mobileMenuClose.addEventListener("click", () => {
        mobileMenu.classList.remove("show")
        document.body.style.overflow = ""
      })
    }
  
    if (mobileNavLinks.length > 0 && mobileMenu) {
      mobileNavLinks.forEach((link) => {
        link.addEventListener("click", () => {
          mobileMenu.classList.remove("show")
          document.body.style.overflow = ""
        })
      })
    }
  
    // Hero Slider
    const heroSlides = document.querySelectorAll(".hero-slide")
    const heroDots = document.querySelectorAll(".hero-dot")
    const heroPrev = document.querySelector(".hero-arrow.prev")
    const heroNext = document.querySelector(".hero-arrow.next")
    let currentSlide = 0
    let heroInterval
  
    function showSlide(index) {
      heroSlides.forEach((slide) => slide.classList.remove("active"))
      heroDots.forEach((dot) => dot.classList.remove("active"))
  
      heroSlides[index].classList.add("active")
      heroDots[index].classList.add("active")
      currentSlide = index
    }
  
    function nextSlide() {
      currentSlide = (currentSlide + 1) % heroSlides.length
      showSlide(currentSlide)
    }
  
    function prevSlide() {
      currentSlide = (currentSlide - 1 + heroSlides.length) % heroSlides.length
      showSlide(currentSlide)
    }
  
    if (heroSlides.length > 0) {
      // Initialize hero slider
      heroInterval = setInterval(nextSlide, 5000)
  
      // Hero slider controls
      if (heroPrev) {
        heroPrev.addEventListener("click", () => {
          clearInterval(heroInterval)
          prevSlide()
          heroInterval = setInterval(nextSlide, 5000)
        })
      }
  
      if (heroNext) {
        heroNext.addEventListener("click", () => {
          clearInterval(heroInterval)
          nextSlide()
          heroInterval = setInterval(nextSlide, 5000)
        })
      }
  
      heroDots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
          clearInterval(heroInterval)
          showSlide(index)
          heroInterval = setInterval(nextSlide, 5000)
        })
      })
    }
  
    // Destinations Filter
    const destinationFilterBtns = document.querySelectorAll(".destinations-filter .filter-btn")
    const destinationCards = document.querySelectorAll(".destination-card")
  
    if (destinationFilterBtns.length > 0 && destinationCards.length > 0) {
      destinationFilterBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
          // Remove active class from all buttons
          destinationFilterBtns.forEach((b) => b.classList.remove("active"))
  
          // Add active class to clicked button
          btn.classList.add("active")
  
          // Get filter value
          const filterValue = btn.getAttribute("data-filter")
  
          // Filter destinations
          destinationCards.forEach((card) => {
            if (filterValue === "all" || card.getAttribute("data-category") === filterValue) {
              card.style.display = "block"
            } else {
              card.style.display = "none"
            }
          })
        })
      })
    }
  
    // Experience Tabs
    const tabBtns = document.querySelectorAll(".tab-btn")
    const tabPanes = document.querySelectorAll(".tab-pane")
  
    if (tabBtns.length > 0 && tabPanes.length > 0) {
      tabBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
          // Remove active class from all buttons and panes
          tabBtns.forEach((b) => b.classList.remove("active"))
          tabPanes.forEach((p) => p.classList.remove("active"))
  
          // Add active class to clicked button
          btn.classList.add("active")
  
          // Show corresponding tab pane
          const tabId = btn.getAttribute("data-tab")
          document.getElementById(tabId).classList.add("active")
        })
      })
    }
  
    // Gallery Filter
    const galleryFilterBtns = document.querySelectorAll(".gallery-filter .filter-btn")
    const galleryItems = document.querySelectorAll(".gallery-item")
  
    if (galleryFilterBtns.length > 0 && galleryItems.length > 0) {
      galleryFilterBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
          // Remove active class from all buttons
          galleryFilterBtns.forEach((b) => b.classList.remove("active"))
  
          // Add active class to clicked button
          btn.classList.add("active")
  
          // Get filter value
          const filterValue = btn.getAttribute("data-filter")
  
          // Filter gallery items
          galleryItems.forEach((item) => {
            if (filterValue === "all" || item.getAttribute("data-category") === filterValue) {
              item.style.display = "block"
            } else {
              item.style.display = "none"
            }
          })
        })
      })
    }
  
    // Lightbox
    const lightbox = document.getElementById("lightbox")
    const lightboxImage = document.querySelector(".lightbox-image")
    const lightboxClose = document.querySelector(".lightbox-close")
    const lightboxPrev = document.querySelector(".lightbox-arrow.prev")
    const lightboxNext = document.querySelector(".lightbox-arrow.next")
    const galleryZoomLinks = document.querySelectorAll(".gallery-zoom")
    let currentImageIndex = 0
    const galleryImages = []
  
    if (galleryZoomLinks.length > 0 && lightbox) {
      // Collect all gallery images
      galleryZoomLinks.forEach((link, index) => {
        galleryImages.push(link.getAttribute("href"))
  
        link.addEventListener("click", (e) => {
          e.preventDefault()
          currentImageIndex = index
          openLightbox(galleryImages[currentImageIndex])
        })
      })
  
      function openLightbox(imageSrc) {
        lightboxImage.src = imageSrc
        lightbox.classList.add("show")
        document.body.style.overflow = "hidden"
      }
  
      function closeLightbox() {
        lightbox.classList.remove("show")
        document.body.style.overflow = ""
      }
  
      if (lightboxClose) {
        lightboxClose.addEventListener("click", closeLightbox)
      }
  
      if (lightboxPrev) {
        lightboxPrev.addEventListener("click", () => {
          if (currentImageIndex > 0) {
            currentImageIndex--
          } else {
            currentImageIndex = galleryImages.length - 1
          }
          lightboxImage.src = galleryImages[currentImageIndex]
        })
      }
  
      if (lightboxNext) {
        lightboxNext.addEventListener("click", () => {
          if (currentImageIndex < galleryImages.length - 1) {
            currentImageIndex++
          } else {
            currentImageIndex = 0
          }
          lightboxImage.src = galleryImages[currentImageIndex]
        })
      }
  
      // Close lightbox on ESC key
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && lightbox.classList.contains("show")) {
          closeLightbox()
        }
      })
    }
  
    // Testimonial Slider
    const testimonialSlides = document.querySelectorAll(".testimonial-slide")
    const testimonialDots = document.querySelectorAll(".testimonial-dot")
    const testimonialPrev = document.querySelector(".testimonial-arrow.prev")
    const testimonialNext = document.querySelector(".testimonial-arrow.next")
  
    if (testimonialSlides.length) {
      let currentSlide = 0
      const prevArrow = document.querySelector(".testimonial-arrow.prev")
      const nextArrow = document.querySelector(".testimonial-arrow.next")
  
      function showSlide(index) {
        testimonialSlides.forEach((slide) => slide.classList.remove("active"))
        testimonialDots.forEach((dot) => dot.classList.remove("active"))
  
        testimonialSlides[index].classList.add("active")
        testimonialDots[index].classList.add("active")
      }
  
      if (prevArrow && nextArrow) {
        prevArrow.addEventListener("click", () => {
          currentSlide = (currentSlide - 1 + testimonialSlides.length) % testimonialSlides.length
          showSlide(currentSlide)
        })
  
        nextArrow.addEventListener("click", () => {
          currentSlide = (currentSlide + 1) % testimonialSlides.length
          showSlide(currentSlide)
        })
      }
  
      testimonialDots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
          currentSlide = index
          showSlide(currentSlide)
        })
      })
    }
  
    // Stats Counter Animation
    const statNumbers = document.querySelectorAll(".stat-number")
  
    function animateCounter(element) {
      const target = Number.parseInt(element.getAttribute("data-count"))
      const duration = 2000 // 2 seconds
      const step = target / (duration / 16) // 16ms per frame (approx 60fps)
      let current = 0
  
      const timer = setInterval(() => {
        current += step
        element.textContent = Math.floor(current)
  
        if (current >= target) {
          element.textContent = target
          clearInterval(timer)
        }
      }, 16)
    }
  
    // Intersection Observer for counters
    if (statNumbers.length) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              animateCounter(entry.target)
              observer.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.5 },
      )
  
      statNumbers.forEach((number) => {
        observer.observe(number)
      })
    }
  
    // Video Modal
    const videoModal = document.getElementById("video-modal")
    const videoModalClose = document.querySelector("#video-modal .modal-close")
    const videoLinks = document.querySelectorAll('[data-modal="video"]')
    const videoIframe = document.querySelector(".video-container iframe")
  
    if (videoLinks.length > 0 && videoModal) {
      videoLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
          e.preventDefault()
  
          // Set video URL (in a real scenario, you would get this from data attribute)
          videoIframe.src = "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
  
          // Show modal
          videoModal.classList.add("show")
          document.body.style.overflow = "hidden"
        })
      })
  
      if (videoModalClose) {
        videoModalClose.addEventListener("click", () => {
          // Reset iframe src to stop video
          videoIframe.src = "about:blank"
  
          // Hide modal
          videoModal.classList.remove("show")
          document.body.style.overflow = ""
        })
      }
    }
  
    // Smooth Scroll for Navigation Links
    const navLinks = document.querySelectorAll(".nav-link, .mobile-nav-link")
  
    navLinks.forEach((link) => {
      link.addEventListener("click", function (e) {
        const targetId = this.getAttribute("href");
  
        if (targetId && targetId.startsWith("#") && targetId.length > 1) {
          e.preventDefault();
  
          const targetElement = document.querySelector(targetId);
  
          if (targetElement) {
            const headerHeight = header.offsetHeight;
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
  
            window.scrollTo({
              top: targetPosition,
              behavior: "smooth",
            });
          }
        }
      });
    }
)
    // Back to Top Button\
    const backToTopButton = document.getElementById("backToTop")
  
    if (backToTopButton) {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 500) {
          backToTopButton.classList.add("show")
        } else {
          backToTopButton.classList.remove("show")
        }
      })
  
      backToTopButton.addEventListener("click", (e) => {
        e.preventDefault()
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      })
    }
  
    // Cookie Consent
    const cookieConsent = document.getElementById("cookieConsent")
    const acceptCookies = document.getElementById("acceptCookies")
    const rejectCookies = document.getElementById("rejectCookies")
  
    // Check if user has already made a choice
    if (cookieConsent && !localStorage.getItem("cookieConsent")) {
      // Show cookie consent if no choice has been made
      setTimeout(() => {
        cookieConsent.style.display = "block"
      }, 2000)
    }
  
    if (acceptCookies && cookieConsent) {
      acceptCookies.addEventListener("click", () => {
        localStorage.setItem("cookieConsent", "accepted")
        cookieConsent.style.display = "none"
      })
    }
  
    if (rejectCookies && cookieConsent) {
      rejectCookies.addEventListener("click", () => {
        localStorage.setItem("cookieConsent", "rejected")
        cookieConsent.style.display = "none"
      })
    }
  
    // Form Validation
    const forms = document.querySelectorAll("form")
  
    forms.forEach((form) => {
      form.addEventListener("submit", (e) => {
        if (!form.classList.contains("search-form")) {
          e.preventDefault()
  
          // Simple validation
          let isValid = true
          const formElements = form.elements
  
          for (let i = 0; i < formElements.length; i++) {
            if (formElements[i].hasAttribute("required") && !formElements[i].value) {
              formElements[i].classList.add("error")
              isValid = false
            } else {
              formElements[i].classList.remove("error")
            }
          }
  
          if (isValid) {
            // Simulate form submission
            const submitButton = form.querySelector('button[type="submit"]')
            if (submitButton) {
              const originalText = submitButton.textContent
              submitButton.disabled = true
              submitButton.textContent = "Gönderiliyor..."
  
              setTimeout(() => {
                form.reset()
                submitButton.disabled = false
                submitButton.textContent = originalText
  
                // Show success message
                const formSuccess = document.createElement("div")
                formSuccess.classList.add("form-success")
                formSuccess.innerHTML = '<i class="fas fa-check-circle"></i> Mesajınız başarıyla gönderildi.'
                form.appendChild(formSuccess)
  
                setTimeout(() => {
                  formSuccess.remove()
                }, 5000)
              }, 2000)
            }
          }
        }
      })
    })
  
    // Scroll Animations
    const animateElements = document.querySelectorAll("[data-animate]")
  
    function checkScroll() {
      const triggerBottom = window.innerHeight * 0.8
  
      animateElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top
  
        if (elementTop < triggerBottom) {
          const animation = element.getAttribute("data-animate")
          element.classList.add(animation)
        }
      })
    }
  
    if (animateElements.length > 0) {
      // Initial check
      checkScroll()
  
      // Check on scroll
      window.addEventListener("scroll", checkScroll)
    }
  
    // Dark Mode Toggle
    const themeToggle = document.querySelector(".theme-toggle")
  
    if (themeToggle) {
      // Check for saved theme preference or prefer-color-scheme
      const savedTheme = localStorage.getItem("theme")
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
  
      if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
        document.body.classList.add("dark")
      }
  
      themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark")
  
        // Save preference
        if (document.body.classList.contains("dark")) {
          localStorage.setItem("theme", "dark")
        } else {
          localStorage.setItem("theme", "light")
        }
      })
    }
  
    // Smooth Scrolling for Anchor Links
    const anchorLinks = document.querySelectorAll('a[href^="#"]:not([href="#"])')
  
    anchorLinks.forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault()
  
        const targetId = this.getAttribute("href")
        const targetElement = document.querySelector(targetId)
  
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: "smooth",
          })
        }
      })
    })
  
    // Portfolio/Works Filter
    const filterButtons = document.querySelectorAll(".filter-btn")
    const workItems = document.querySelectorAll(".work-item")
  
    if (filterButtons.length && workItems.length) {
      filterButtons.forEach((button) => {
        button.addEventListener("click", function () {
          // Remove active class from all buttons
          filterButtons.forEach((btn) => btn.classList.remove("active"))
  
          // Add active class to clicked button
          this.classList.add("active")
  
          const filterValue = this.getAttribute("data-filter")
  
          workItems.forEach((item) => {
            if (filterValue === "all" || item.getAttribute("data-category") === filterValue) {
              item.style.display = "block"
            } else {
              item.style.display = "none"
            }
          })
        })
      })
    }
  
    // Back to Top Button
    const backToTopBtn = document.getElementById("backToTop")
  
    if (backToTopBtn) {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 500) {
          backToTopBtn.classList.add("show")
        } else {
          backToTopBtn.classList.remove("show")
        }
      })
  
      backToTopBtn.addEventListener("click", (e) => {
        e.preventDefault()
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      })
    }
  
    // Cookie Consent
    const cookieAccept = document.getElementById("acceptCookies")
    const cookieDecline = document.getElementById("rejectCookies")
  
    if (cookieConsent && cookieAccept && cookieDecline) {
      // Check if user has already made a choice
      const cookieChoice = localStorage.getItem("cookieConsent")
  
      if (!cookieChoice) {
        // Show cookie consent after a delay
        setTimeout(() => {
          cookieConsent.style.display = "block"
        }, 2000)
      }
  
      cookieAccept.addEventListener("click", () => {
        localStorage.setItem("cookieConsent", "accepted")
        cookieConsent.style.display = "none"
      })
  
      cookieDecline.addEventListener("click", () => {
        localStorage.setItem("cookieConsent", "declined")
        cookieConsent.style.display = "none"
      })
    }
  
    // Form Validation
    const contactForm = document.querySelectorAll("form")
  
    contactForm.forEach((form) => {
      form.addEventListener("submit", (e) => {
        if (!form.classList.contains("search-form")) {
          e.preventDefault()
  
          // Simple validation
          let isValid = true
          const formElements = form.elements
  
          for (let i = 0; i < formElements.length; i++) {
            if (formElements[i].hasAttribute("required") && !formElements[i].value) {
              isValid = false
              formElements[i].style.borderColor = "var(--color-error)"
            } else if (formElements[i].type !== "submit") {
              formElements[i].style.borderColor = ""
            }
          }
  
          if (isValid) {
            // Here you would normally send the form data to a server
            // For demo purposes, we'll just show a success message
            const formData = new FormData(form)
            const formValues = {}
  
            for (const [key, value] of formData.entries()) {
              formValues[key] = value
            }
  
            console.log("Form submitted:", formValues)
  
            // Reset form
            form.reset()
  
            // Show success message (you could add a success message element to the HTML)
            alert("Form submitted successfully! We will contact you soon.")
          }
        }
      })
    })
  
    // Initialize AOS (Animate On Scroll) if available
    if (typeof AOS !== "undefined") {
      AOS.init({
        duration: 800,
        easing: "ease-in-out",
        once: true,
      })
    }
  })
  
  