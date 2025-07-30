"use strict"

// スクロール機能
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');

      if (href.startsWith("#")) {
        e.preventDefault();
        
        if (href === "#") {
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        } else {
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }

        // メニューが開いていたら閉じる
        if (typeof toggleMenu === 'function' && isMenuOpen) {
          toggleMenu();
        }
      }
    });
  });
});

// ボタンの処理
let isMenuOpen = false;

function toggleMenu() {
  const menu = document.getElementById('menu-panel');
  const icon = document.getElementById('menu-icon');

  if (!isMenuOpen) {
    menu.classList.add('active');
    icon.textContent = 'close';
  } else {
    menu.classList.remove('active');
    icon.textContent = 'menu';
  }

  isMenuOpen = !isMenuOpen;
}

document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('menu-toggle');
  const header = document.querySelector('header');

  toggleBtn.addEventListener('click', toggleMenu);

  window.addEventListener('scroll', () => {
    const headerBottom = header.getBoundingClientRect().bottom;

    if (headerBottom <= 0) {
      toggleBtn.classList.add('show');
    } else {
      toggleBtn.classList.remove('show');
      if (isMenuOpen) toggleMenu(); // 自動で閉じる
    }
  });
});
