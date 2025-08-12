// Page load par fade-in effect
document.addEventListener("DOMContentLoaded", function () {
  document.body.classList.add("fade-in");
});

// Link click par fade-out effect before navigation
document.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", function (e) {
    let target = link.getAttribute("href");

    // Agar link same page ka nahi hai to effect lagao
    if (target && !target.startsWith("#") && !link.hasAttribute("target")) {
      e.preventDefault();
      document.body.classList.remove("fade-in");
      setTimeout(() => {
        window.location.href = target;
      }, 400); // 0.4s delay same as CSS transition
    }
  });
});