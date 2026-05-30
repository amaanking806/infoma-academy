// ============================================
// SITE CONFIG - Yahan sab kuch change karo
// ============================================

const CONFIG = {

  // --- Social Media Links ---
  social: {
    instagram: "https://instagram.com/infoma.in",
    facebook:  "https://facebook.com/infoma.in",
    twitter:   "https://twitter.com/infoma.in",
    linkedin:  "https://linkedin.com/company/infoma"
  },

  // --- Navigation Links ---
  nav: {
    home:         "https://infoma.in",
    quizzes:      "https://infoma.in/live-quiz",
    aboutQuizzes: "https://infoma.in/quiz-categories",
    partners:     "https://infoma.in/partners",
    about:        "https://infoma.in/about-us",
    reviews:      "https://infoma.in/reviews",
    contact:      "https://infoma.in/contact-us",
    careers:      "https://infoma.in/careers"
  },

  // --- Footer Quick Links ---
  footer: {
    howQuizWorks: "https://infoma.in/how-quiz-works",
    gallery:      "https://infoma.in/events-gallery",
    team:         "https://infoma.in/infoma-team",
    terms:        "https://infoma.in/terms-and-conditions",
    mission:      "https://infoma.in/our-mission",
    faq:          "https://infoma.in/frequently-asked-questions",
    advertise:    "https://infoma.in/advertise",
    privacy:      "https://infoma.in/privacy-policy"
  },

  // --- Contact Info ---
  contact: {
    email:   "hello@infoma.in",
    phone:   "+91 XXXXXXXXXX",
    address: "Jammu & Kashmir, India"
  }
};

// ============================================
// AUTO-APPLY (Yahan kuch mat chhona)
// ============================================

document.addEventListener("DOMContentLoaded", () => {

  // Social icons — footer + side menu dono
  document.querySelectorAll(".social-icons a, .side-social-icons a").forEach(link => {
    const icon = link.querySelector("i");
    if (!icon) return;
    if (icon.classList.contains("fa-instagram"))   link.href = CONFIG.social.instagram;
    if (icon.classList.contains("fa-facebook-f"))  link.href = CONFIG.social.facebook;
    if (icon.classList.contains("fa-twitter"))     link.href = CONFIG.social.twitter;
    if (icon.classList.contains("fa-linkedin-in")) link.href = CONFIG.social.linkedin;
  });

  // Footer quick links
  const linkMap = {
    "About Quizzes":    CONFIG.footer.aboutQuizzes,
    "Events Gallery":   CONFIG.footer.gallery,
    "Our Team":         CONFIG.footer.team,
    "Our Terms":        CONFIG.footer.terms,
    "Our Mission":      CONFIG.footer.mission,
    "How quiz works":   CONFIG.footer.howQuizWorks,
    "Frequently Asked": CONFIG.footer.faq,
    "Advertise With Us":CONFIG.footer.advertise,
    "Privacy Policy":   CONFIG.footer.privacy,
    "Contact Us":       CONFIG.nav.contact,
    "About Us":         CONFIG.nav.about
  };

  document.querySelectorAll("a").forEach(link => {
    const text = link.textContent.trim();
    if (linkMap[text]) link.href = linkMap[text];
  });

});
