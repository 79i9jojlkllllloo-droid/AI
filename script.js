// نظام الترجمة ثنائي اللغة
const translations = {
    en: {
        "nav.about": "About AI",
        "nav.how": "How It Works",
        "nav.build": "How to Build",
        "nav.future": "The Future",
        "nav.contact": "Contact Us",
        "hero.title": "Discover the Power of Artificial Intelligence",
        "hero.subtitle": "An interactive journey to understand, learn and develop AI systems",
        "hero.cta1": "Start Learning",
        "hero.cta2": "Watch Demo",
        "about.title": "What is Artificial Intelligence?",
        "about.subtitle": "Understanding the basics and key concepts",
        "about.text1": "Artificial intelligence (AI) is the simulation of human intelligence processes by machines, especially computer systems.",
        "about.text2": "Specific applications of AI include expert systems, natural language processing, speech recognition and machine vision.",
        "about.type1": "Machine Learning",
        "about.type2": "Neural Networks",
        "about.type3": "Deep Learning",
        "about.type4": "Natural Language Processing (NLP)",
        "how.title": "How AI Works?",
        "how.subtitle": "The machine learning process step by step",
        "how.step1.title": "Data Collection",
        "how.step1.text": "Data is the fuel that powers AI systems",
        "how.step2.title": "Model Building",
        "how.step2.text": "Designing appropriate machine learning algorithms for the problem",
        "how.step3.title": "Model Training",
        "how.step3.text": "Using data to teach the model how to make decisions",
        "how.step4.title": "Evaluation & Improvement",
        "how.step4.text": "Testing model accuracy and continuously improving it",
        "build.title": "How to Build an AI System?",
        "build.subtitle": "Practical guide for beginners",
        "build.step1.title": "Choose Programming Language",
        "build.step1.text": "Python is the most common in AI field",
        "build.step2.title": "Learn Key Libraries",
        "build.step2.text": "Like TensorFlow, PyTorch, scikit-learn",
        "build.step3.title": "Start with Simple Projects",
        "build.step3.text": "Like image classification or sentiment analysis",
        "future.title": "The Future of AI",
        "future.subtitle": "Upcoming expectations and challenges",
        "future.card1.title": "Smart Robots",
        "future.card1.text": "Robots will become smarter and more capable of interacting with humans",
        "future.card2.title": "Healthcare",
        "future.card2.text": "More accurate diagnosis and personalized treatments",
        "future.card3.title": "Education",
        "future.card3.text": "Customized education for each student based on needs",
        "contact.title": "Contact Us",
        "contact.subtitle": "We're here to answer your inquiries",
        "contact.name": "Name",
        "contact.email": "Email",
        "contact.message": "Your Message",
        "contact.submit": "Send Message",
        "footer.about": "A specialized website in artificial intelligence and its future applications",
        "footer.links": "Quick Links",
        "footer.social": "Follow Us",
        "footer.copyright": "© 2023 AI World. All rights reserved."
    },
    ar: {
        "nav.about": "عن الذكاء الاصطناعي",
        "nav.how": "كيف يعمل",
        "nav.build": "كيف تصنعه",
        "nav.future": "المستقبل",
        "nav.contact": "اتصل بنا",
        "hero.title": "اكتشف قوة الذكاء الاصطناعي",
        "hero.subtitle": "رحلة تفاعلية لفهم وتعلم وتطوير أنظمة الذكاء الاصطناعي",
        "hero.cta1": "ابدأ التعلم",
        "hero.cta2": "شاهد العرض",
        "about.title": "ما هو الذكاء الاصطناعي؟",
        "about.subtitle": "فهم الأساسيات والمفاهيم الرئيسية",
        "about.text1": "الذكاء الاصطناعي (AI) هو محاكاة عمليات الذكاء البشري بواسطة الآلات، وخاصة أنظمة الكمبيوتر.",
        "about.text2": "تشمل التطبيقات المحددة للذكاء الاصطناعي الأنظمة الخبيرة، ومعالجة اللغة الطبيعية، والتعرف على الصور، والرؤية الحاسوبية، والروبوتات.",
        "about.type1": "التعلم الآلي (Machine Learning)",
        "about.type2": "الشبكات العصبية (Neural Networks)",
        "about.type3": "التعلم العميق (Deep Learning)",
        "about.type4": "معالجة اللغة الطبيعية (NLP)",
        "how.title": "كيف يعمل الذكاء الاصطناعي؟",
        "how.subtitle": "عملية تعلم الآلة خطوة بخطوة",
        "how.step1.title": "جمع البيانات",
        "how.step1.text": "البيانات هي الوقود الذي يغذي أنظمة الذكاء الاصطناعي",
        "how.step2.title": "بناء النموذج",
        "how.step2.text": "تصميم خوارزميات التعلم الآلي المناسبة للمشكلة",
        "how.step3.title": "تدريب النموذج",
        "how.step3.text": "استخدام البيانات لتعليم النموذج كيفية اتخاذ القرارات",
        "how.step4.title": "التقييم والتحسين",
        "how.step4.text": "اختبار دقة النموذج وتحسينه باستمرار",
        "build.title": "كيف تصنع نظام ذكاء اصطناعي؟",
        "build.subtitle": "دليل عملي للمبتدئين",
        "build.step1.title": "اختر لغة البرمجة",
        "build.step1.text": "بايثون هي الأكثر شيوعًا في مجال الذكاء الاصطناعي",
        "build.step2.title": "تعلم المكتبات الأساسية",
        "build.step2.text": "مثل TensorFlow, PyTorch, scikit-learn",
        "build.step3.title": "ابدأ بمشاريع بسيطة",
        "build.step3.text": "مثل تصنيف الصور أو تحليل المشاعر",
        "future.title": "مستقبل الذكاء الاصطناعي",
        "future.subtitle": "التوقعات والتحديات القادمة",
        "future.card1.title": "الروبوتات الذكية",
        "future.card1.text": "ستصبح الروبوتات أكثر ذكاءً وقدرة على التفاعل مع البشر",
        "future.card2.title": "الرعاية الصحية",
        "future.card2.text": "تشخيص أكثر دقة وعلاجات شخصية",
        "future.card3.title": "التعليم",
        "future.card3.text": "تعليم مخصص لكل طالب بناءً على احتياجاته",
        "contact.title": "اتصل بنا",
        "contact.subtitle": "نحن هنا للإجابة على استفساراتك",
        "contact.name": "الاسم",
        "contact.email": "البريد الإلكتروني",
        "contact.message": "رسالتك",
        "contact.submit": "إرسال الرسالة",
        "footer.about": "موقع متخصص في الذكاء الاصطناعي وتطبيقاته المستقبلية",
        "footer.links": "روابط سريعة",
        "footer.social": "تابعنا",
        "footer.copyright": "© 2023 AI World. جميع الحقوق محفوظة."
    }
};

