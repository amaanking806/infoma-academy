const socialLinks = {
  instagram: "https://instagram.com/yourhandle",
  facebook: "https://facebook.com/yourhandle",
  twitter: "https://twitter.com/yourhandle",
  linkedin: "https://linkedin.com/in/yourhandle"
};

document.addEventListener("DOMContentLoaded", () => {
  const icons = document.querySelectorAll(".social-icons a");
  
  icons.forEach(link => {
    const icon = link.querySelector("i");
    if (icon.classList.contains("fa-instagram")) link.href = socialLinks.instagram;
    if (icon.classList.contains("fa-facebook-f")) link.href = socialLinks.facebook;
    if (icon.classList.contains("fa-twitter")) link.href = socialLinks.twitter;
    if (icon.classList.contains("fa-linkedin-in")) link.href = socialLinks.linkedin;
  });
});
