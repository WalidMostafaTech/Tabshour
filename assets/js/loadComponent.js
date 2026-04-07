const loadComponent = async (id, file) => {
  const res = await fetch(file);
  const data = await res.text();
  document.getElementById(id).innerHTML = data;
};

// load contact-icons-section
loadComponent("contact-icons-section", "components/contact-icons-section.html");

// load navbar
loadComponent("navbar", "components/navbar.html");

// load footer
loadComponent("footer", "components/footer.html");

// load home hero
loadComponent("home-hero", "components/home-hero.html");

// load brand
loadComponent("brand", "components/brand.html");

// load who we are
loadComponent("who-we-are", "components/who-we-are.html");

// load features
loadComponent("features", "components/features.html");

// load home-banner
loadComponent("home-banner", "components/home-banner.html");

// load faq
loadComponent("faq", "components/faq.html");

// load pricing
loadComponent("pricing", "components/pricing.html");

// load contact
loadComponent("contact", "components/contact.html");

// ############ about page ############

// load what-we-do
loadComponent("what-we-do", "components/what-we-do.html");

// load info-section
loadComponent("info-section", "components/info-section.html");

// load why-tabshour
loadComponent("why-tabshour", "components/why-tabshour.html");

// load about-banner
loadComponent("about-banner", "components/about-banner.html");
