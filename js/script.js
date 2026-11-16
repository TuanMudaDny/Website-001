/* ========================================
   Masjid Al-Ikhsan - Main Script
======================================== */

document.addEventListener('DOMContentLoaded', function () {
  // Highlight active nav link
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Load Prayer Times
  loadPrayerTimes();

  // Gallery lightbox
  initGallery();

  // Date format Indonesia
  formatDates();
});

/**
 * Fetch prayer times from Aladhan API for Bandar Lampung
 */
async function loadPrayerTimes() {
  const container = document.getElementById('prayer-times-list');
  const locationEl = document.getElementById('prayer-location');
  const dateEl = document.getElementById('prayer-date');

  if (!container) return;

  container.innerHTML = `
    <div class="prayer-loading">
      <div class="spinner-border spinner-border-sm text-success" role="status"></div>
      <p class="mt-2 mb-0">Memuat jadwal sholat...</p>
    </div>
  `;

  try {
    // Aladhan API - free, no key required
    // Method 20 = Kemenag Indonesia (or 11 for some regions)
    const city = 'Bandar Lampung';
    const country = 'Indonesia';
    const method = 20; // Kemenag

    const response = await fetch(
      `https://api.aladhan.com/v1/timingsByCity?city=${encodeURIComponent(city)}&country=${encodeURIComponent(country)}&method=${method}`
    );

    if (!response.ok) throw new Error('Gagal mengambil data');

    const data = await response.json();

    if (data.code !== 200 || !data.data) {
      throw new Error('Data tidak valid');
    }

    const timings = data.data.timings;
    const dateInfo = data.data.date;

    // Update location & date
    if (locationEl) {
      locationEl.textContent = `${city}, ${country}`;
    }
    if (dateEl) {
      dateEl.textContent = `${dateInfo.readable} | ${dateInfo.hijri.day} ${dateInfo.hijri.month.en} ${dateInfo.hijri.year} H`;
    }

    const prayers = [
      { name: 'Subuh', key: 'Fajr', icon: 'fa-moon' },
      { name: 'Zuhur', key: 'Dhuhr', icon: 'fa-sun' },
      { name: 'Asar', key: 'Asr', icon: 'fa-cloud-sun' },
      { name: 'Magrib', key: 'Maghrib', icon: 'fa-cloud-moon' },
      { name: 'Isya', key: 'Isha', icon: 'fa-star-and-crescent' }
    ];

    let html = '';
    prayers.forEach(p => {
      const time = timings[p.key] ? timings[p.key].substring(0, 5) : '--:--';
      html += `
        <li class="prayer-item">
          <div class="prayer-info">
            <div class="prayer-icon"><i class="fas ${p.icon}"></i></div>
            <span class="prayer-name">${p.name}</span>
          </div>
          <span class="prayer-time">${time}</span>
        </li>
      `;
    });

    container.innerHTML = html;

  } catch (error) {
    console.error('Prayer times error:', error);
    // Fallback demo data (marked as demo)
    const demoTimes = [
      { name: 'Subuh', time: '04:32', icon: 'fa-moon' },
      { name: 'Zuhur', time: '11:48', icon: 'fa-sun' },
      { name: 'Asar', time: '15:12', icon: 'fa-cloud-sun' },
      { name: 'Magrib', time: '17:55', icon: 'fa-cloud-moon' },
      { name: 'Isya', time: '19:08', icon: 'fa-star-and-crescent' }
    ];

    let html = '';
    demoTimes.forEach(p => {
      html += `
        <li class="prayer-item">
          <div class="prayer-info">
            <div class="prayer-icon"><i class="fas ${p.icon}"></i></div>
            <span class="prayer-name">${p.name}</span>
          </div>
          <span class="prayer-time">${p.time}</span>
        </li>
      `;
    });
    container.innerHTML = html;

    if (locationEl) locationEl.textContent = 'Bandar Lampung, Indonesia (Demo)';
    if (dateEl) dateEl.textContent = 'Data demo - koneksi API gagal';
  }
}

/**
 * Simple gallery lightbox using Bootstrap Modal
 */
function initGallery() {
  const galleryItems = document.querySelectorAll('.gallery-item');
  const modal = document.getElementById('galleryModal');
  const modalImg = document.getElementById('galleryModalImg');

  if (!modal || !modalImg) return;

  galleryItems.forEach(item => {
    item.addEventListener('click', function () {
      const imgSrc = this.querySelector('img').src;
      const imgAlt = this.querySelector('img').alt || 'Galeri';
      modalImg.src = imgSrc;
      modalImg.alt = imgAlt;
      const bsModal = new bootstrap.Modal(modal);
      bsModal.show();
    });
  });
}

/**
 * Format dates to Indonesian format if needed
 */
function formatDates() {
  // Already handled in static HTML mostly
}

/**
 * Login form handler (demo)
 */
function handleLogin(e) {
  e.preventDefault();
  const email = document.getElementById('loginEmail')?.value;
  const password = document.getElementById('loginPassword')?.value;

  if (!email || !password) {
    alert('Mohon isi email dan kata sandi.');
    return;
  }

  // Demo only
  alert('Fitur login demo. Silakan hubungkan ke backend untuk autentikasi sebenarnya.\n\nEmail: ' + email);
}

// Expose for form
window.handleLogin = handleLogin;