// تطبيق الترجمة
function updateContent(language) {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[language][key]) {
            el.textContent = translations[language][key];
        }
    });
    
    const placeholders = document.querySelectorAll('[data-i18n-placeholder]');
    placeholders.forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[language][key]) {
            el.setAttribute('placeholder', translations[language][key]);
        }
    });
    
    // تحديث زر تبديل اللغة
    const langBtn = document.getElementById('language-switcher');
    if (language === 'ar') {
        langBtn.textContent = 'EN';
    } else {
        langBtn.textContent = 'AR';
    }
}

// تبديل اللغة
document.getElementById('language-switcher').addEventListener('click', function() {
    const currentLang = document.documentElement.lang;
    const newLang = currentLang === 'ar' ? 'en' : 'ar';
    localStorage.setItem('language', newLang);
    updateContent(newLang);
    
    // إعادة رسم الرسم البياني عند تغيير اللغة
    if (window.aiChart) {
        renderAIGrowthChart();
    }
});

// تعيين اللغة المفضلة عند التحميل
document.addEventListener('DOMContentLoaded', function() {
    const savedLang = localStorage.getItem('language') || 'ar';
    updateContent(savedLang);
    
    // القائمة المتنقلة للهواتف
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        menuToggle.innerHTML = navLinks.classList.contains('active') ? 
            '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });
    
    // إغلاق القائمة عند النقر على رابط
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });
    
    // تأثير التمرير السلس
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // تأثير الظهور عند التمرير
    const observerOptions = {
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.section, .step, .future-card, .step-card').forEach(section => {
        section.classList.add('fade-in');
        observer.observe(section);
    });
    
    // الرسم البياني
    if (document.getElementById('aiGrowthChart')) {
        renderAIGrowthChart();
    }
});

// رسم بياني لنمو الذكاء الاصطناعي
function renderAIGrowthChart() {
    const ctx = document.getElementById('aiGrowthChart').getContext('2d');
    
    if (window.aiChart) {
        window.aiChart.destroy();
    }
    
    const isArabic = document.documentElement.lang === 'ar';
    
    window.aiChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: isArabic ? 
                ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'] :
                ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'],
            datasets: [{
                label: isArabic ? 'نمو سوق الذكاء الاصطناعي (مليار دولار)' : 'AI Market Growth (Billion USD)',
                data: [2.5, 4.0, 6.5, 10.2, 15.7, 22.6, 35.9, 51.3, 70.9],
                borderColor: '#2563eb',
                backgroundColor: 'rgba(37, 99, 235, 0.1)',
                borderWidth: 3,
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                    rtl: isArabic
                },
                tooltip: {
                    rtl: isArabic
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: isArabic ? 'مليار دولار' : 'Billion USD'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: isArabic ? 'السنة' : 'Year'
                    }
                }
            }
        }
    });
}