// AOS init
if (window.AOS) {
  AOS.init({ duration: 800, once: true, offset: 80, easing: 'ease-out-cubic' });
}

// Navbar scroll effect
const navbar = document.getElementById('navbar');
const backToTop = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
  if (window.scrollY > 30) navbar.classList.add('scrolled');
  else navbar.classList.remove('scrolled');

  if (window.scrollY > 400) backToTop.classList.add('show');
  else backToTop.classList.remove('show');
});

// Mobile menu
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
  const icon = menuBtn.querySelector('i');
  icon.classList.toggle('fa-bars');
  icon.classList.toggle('fa-xmark');
});
document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    const icon = menuBtn.querySelector('i');
    icon.classList.add('fa-bars'); icon.classList.remove('fa-xmark');
  });
});

// Back to top
backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// Payment tabs
const tabs = document.querySelectorAll('.pay-tab');
const panels = document.querySelectorAll('.pay-panel');
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    const target = tab.dataset.tab;
    panels.forEach(p => {
      if (p.dataset.panel === target) p.classList.remove('hidden');
      else p.classList.add('hidden');
    });
  });
});

// Swiper
if (window.Swiper) {
  new Swiper('.info-swiper', {
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,
    autoplay: { delay: 4000, disableOnInteraction: false },
    pagination: { el: '.swiper-pagination', clickable: true },
    breakpoints: {
      640: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    }
  });
}

// Modal
document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".info-image");
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");
  const closeBtn = document.getElementById("closeModal");

  images.forEach(img => {
    img.addEventListener("click", () => {
      modalImg.src = img.dataset.img || img.src;
      modal.classList.remove("hidden");
      modal.classList.add("flex");
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  });

  // Tutup modal kalau klik area luar gambar
  modal.addEventListener("click", e => {
    if (e.target === modal) {
      modal.classList.add("hidden");
      modal.classList.remove("flex");
    }
  });
});


// Form submit
// const form = document.getElementById('aduan-form');
// if (form) {
//   form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const btn = form.querySelector('button[type="submit"]');
//     const original = btn.innerHTML;
//     btn.innerHTML = '<i class="fa-solid fa-check"></i> Aduan Terkirim!';
//     btn.classList.add('opacity-80');
//     setTimeout(() => {
//       form.reset();
//       btn.innerHTML = original;
//       btn.classList.remove('opacity-80');
//     }, 2500);
//   });
// }


// document.addEventListener("DOMContentLoaded", function () {
//   const form = document.getElementById('aduan-form');
  
//   if (!form) return;

//   // Ambil input untuk manipulasi event
//   const inputNama = document.getElementById("inputNama");
//   const inputTelepon = document.getElementById("inputTelepon");
//   const inputAlamat = document.getElementById("inputAlamat");
//   const inputPelanggan = document.getElementById("inputPelanggan");
//   const jenisPengaduan = document.getElementById("JenisPengaduan");
//   const deskripsiPengaduan = document.getElementById("DeskripsiPengaduan");

//   // 1. Kapital huruf awal nama saat un-focus (blur)
//   if (inputNama) {
//     inputNama.addEventListener("blur", function () {
//       let value = this.value.trim();
//       this.value = value.replace(/\b\w/g, char => char.toUpperCase());
//     });
//   }

//   // 2. Filter & batas nomor telepon saat mengetik
//   if (inputTelepon) {
//     inputTelepon.addEventListener("input", function () {
//       let value = this.value;
//       if (value.startsWith("+62")) {
//         value = "08" + value.slice(3);
//       }
//       value = value.replace(/[^0-9]/g, "");
//       if (value.length > 13) value = value.slice(0, 13);
//       this.value = value;
//     });
//   }

//   // 3. Handle Submit Form
//   form.addEventListener('submit', function (e) {
//     e.preventDefault();

//     // Validasi bawaan HTML
//     if (!form.checkValidity()) {
//       form.reportValidity();
//       return;
//     }

//     // Validasi panjang nomor HP
//     const telepon = inputTelepon.value;
//     if (telepon.length < 11 || telepon.length > 13) {
//       alert("Nomor telepon harus 11–13 digit");
//       inputTelepon.focus();
//       return;
//     }

//     // --- PROSES KIRIM KE WA ---
//     const nomorPDAM = "6281331443339";
//     const pesan = `*Pengaduan Perumdam Maja Tirta*

// Selamat Pagi/Siang/Sore Admin PERUMDAM MAJA TIRTA KOTA MOJOKERTO, berikut saya menginformasikan pengaduan:

