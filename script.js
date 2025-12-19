document.addEventListener('DOMContentLoaded', () => {
    // 1. Dapatkan elemen header, container, dan navigasi
    const header = document.querySelector('.header .container');
    const nav = document.querySelector('.nav');

    // 2. Buat tombol hamburger secara dinamis
    const menuToggle = document.createElement('button');
    menuToggle.classList.add('menu-toggle');
    menuToggle.innerHTML = '☰'; // Simbol Hamburger
    header.appendChild(menuToggle);

    // 3. Logika Toggle Menu (Saat tombol hamburger diklik)
    menuToggle.addEventListener('click', () => {
        // Tambahkan atau hapus kelas 'active' pada nav untuk menampilkan/menyembunyikan menu
        nav.classList.toggle('active');
        
        // Mengubah simbol (☰ ke ✖) saat menu aktif
        menuToggle.innerHTML = nav.classList.contains('active') ? '✖' : '☰';
    });

    // 4. Menutup menu saat salah satu link diklik (terutama penting di mobile)
    nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            // Hanya jalankan jika menu sedang terbuka
            if (nav.classList.contains('active')) {
                nav.classList.remove('active');
                menuToggle.innerHTML = '☰';
            }
        });
    });

    // IMPLEMENTASI CEK JANGKAUAN TELAH DIHAPUS DARI SINI
});