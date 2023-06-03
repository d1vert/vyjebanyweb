const tabs = document.querySelectorAll('.tab');
const navLinks = document.querySelectorAll('nav a');
const backBtn = document.getElementById('back-btn');
let prevTab;

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const id = link.getAttribute('href');
    const tab = document.querySelector(id);
    prevTab = document.querySelector('.tab.active');
    tabs.forEach(tab => tab.classList.remove('active'));
    tab.classList.add('active');
  });
});

backBtn.addEventListener('click', () => {
  if (prevTab) {
    tabs.forEach(tab => tab.classList.remove('active'));
    prevTab.classList.add('active');
  }
});

window.addEventListener("load", function() {
  document.querySelector(".logo-container").classList.add("active");
});

tabs.forEach(tab => {
  tab.addEventListener("click", function() {
    tabs.forEach(tab => tab.classList.remove("active"));
    this.classList.add("active");
  });
});
