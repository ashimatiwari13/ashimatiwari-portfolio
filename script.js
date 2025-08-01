// DOM Content Loaded
document.addEventListener("DOMContentLoaded", () => {
  // Initialize all functionality
  initTypewriter()
  initScrollAnimations()
  initNavigation()
  initDarkMode()
  initContactForm()
  initMobileMenu()
  initResumeDownload()
})

// Typewriter Effect
function initTypewriter() {
  const typewriterElement = document.getElementById("typewriter")
  const texts = [
    "Computer Science Student",
    "Frontend Developer",
    "AI & Cloud Enthusiast",
    "Problem Solver",
    "Tech Explorer",
  ]

  let textIndex = 0
  let charIndex = 0
  let isDeleting = false
  let typeSpeed = 100

  function type() {
    const currentText = texts[textIndex]

    if (isDeleting) {
      typewriterElement.textContent = currentText.substring(0, charIndex - 1)
      charIndex--
      typeSpeed = 50
    } else {
      typewriterElement.textContent = currentText.substring(0, charIndex + 1)
      charIndex++
      typeSpeed = 100
    }

    if (!isDeleting && charIndex === currentText.length) {
      typeSpeed = 2000
      isDeleting = true
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false
      textIndex = (textIndex + 1) % texts.length
      typeSpeed = 500
    }

    setTimeout(type, typeSpeed)
  }

  type()
}

// Scroll Animations
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate")

        // Add stagger effect for skill chips
        if (entry.target.classList.contains("skill-category")) {
          const chips = entry.target.querySelectorAll(".skill-chip")
          chips.forEach((chip, index) => {
            setTimeout(() => {
              chip.style.animationDelay = `${index * 0.1}s`
              chip.classList.add("animate-scale-in")
            }, index * 100)
          })
        }

        // Add stagger effect for certification badges
        if (entry.target.classList.contains("certification-badge")) {
          setTimeout(() => {
            entry.target.classList.add("animate-scale-in")
          }, 200)
        }
      }
    })
  }, observerOptions)

  // Observe all elements with animate-on-scroll class
  document.querySelectorAll(".animate-on-scroll").forEach((el) => {
    observer.observe(el)
  })
}

// Navigation
function initNavigation() {
  const navLinks = document.querySelectorAll(".nav-link")
  const sections = document.querySelectorAll("section[id]")

  // Smooth scrolling for navigation links
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()
      const targetId = this.getAttribute("href").substring(1)
      const targetSection = document.getElementById(targetId)

      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 80
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        })
      }

      // Close mobile menu if open
      const mobileMenu = document.getElementById("mobileMenu")
      if (!mobileMenu.classList.contains("hidden")) {
        mobileMenu.classList.add("hidden")
      }
    })
  })

  // Update active navigation link on scroll
  window.addEventListener("scroll", () => {
    let current = ""
    const scrollPosition = window.scrollY + 100

    sections.forEach((section) => {
      const sectionTop = section.offsetTop
      const sectionHeight = section.clientHeight

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        current = section.getAttribute("id")
      }
    })

    navLinks.forEach((link) => {
      link.classList.remove("active")
      if (link.getAttribute("href").substring(1) === current) {
        link.classList.add("active")
      }
    })

    // Update navbar background on scroll
    const navbar = document.getElementById("navbar")
    if (window.scrollY > 50) {
      navbar.classList.add("bg-white/90", "dark:bg-gray-900/90")
      navbar.classList.remove("bg-white/80", "dark:bg-gray-900/80")
    } else {
      navbar.classList.remove("bg-white/90", "dark:bg-gray-900/90")
      navbar.classList.add("bg-white/80", "dark:bg-gray-900/80")
    }
  })
}

// Dark Mode Toggle
function initDarkMode() {
  const darkModeToggle = document.getElementById("darkModeToggle")
  const html = document.documentElement

  // Check for saved theme preference or default to light mode
  const savedTheme = localStorage.getItem("theme")
  if (savedTheme) {
    html.classList.toggle("dark", savedTheme === "dark")
  } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    html.classList.add("dark")
  }

  darkModeToggle.addEventListener("click", function () {
    html.classList.toggle("dark")
    const isDark = html.classList.contains("dark")
    localStorage.setItem("theme", isDark ? "dark" : "light")

    // Add a subtle animation to the toggle button
    this.style.transform = "scale(0.9)"
    setTimeout(() => {
      this.style.transform = "scale(1)"
    }, 150)
  })
}

