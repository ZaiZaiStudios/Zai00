// ================= MENUKAART CAROUSEL =================
document.addEventListener("DOMContentLoaded", () => {
  const images = [
    "menukaart1.png",
    "menukaart2.png",
    "menukaart0.png",
    "menukaart3.png"
  ];
  let current = 0;
  let autoSwipe = true;
  let intervalId = null;

  const img = document.getElementById("carouselImg");
  const menuPopup = document.getElementById("menuPopup");
  const prevBtn = document.getElementById("carouselPrev");
  const nextBtn = document.getElementById("carouselNext");

  function showImg(idx) {
    current = (idx + images.length) % images.length;
    img.src = images[current];
  }

  function nextImg() {
    showImg(current + 1);
  }

  function stopAutoSwipe() {
    if (autoSwipe) {
      autoSwipe = false;
      if (intervalId) clearInterval(intervalId);
    }
  }

  if (img) {
    // Clicking the image opens the popup
    img.addEventListener("click", (e) => {
      stopAutoSwipe();
      if (menuPopup) {
        menuPopup.style.display = "flex";
        document.body.style.overflow = "hidden";
      }
    });
    // Keyboard accessibility: Enter/Space opens the popup
    img.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        stopAutoSwipe();
        if (menuPopup) {
          menuPopup.style.display = "flex";
          document.body.style.overflow = "hidden";
        }
      }
    });
    // Carousel controls
    if (prevBtn) {
      prevBtn.addEventListener("click", () => {
        stopAutoSwipe();
        showImg(current - 1);
      });
    }
    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        stopAutoSwipe();
        nextImg();
      });
    }
    // Start auto-swipe
    showImg(0);
    intervalId = setInterval(() => {
      if (autoSwipe) nextImg();
    }, 3000);
  }
});

// ================= ZOOM MENU IMAGE =================
document.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("menuPopup");
  const zoomOverlay = document.getElementById("zoomOverlay");
  const zoomImg = document.getElementById("zoomImg");
  const closeZoom = document.getElementById("closeZoomOverlay");

  if (popup && zoomOverlay && zoomImg && closeZoom) {
    // Delegate click to menu images
    popup.addEventListener("click", (e) => {
      const target = e.target;
      if (target.classList && target.classList.contains("menu-img")) {
        zoomImg.src = target.src;
        zoomOverlay.style.display = "flex";
        document.body.style.overflow = "hidden";
      }
    });
    // Close zoom overlay
    closeZoom.addEventListener("click", () => {
      zoomOverlay.style.display = "none";
      document.body.style.overflow = "hidden";
    });
    // Click outside image closes overlay
    zoomOverlay.addEventListener("click", (e) => {
      if (e.target === zoomOverlay) {
        zoomOverlay.style.display = "none";
        document.body.style.overflow = "hidden";
      }
    });
    // Optional: ESC key closes overlay
    document.addEventListener("keydown", (e) => {
      if (zoomOverlay.style.display === "flex" && (e.key === "Escape" || e.key === "Esc")) {
        zoomOverlay.style.display = "none";
        document.body.style.overflow = "hidden";
      }
    });
  }
});
// ================= MENU POPUP MODAL =================
document.addEventListener("DOMContentLoaded", () => {
  const openBtn = document.getElementById("openMenuPopup");
  const popup = document.getElementById("menuPopup");
  const closeBtn = document.getElementById("closeMenuPopup");

  if (openBtn && popup && closeBtn) {
    openBtn.addEventListener("click", (e) => {
      e.preventDefault();
      popup.style.display = "flex";
      document.body.style.overflow = "hidden";
    });

    closeBtn.addEventListener("click", () => {
      popup.style.display = "none";
      document.body.style.overflow = "";
    });

    // Close popup when clicking outside content
    popup.addEventListener("click", (e) => {
      if (e.target === popup) {
        popup.style.display = "none";
        document.body.style.overflow = "";
      }
    });
  }
});
const track = document.getElementById("dishTrack");

// wait until layout is ready
requestAnimationFrame(() => {
  track.scrollLeft = track.scrollWidth / 4;
});

track.addEventListener("scroll", () => {
  const sectionWidth = track.scrollWidth / 2;

  if (track.scrollLeft < sectionWidth * 0.1) {
    track.scrollLeft += sectionWidth;
  }

  if (track.scrollLeft > sectionWidth * 1.1) {
    track.scrollLeft -= sectionWidth;
  }
});

// ================= FADE-IN ANIMATION =================
document.addEventListener("DOMContentLoaded", () => {
  // Select all text elements to fade in (headings, paragraphs, list items, etc.)
  const fadeEls = document.querySelectorAll(
    "header h1, section h2, section h3, section p, section li, .voor-content > *, .dishes > *, .hours > *, footer"
  );
  fadeEls.forEach(el => {
    el.classList.add("fade-hidden");
  });

  // Intersection Observer for fade-in on scroll
  const observer = new window.IntersectionObserver(
    (entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
          entry.target.classList.remove("fade-hidden");
          obs.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15
    }
  );

  fadeEls.forEach(el => {
    observer.observe(el);
  });
});