// *Nama* :
// ${inputNama.value}

// *Alamat* :
// ${inputAlamat.value}

// *No. HP* :
// ${telepon}

// *No. Sambungan Pelanggan* :
// ${inputPelanggan.value}

// *Jenis Aduan* :
// ${jenisPengaduan.value}

// *Deskripsi* :
// ${deskripsiPengaduan.value}

// Terima kasih sebelumnya.`;

//     const url = `https://wa.me/${nomorPDAM}?text=${encodeURIComponent(pesan)}`;
    
//     // Buka WhatsApp di tab baru
//     window.open(url, "_blank");

//     // --- ANIMASI TOMBOL NOTIFIKASI ---
//     const btn = form.querySelector('button[type="submit"]');
//     const originalText = btn.innerHTML;
    
//     btn.innerHTML = '<i class="fa-solid fa-check"></i> Aduan Terkirim!';
//     btn.classList.add('opacity-80');
//     btn.disabled = true; // Opsional: mendisable tombol sementara agar tidak double submit

//     // Reset form setelah 2.5 detik
//     setTimeout(() => {
//       form.reset();
//       btn.innerHTML = originalText;
//       btn.classList.remove('opacity-80');
//       btn.disabled = false;
//     }, 2500);
//   });
// });


document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById('aduan-form');
  
  if (!form) return;

  // Ambil input untuk manipulasi event
  const inputNama = document.getElementById("inputNama");
  const inputTelepon = document.getElementById("inputTelepon");
  const inputAlamat = document.getElementById("inputAlamat");
  const inputPelanggan = document.getElementById("inputPelanggan");
  const jenisPengaduan = document.getElementById("JenisPengaduan");
  const deskripsiPengaduan = document.getElementById("DeskripsiPengaduan");

  // 1. Kapital huruf awal nama saat un-focus (blur)
  if (inputNama) {
    inputNama.addEventListener("blur", function () {
      let value = this.value.trim();
      this.value = value.replace(/\b\w/g, char => char.toUpperCase());
    });
  }

  // 2. Filter & batas nomor telepon saat mengetik
  if (inputTelepon) {
    inputTelepon.addEventListener("input", function () {
      let value = this.value;
      if (value.startsWith("+62")) {
        value = "08" + value.slice(3);
      }
      value = value.replace(/[^0-9]/g, "");
      if (value.length > 13) value = value.slice(0, 13);
      this.value = value;
    });
  }

  // 3. Handle Submit Form
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Validasi bawaan HTML
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    // Validasi panjang nomor HP
    const telepon = inputTelepon.value;
    if (telepon.length < 11 || telepon.length > 13) {
      alert("Nomor telepon harus 11–13 digit");
      inputTelepon.focus();
      return;
    }

    // --- PROSES KIRIM KE WA ---
    const nomorPDAM = "6281331443339";
    const pesan = `*Pengaduan Perumdam Maja Tirta*

Selamat Pagi/Siang/Sore Admin PERUMDAM MAJA TIRTA KOTA MOJOKERTO, berikut saya menginformasikan pengaduan:

*Nama* :
${inputNama.value}

*Alamat* :
${inputAlamat.value}

*No. HP* :
${telepon}

*No. Sambungan Pelanggan* :
${inputPelanggan.value}

*Jenis Aduan* :
${jenisPengaduan.value}

*Deskripsi* :
${deskripsiPengaduan.value}

Terima kasih sebelumnya.`;

    const url = `https://wa.me/${nomorPDAM}?text=${encodeURIComponent(pesan)}`;
    
    // Buka WhatsApp di tab baru
    window.open(url, "_blank");

    // --- LOGIKA MENUNGGU USER KEMBALI KE LANDING PAGE ---
    window.addEventListener('focus', function onWindowFocus() {
      
      // Ambil elemen toast notifikasi
      const toast = document.getElementById('toast-notif');
      
      if (toast) {
        // Munculkan notifikasi (efek slide up & fade in)
        toast.classList.remove('translate-y-20', 'opacity-0', 'pointer-events-none');
        
        // Reset form input agar bersih kembali
        form.reset();

        // Sembunyikan kembali notifikasi setelah 4 detik
        setTimeout(() => {
          toast.classList.add('translate-y-20', 'opacity-0', 'pointer-events-none');
        }, 7000);
      }

      // Hapus event listener focus agar tidak terpicu berkali-kali nantinya
      window.removeEventListener('focus', onWindowFocus);
    });

  });
});