// Contact Form
function initContactForm() {
  const contactForm = document.getElementById("contactForm")

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault()

    const submitButton = this.querySelector('button[type="submit"]')
    const originalText = submitButton.textContent

    // Add loading state
    submitButton.classList.add("loading")
    submitButton.textContent = "Sending..."
    submitButton.disabled = true

    // Get form data
    const formData = new FormData(this)
    const name = formData.get("name")
    const email = formData.get("email")
    const message = formData.get("message")

    // Simulate form submission (replace with actual form handling)
    setTimeout(() => {
      // Create mailto link
      const subject = encodeURIComponent(`Portfolio Contact from ${name}`)
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)
      const mailtoLink = `mailto:ashimatiwari013@gmail.com?subject=${subject}&body=${body}`

      // Open email client
      window.location.href = mailtoLink

      // Reset form
      this.reset()

      // Reset button
      submitButton.classList.remove("loading")
      submitButton.textContent = "Message Sent!"
      submitButton.disabled = false

      // Reset button text after 3 seconds
      setTimeout(() => {
        submitButton.textContent = originalText
      }, 3000)

      // Show success message
      showNotification("Message sent successfully!", "success")
    }, 1500)
  })
}

// Mobile Menu
function initMobileMenu() {
  const mobileMenuToggle = document.getElementById("mobileMenuToggle")
  const mobileMenu = document.getElementById("mobileMenu")

  mobileMenuToggle.addEventListener("click", function () {
    mobileMenu.classList.toggle("hidden")

    // Animate hamburger icon
    const icon = this.querySelector("i")
    if (mobileMenu.classList.contains("hidden")) {
      icon.classList.remove("fa-times")
      icon.classList.add("fa-bars")
    } else {
      icon.classList.remove("fa-bars")
      icon.classList.add("fa-times")
    }
  })

  // Close mobile menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!mobileMenuToggle.contains(e.target) && !mobileMenu.contains(e.target)) {
      mobileMenu.classList.add("hidden")
      const icon = mobileMenuToggle.querySelector("i")
      icon.classList.remove("fa-times")
      icon.classList.add("fa-bars")
    }
  })
}

// Resume Download
function initResumeDownload() {
  const resumeDownloadBtn = document.getElementById("resumeDownload")

  resumeDownloadBtn.addEventListener("click", function (e) {
    e.preventDefault()

    // Add download animation
    this.style.transform = "scale(0.95)"
    setTimeout(() => {
      this.style.transform = "scale(1)"
    }, 150)

    // Show notification (replace with actual resume download)
    showNotification("Resume download will be available soon!", "info")

    // In a real implementation, you would trigger the actual download here
    // For example:
    // const link = document.createElement('a');
    // link.href = 'path/to/resume.pdf';
    // link.download = 'Ashima_Tiwari_Resume.pdf';
    // link.click();
  })
}

// Notification System
function showNotification(message, type = "info") {
  const notification = document.createElement("div")
  notification.className = `fixed top-20 right-4 z-50 px-6 py-3 rounded-lg shadow-lg transform translate-x-full transition-transform duration-300 ${
    type === "success"
      ? "bg-#2a003f-500 text-white"
      : type === "error"
        ? "bg-red-500 text-white"
        : "bg-blue-500 text-white"
  }`
  notification.textContent = message

  document.body.appendChild(notification)

  // Slide in
  setTimeout(() => {
    notification.style.transform = "translateX(0)"
  }, 100)

  // Slide out and remove
  setTimeout(() => {
    notification.style.transform = "translateX(100%)"
    setTimeout(() => {
      document.body.removeChild(notification)
    }, 300)
  }, 3000)
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      const offsetTop = target.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  })
})

// Add parallax effect to hero section
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset
  const heroSection = document.getElementById("home")
  if (heroSection) {
    const rate = scrolled * -0.5
    heroSection.style.transform = `translateY(${rate}px)`
  }
})

// Add hover effects to skill chips
document.addEventListener("DOMContentLoaded", () => {
  const skillChips = document.querySelectorAll(".skill-chip")

  skillChips.forEach((chip) => {
    chip.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-2px) scale(1.05)"
    })

    chip.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)"
    })
  })
})

// Lazy loading for images
if ("IntersectionObserver" in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target
        img.src = img.dataset.src
        img.classList.remove("lazy")
        imageObserver.unobserve(img)
      }
    })
  })

  document.querySelectorAll("img[data-src]").forEach((img) => {
    imageObserver.observe(img)
  })
}

// Add loading animation to page
window.addEventListener("load", () => {
  document.body.classList.add("loaded")
})

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// Apply debounce to scroll events
const debouncedScrollHandler = debounce(() => {
  // Scroll-dependent operations here
}, 10)

window.addEventListener("scroll", debouncedScrollHandler)
