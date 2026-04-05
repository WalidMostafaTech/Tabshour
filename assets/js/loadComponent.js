const loadComponent = async (id, file) => {
  const res = await fetch(file);
  const data = await res.text();
  document.getElementById(id).innerHTML = data;
};

// load navbar
loadComponent("navbar", "/components/navbar.html");

// load who we are
loadComponent("who-we-are", "/components/who-we-are.html");

// load faq
loadComponent("faq", "/components/faq.html");

// load footer
loadComponent("footer", "/components/footer.html");
