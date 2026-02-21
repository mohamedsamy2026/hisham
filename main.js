// تحميل الشاشه يبدأ 
window.addEventListener("load", function() {
    const loader = document.getElementById("preloader");
    const body = document.body;
    
    setTimeout(() => {
        loader.classList.add("loader-hidden");
        
        body.style.overflow = "auto"; 
    }, 2000); 
});
// تحميل الشاشه ينتهي




// بتاع الناف بار يبدأ

const navbar = document.querySelector(".navbar");
const bars = document.querySelector(".fa-bars");
const xmark = document.querySelector(".fa-xmark");
const humburgerMenu = document.querySelector(".humburger");

humburgerMenu.addEventListener("click", () => {
  bars.classList.toggle("active");
  xmark.classList.toggle("active");
  navbar.classList.toggle("active");
});

// دي عشان تقفل  المنيو
document.querySelectorAll(".navbar ul li a").forEach((link) => {
  link.addEventListener("click", () => {
    navbar.classList.remove("active");
    bars.classList.add("active");
    xmark.classList.remove("active");
  });
});

// بتاع الناف بار ينتهي



// ==========================================
// الوضع الليلي/النهاري مع تغيير اللوجو يبدأ
// ==========================================



(function() {
  const KEY = 'mode';
  const body = document.body;
  const toggle = document.getElementById('toggle');
  const circle = document.getElementById('circle');

  // 1. استرجاع الوضع المحفوظ أو استخدام الفاتح كافتراضي
  const savedMode = localStorage.getItem(KEY) || 'light-mode';
  body.classList.add(savedMode);
  updateUI(savedMode === 'dark-mode');

  // 2. وظيفة التبديل
  function toggleMode() {
    const isDark = body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode', !isDark);
    
    localStorage.setItem(KEY, isDark ? 'dark-mode' : 'light-mode');
    updateUI(isDark);
  }

// 3. تحديث شكل الزر والنص فقط
function updateUI(isDark) {
  if (isDark) {
    // لما يكون المود غامق، حط أيقونة الهلال اللي إنت اخترتها
    circle.innerHTML = '<i class="fa-solid fa-moon fa-flip-horizontal" style="color: rgb(255, 255, 255);"></i>';
  } else {
    // لما يكون المود فاتح، رجع الشمس (أو أي أيقونة تانية)
    circle.innerHTML = '☀️'; 
  }
  
  toggle.setAttribute('aria-pressed', isDark);
}

  // 4. الأحداث (الضغط بالكيبورد أو الماوس)
  toggle.addEventListener('click', toggleMode);
  toggle.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleMode();
    }
  });
})();


// ==========================================
//  الوضع الليلي/النهاري مع تغيير اللوجو انتهي
// ==========================================



// عشان ابدل صوره مكان صوره في قسم الاسكلز يبدأ

const observer = new MutationObserver(() => {
    const isDark = document.body.classList.contains('dark') || 
                   document.body.getAttribute('data-theme') === 'dark' ||
                   document.body.classList.contains('dark-mode');

    const lightImg = document.querySelector('.logo-light');
    const darkImg = document.querySelector('.logo-dark');

    if (lightImg && darkImg) {
        if (isDark) {
            lightImg.style.display = 'none';
            darkImg.style.display = 'block';
        } else {
            lightImg.style.display = 'block';
            darkImg.style.display = 'none';
        }
    }
});

observer.observe(document.body, { attributes: true, attributeFilter: ['class', 'data-theme'] });

window.addEventListener('load', () => {
    document.body.dispatchEvent(new Event('change')); // تحفيز المراقبة
});

// عشان ابدل صوره مكان صوره في قسم الاسكلز ينتهي




// مكتبه الانميشن Aos

AOS.init({
    duration: 4000, // مدة الحركة (ثانية واحدة)
    once: true,     // الحركة تحصل مرة واحدة بس وأنت نازل
  });