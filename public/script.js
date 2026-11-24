/* ===================================================== */
/* WHATSAPP RSVP NUMBER
   Country code + number, digits only (example: 2010xxxxxxxx)
   Leave empty to open WhatsApp without a fixed contact. */
/* ===================================================== */
const WHATSAPP_RSVP_NUMBER = '+966549778051';

/* ===================================================== */
/* MULTI LANGUAGE */
/* ===================================================== */

let currentLang = 'en';

const i18nData = {

    en: {

        langText: "عربي",

        openDoor: "Open Royal Invitation",

        heroSubtitle: "The Wedding Celebration Of",

        groom: "Ahmed",

        bride: "Eman",

        heroQuote:
            '"Together with their families, they joyfully request the pleasure of your company to celebrate their love and marriage."',

        heroDate: "Thursday, December 24, 2026",

        cdDays: "Days",

        cdHours: "Hours",

        cdMinutes: "Minutes",

        cdSeconds: "Seconds",

        storyTitle: "Our Love Story",

        storySubtitle: "Two Souls, One Journey",

        s1Date: "Spring 2022",

        s1Title: "First Glance",

        s1Desc:
            "A serendipitous encounter turned into hours of effortless conversations. Ahmed knew instantly Eman was one of a kind.",

        s2Date: "Autumn 2025",

        s2Title: "The Proposal",

        s2Desc:
            "Under a starlit shore, Ahmed popped the question. Eman happily said YES to a lifetime together!",

        s3Date: "December 24, 2026",

        s3Title: "The Royal Wedding",

        s3Desc:
            "Gathering our loved ones to celebrate the beginning of our forever story.",

        galleryTitle: "Royal Moments",

        gallerySubtitle: "Capturing Our Journey To Forever",

        eventTitle: "The Celebration Details",

        eventSubtitle: "Program & Venue Location",

        venueLabel: "Venue",

        venueName: "The Royal Palace Hotel",

        venueAddress:
            "The Grand Ballroom, Royal Boulevard, Cairo, Egypt",

        googleMapsBtn: "Google Maps",

        addCalendarBtn: "Add Calendar",

        scheduleLabel: "Schedule",

        timelineTitle: "Evening Timeline",

        t1Title: "Welcome Drinks & Reception",

        t1Desc: "Cocktails and string quartet performance.",

        t2Title: "Wedding Ceremony & Zaffe",

        t2Desc: "Processional entrance of bride and groom.",

        t3Title: "Gala Dinner",

        t3Desc:
            "Multi-course dinner buffet & wedding cake cutting.",

        dressTitle: "Dress Code",

        dressSubtitle: '"Black Tie & Royal Elegance"',

        cBlack: "Black",

        cGold: "Gold",

        cEmerald: "Emerald",

        infoTitle: "Guest Information",

        infoKids: "Adults Only Celebration",

        infoPhotos: "Unplugged Ceremony",

        infoValet: "Valet Parking Available",

        rsvpTitle: "Kindly RSVP",

        rsvpDeadline:
            "Please respond before November 1st, 2026",

        formName: "Full Name *",

        formAttendance: "Attendance *",

        formGuests: "Number of Guests",

        formNote: "Song Request / Special Note",

        optAccept: "Joyfully Accepts",

        optDecline: "Regretfully Declines",

        opt1Guest: "1 Person",

        opt2Guests: "2 Persons (+1)",

        btnSendRSVP: "Send via WhatsApp",

        successTitle: "RSVP Received!",

        successDesc:
            "Thank you! We look forward to celebrating our special day with you.",

        btnResetRSVP: "Submit Another Response",

        wishesTitle: "Blessings & Wishes",

        btnPostBlessing: "Post Blessing",

        shareBtn: "Share Invitation",

        autoScroll: "Auto-Scroll",

        speedSlow: "Slow",

        speedNormal: "Normal",

        speedFast: "Fast",

        rsvpBtn: "RSVP",

        phName: "e.g. Mr. & Mrs. Smith",

        phNote: "Suggest a song for the DJ...",

        phWishName: "Your Name",

        phWishRelation: "Relation (Optional)",

        phWishText:
            "Write your blessings for Ahmed & Eman..."

    },


    ar: {

        langText: "English",

        openDoor: "افتح الدعوة الملكية",

        heroSubtitle: "حفل زفاف",

        groom: "أحمد",

        bride: "ايمان",

        heroQuote:
            '"يتشرفان بفرط السرور بدعوة سيادتكم لمشاركتهما أجمل لحظات العمر واحتفالاً بعقد قرانهما."',

        heroDate:
            "الخميس، 24 ديسمبر 2026",

        cdDays: "يوم",

        cdHours: "ساعة",

        cdMinutes: "دقيقة",

        cdSeconds: "ثانية",

        storyTitle: "قصة حبنا",

        storySubtitle: "روحان في رحلة واحدة",

        s1Date: "ربيع 2022",

        s1Title: "اللقاء الأول",

        s1Desc:
            "لقاء بالصدفة تحول إلى ساعات من الحديث العذب. شعر أحمد منذ اللحظة الأولى بأن ايمان مميزة جداً.",

        s2Date: "خريف 2025",

        s2Title: "عرض الزواج",

        s2Desc:
            "تحت شاطئ مليء بالنجوم، طلب أحمد يدها ووافقت ايمان بكل حب لبدء حياة مشتركة!",

        s3Date: "24 ديسمبر 2026",

        s3Title: "حفل الزفاف الملكي",

        s3Desc:
            "نجمع الأحباب والأصدقاء لنحتفل سوياً ببدء قصتنا الأبدية.",

        galleryTitle: "لحظات ملكية",

        gallerySubtitle:
            "توثيق رحلتنا نحو الأبدية",

        eventTitle: "تفاصيل الاحتفال",

        eventSubtitle:
            "البرنامج وموقع القاعة",

        venueLabel: "المكان",

        venueName: "فندق القصر الملكي",

        venueAddress:
            "القاعة الكبرى، الشارع الملكي، القاهرة، مصر",

        googleMapsBtn: "خرائط جوجل",

        addCalendarBtn: "إضافة للتقويم",

        scheduleLabel: "المواعيد",

        timelineTitle: "جدول السهرة",

        t1Title:
            "المشروبات واستقبال الضيوف",

        t1Desc:
            "كوكتيل مع معزوفات كلاسيكية.",

        t2Title:
            "مراسم الزفاف والزفة",

        t2Desc:
            "دخول العروسين واستعراض الزفة.",

        t3Title:
            "عشاء جالا الفاخر",

        t3Desc:
            "بوفيه مفتوح مع تقطيع كعكة الزفاف.",

        dressTitle:
            "قواعد الزي (Dress Code)",

        dressSubtitle:
            '"بدلة رسمية وفخامة ملكية"',

        cBlack: "أسود",

        cGold: "ذهبي",

        cEmerald: "زمردي",

        infoTitle:
            "تنبيهات الهامش",

        infoKids:
            "حفل مخصص للكبار فقط",

        infoPhotos:
            "دعوة للاستمتاع بدون تصوير",

        infoValet:
            "خدمة صف السيارات متوفرة",

        rsvpTitle:
            "تأكيد الحضور",

        rsvpDeadline:
            "برجاء تأكيد الحضور قبل 1 نوفمبر 2026",

        formName:
            "الاسم بالكامل *",

        formAttendance:
            "حالة الحضور *",

        formGuests:
            "عدد الضيوف",

        formNote:
            "إهداء أغنية / ملاحظة خاصة",

        optAccept:
            "يشرفني الحضور بكل سرور",

        optDecline:
            "أعتذر عن الحضور بكل أسف",

        opt1Guest:
            "شخص واحد",

        opt2Guests:
            "شخصان (+1)",

        btnSendRSVP:
            "إرسال عبر واتساب",

        successTitle:
            "تم استلام تأكيدك!",

        successDesc:
            "شكراً لك! ننتظر بشوق مشاركتك لنا في يومنا المميز.",

        btnResetRSVP:
            "إرسال رد آخر",

        wishesTitle:
            "سجل التهاني والأمنيات",

        btnPostBlessing:
            "نشر التهنئة",

        shareBtn:
            "مشاركة الدعوة",

        autoScroll:
            "تمرير تلقائي",

        speedSlow:
            "بطيء",

        speedNormal:
            "عادي",

        speedFast:
            "سريع",

        rsvpBtn:
            "تأكيد",

        phName:
            "مثال: أ.د / أحمد و حرمه",

        phNote:
            "اقترح أغنية للـ DJ...",

        phWishName:
            "اسمك الكريم",

        phWishRelation:
            "صلة القرابة (اختياري)",

        phWishText:
            "اكتب تهنئتك المباركة لأحمد وايمان..."

    }

};


/* ===================================================== */
/* LANGUAGE TOGGLE */
/* ===================================================== */

function toggleLanguage() {

    currentLang =
        currentLang === 'en'
            ? 'ar'
            : 'en';

    const htmlRoot =
        document.getElementById('htmlRoot');

    const data =
        i18nData[currentLang];

    htmlRoot.setAttribute(
        'dir',
        currentLang === 'ar'
            ? 'rtl'
            : 'ltr'
    );

    htmlRoot.setAttribute(
        'lang',
        currentLang
    );


    document.getElementById(
        'langText'
    ).innerText =
        data.langText;


    document
        .querySelectorAll('[data-i18n]')
        .forEach(el => {

            const key =
                el.getAttribute('data-i18n');

            if (data[key]) {

                el.innerText =
                    data[key];

            }

        });


    document.getElementById(
        'inputName'
    ).placeholder =
        data.phName;


    document.getElementById(
        'inputNote'
    ).placeholder =
        data.phNote;


    document.getElementById(
        'wishAuthor'
    ).placeholder =
        data.phWishName;


    document.getElementById(
        'wishRelation'
    ).placeholder =
        data.phWishRelation;


    document.getElementById(
        'wishText'
    ).placeholder =
        data.phWishText;


    loadWishes();

}


/* ===================================================== */
/* GSAP */
/* ===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        gsap.registerPlugin(
            ScrollTrigger
        );


        gsap.timeline({
            delay: 0.2
        })

        .from(
            ".hero-badge",
            {
                duration: 1,
                y: -30,
                opacity: 0,
                ease: "back.out(1.7)"
            }
        )

        .from(
            ".hero-title",
            {
                duration: 1.4,
                scale: 0.8,
                opacity: 0,
                ease: "power4.out"
            },
            "-=0.6"
        )

        .from(
            ".hero-quote",
            {
                duration: 1,
                y: 30,
                opacity: 0,
                ease: "power3.out"
            },
            "-=0.8"
        )

        .from(
            ".hero-date",
            {
                duration: 0.8,
                y: 20,
                opacity: 0,
                ease: "power2.out"
            },
            "-=0.6"
        )

        .from(
            ".hero-countdown > div",
            {
                duration: 0.8,
                y: 40,
                opacity: 0,
                stagger: 0.15,
                ease: "back.out(1.4)"
            },
            "-=0.4"
        );


        /* Scroll Reveal */

        gsap.utils
            .toArray('.gsap-reveal')
            .forEach(element => {

                gsap.fromTo(
                    element,

                    {
                        y: 80,
                        opacity: 0
                    },

                    {
                        y: 0,
                        opacity: 1,
                        duration: 1.2,
                        ease: "power3.out",

                        scrollTrigger: {
                            trigger: element,
                            start: "top 88%",
                            toggleActions:
                                "play none none reverse"
                        }

                    }
                );

            });


        /* Gallery Parallax */

        gsap.utils
            .toArray('.gallery-item')
            .forEach(item => {

                const img =
                    item.querySelector(
                        '.gallery-img'
                    );

                gsap.to(
                    img,
                    {
                        yPercent: -15,
                        ease: "none",

                        scrollTrigger: {
                            trigger: item,
                            start: "top bottom",
                            end: "bottom top",
                            scrub: true
                        }
                    }
                );

            });


        initCardTilt();

        loadWishes();

    }
);


/* ===================================================== */
/* CARD TILT */
/* ===================================================== */

function initCardTilt() {

    const cards =
        document.querySelectorAll(
            '.glass-card'
        );


    cards.forEach(card => {

        card.addEventListener(
            'mousemove',
            e => {

                const rect =
                    card.getBoundingClientRect();

                const x =
                    e.clientX -
                    rect.left;

                const y =
                    e.clientY -
                    rect.top;


                card.style.setProperty(
                    '--mouse-x',
                    `${x}px`
                );

                card.style.setProperty(
                    '--mouse-y',
                    `${y}px`
                );


                const centerX =
                    rect.width / 2;

                const centerY =
                    rect.height / 2;


                const rotateX =
                    ((y - centerY) /
                        centerY) *
                    -8;

                const rotateY =
                    ((x - centerX) /
                        centerX) *
                    8;


                card.style.transform =
                    `perspective(1000px)
                     rotateX(${rotateX}deg)
                     rotateY(${rotateY}deg)
                     scale3d(1.02,1.02,1.02)`;

            }
        );


        card.addEventListener(
            'mouseleave',
            () => {

                card.style.transform =
                    `perspective(1000px)
                     rotateX(0deg)
                     rotateY(0deg)
                     scale3d(1,1,1)`;

            }
        );

    });

}


/* ===================================================== */
/* VIDEO ENTRANCE */
/* ===================================================== */

const entranceVideo =
    document.getElementById(
        'entranceVideo'
    );

const videoStartButton =
    document.getElementById(
        'videoStartButton'
    );


function startEntranceVideo() {

    if (entranceVideo) {
        entranceVideo.muted = true;
    }

    /* Hide button */
    videoStartButton.classList.add('hidden-button');

    /* Start muted video */
    entranceVideo.play()
        .then(() => {
            console.log("Entrance video started");
        })
        .catch(() => {
            videoStartButton.classList.remove('hidden-button');
        });
}


/* When video finishes */

entranceVideo.addEventListener(
    'ended',
    finishEntrance
);

/* Fallback if ended never fires (autoplay/policy quirks) */
entranceVideo.addEventListener('play', () => {
    const durationMs = Math.max(
        ((entranceVideo.duration || 8) * 1000) + 500,
        1500
    );
    setTimeout(() => {
        if (!document.getElementById('entranceOverlay')
            ?.classList.contains('finished')) {
            finishEntrance();
        }
    }, durationMs);
}, { once: true });



function finishEntrance() {
    const overlay = document.getElementById('entranceOverlay');
    const mainContent = document.getElementById('mainContent');
    const topWidgetBar = document.getElementById('topWidgetBar');

    // منع تشغيل الانتقال أكثر من مرة
    if (overlay.classList.contains('finished')) {
return;
    }

    // إخفاء شاشة الفيديو بسلاسة
    overlay.classList.add('finished');

    // Keep controls above the (invisible) overlay so language / RSVP stay clickable
    if (topWidgetBar) {
topWidgetBar.style.zIndex = '110';
    }

    // Fully remove overlay hit-target after the fade finishes
    const hideOverlay = () => {
overlay.style.display = 'none';
    };
    overlay.addEventListener('transitionend', hideOverlay, { once: true });
    setTimeout(hideOverlay, 2000);

    // إظهار الموقع بحركة ناعمة
    requestAnimationFrame(() => {
requestAnimationFrame(() => {
    mainContent.classList.add('site-visible');
});
    });

    // بدء السكرول التلقائي بعد ظهور الموقع

setTimeout(() => {
    // Recalculate animation positions after revealing the page
    if (window.ScrollTrigger) {
ScrollTrigger.refresh();
    }

    if (!isAutoScrolling) {
toggleAutoScroll();
    }
}, 3000);
}


/* ===================================================== */
/* AUTO SCROLL */
/* ===================================================== */

let isAutoScrolling = false;

let scrollSpeed = 1.5;

let scrollAnimationFrame = null;


function toggleAutoScroll() {

    isAutoScrolling =
        !isAutoScrolling;


    updateAutoScrollUI();


    if (isAutoScrolling) {

        stepAutoScroll();

    }

    else if (
        scrollAnimationFrame
    ) {

        cancelAnimationFrame(
            scrollAnimationFrame
        );

    }

}


function changeAutoScrollSpeed(
    val
) {

    scrollSpeed =
        parseFloat(val);

}


function updateAutoScrollUI() {

    const icon =
        document.getElementById(
            'autoScrollIcon'
        );

    const text =
        document.getElementById(
            'autoScrollStatusText'
        );


    if (!icon || !text)
        return;


    if (isAutoScrolling) {

        icon.className =
            "fas fa-pause text-[11px]";

        text.innerText =
            currentLang === 'ar'
                ? "إيقاف"
                : "Pause";

    }

    else {

        icon.className =
            "fas fa-play text-[11px]";

        text.innerText =
            i18nData[
                currentLang
            ].autoScroll;

    }

}


let autoScrollStartTime = null;
let lastScrollFrameTime = null;

function stepAutoScroll(timestamp) {

    if (!isAutoScrolling) {
autoScrollStartTime = null;
lastScrollFrameTime = null;
return;
    }

    // Support calls that don't receive a timestamp
    if (typeof timestamp !== "number") {
scrollAnimationFrame =
    requestAnimationFrame(stepAutoScroll);
return;
    }

    if (autoScrollStartTime === null) {
autoScrollStartTime = timestamp;
lastScrollFrameTime = timestamp;
    }

    const elapsed = timestamp - autoScrollStartTime;

    const deltaTime = Math.min(
timestamp - lastScrollFrameTime,
32
    );

    lastScrollFrameTime = timestamp;

    const currentScroll = window.scrollY;

    const maxScroll =
document.documentElement.scrollHeight -
window.innerHeight;

    if (currentScroll >= maxScroll - 2) {

autoScrollStartTime = null;
lastScrollFrameTime = null;

window.scrollTo({
    top: 0,
    behavior: "smooth"
});

setTimeout(() => {
    if (isAutoScrolling) {
        scrollAnimationFrame =
            requestAnimationFrame(stepAutoScroll);
    }
}, 2000);

return;
    }

    // Smoothly accelerate during the first 2.5 seconds
    const progress = Math.min(elapsed / 2500, 1);
    const ease = progress * progress;
    const startFactor = 0.08 + 0.92 * ease;

    const movement =
scrollSpeed * (deltaTime / 16.67) * startFactor;

    window.scrollTo({
top: currentScroll + movement,
behavior: "instant"
    });

    scrollAnimationFrame =
requestAnimationFrame(stepAutoScroll);
}

window.addEventListener('wheel', () => {
    if (isAutoScrolling) {
toggleAutoScroll();
    }
}, { passive: true });

window.addEventListener('touchmove', () => {
    if (isAutoScrolling) {
toggleAutoScroll();
    }
}, { passive: true });

/* ===================================================== */
/* PARTICLES */
/* ===================================================== */

const canvas =
    document.getElementById(
        'particlesCanvas'
    );

const ctx =
    canvas.getContext('2d');


let particles = [];

let mouseX = -1000;

let mouseY = -1000;


function resizeCanvas() {

    canvas.width =
        window.innerWidth;

    canvas.height =
        window.innerHeight;

}


window.addEventListener(
    'resize',
    resizeCanvas
);


window.addEventListener(
    'mousemove',
    e => {

        mouseX =
            e.clientX;

        mouseY =
            e.clientY;

    }
);


resizeCanvas();


class Particle {

    constructor() {

        this.reset();

    }


    reset() {

        this.x =
            Math.random() *
            canvas.width;

        this.y = -20;

        this.size =
            Math.random() *
            6 + 3;

        this.speedY =
            Math.random() *
            1.2 + 0.6;

        this.speedX =
            Math.random() *
            0.8 - 0.4;

        this.opacity =
            Math.random() *
            0.7 + 0.3;

        this.isGold =
            Math.random() > 0.4;

        this.angle =
            Math.random() *
            Math.PI * 2;

        this.spin =
            Math.random() *
            0.05 - 0.025;

    }


    update() {

        this.y +=
            this.speedY;

        this.x +=
            Math.sin(
                this.y * 0.01
            ) +
            this.speedX;

        this.angle +=
            this.spin;


        const dx =
            mouseX -
            this.x;

        const dy =
            mouseY -
            this.y;

        const dist =
            Math.sqrt(
                dx * dx +
                dy * dy
            );


        if (dist < 120) {

            this.x -=
                (dx / dist) * 2;

            this.y -=
                (dy / dist) * 2;

        }


        if (
            this.y >
            canvas.height + 20
        ) {

            this.reset();

        }

    }


    draw() {

        ctx.save();

        ctx.translate(
            this.x,
            this.y
        );

        ctx.rotate(
            this.angle
        );


        if (this.isGold) {

            ctx.fillStyle =
                `rgba(212,175,55,${this.opacity})`;

            ctx.beginPath();

            ctx.arc(
                0,
                0,
                this.size / 2,
                0,
                Math.PI * 2
            );

            ctx.fill();

        }

        else {

            ctx.fillStyle =
                `rgba(244,114,182,${this.opacity * 0.7})`;

            ctx.beginPath();

            ctx.ellipse(
                0,
                0,
                this.size * 1.2,
                this.size / 2,
                0,
                0,
                Math.PI * 2
            );

            ctx.fill();

        }


        ctx.restore();

    }

}


for (
    let i = 0;
    i < 55;
    i++
) {

    particles.push(
        new Particle()
    );

}


function animateParticles() {

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );


    particles.forEach(
        p => {

            p.update();

            p.draw();

        }
    );


    requestAnimationFrame(
        animateParticles
    );

}


animateParticles();


/* ===================================================== */
/* COUNTDOWN */
/* ===================================================== */

const targetDate =
    new Date(
        "December 24, 2026 18:00:00"
    ).getTime();


function updateCountdown() {

    const now =
        new Date().getTime();

    const diff =
        targetDate - now;


    if (diff > 0) {

        document.getElementById(
            'cd-days'
        ).innerText =
            String(
                Math.floor(
                    diff /
                    (1000 * 60 * 60 * 24)
                )
            ).padStart(
                2,
                '0'
            );


        document.getElementById(
            'cd-hours'
        ).innerText =
            String(
                Math.floor(
                    (
                        diff %
                        (1000 * 60 * 60 * 24)
                    ) /
                    (1000 * 60 * 60)
                )
            ).padStart(
                2,
                '0'
            );


        document.getElementById(
            'cd-minutes'
        ).innerText =
            String(
                Math.floor(
                    (
                        diff %
                        (1000 * 60 * 60)
                    ) /
                    (1000 * 60)
                )
            ).padStart(
                2,
                '0'
            );


        document.getElementById(
            'cd-seconds'
        ).innerText =
            String(
                Math.floor(
                    (
                        diff %
                        (1000 * 60)
                    ) /
                    1000
                )
            ).padStart(
                2,
                '0'
            );

    }

}


setInterval(
    updateCountdown,
    1000
);

updateCountdown();


/* ===================================================== */
/* RSVP */
/* ===================================================== */

function handleRSVPSubmit(e) {

    e.preventDefault();

    const name =
        document.getElementById('inputName')?.value.trim() || '';

    const attendanceSelect =
        document.getElementById('inputAttendance');

    const guestsSelect =
        document.getElementById('inputGuests');

    const note =
        document.getElementById('inputNote')?.value.trim() || '';

    const attendanceValue =
        attendanceSelect?.value || 'accepts';

    const guestsValue =
        guestsSelect?.value || '1';

    const attendanceLabel =
        attendanceSelect?.selectedOptions?.[0]?.text
        || (attendanceValue === 'accepts'
            ? (currentLang === 'ar' ? 'يشرفني الحضور بكل سرور' : 'Joyfully Accepts')
            : (currentLang === 'ar' ? 'أعتذر عن الحضور بكل أسف' : 'Regretfully Declines'));

    const guestsLabel =
        guestsSelect?.selectedOptions?.[0]?.text
        || guestsValue;

    const message = currentLang === 'ar'
        ? `تأكيد حضور زفاف أحمد وايمان 💍

الاسم: ${name}
الحضور: ${attendanceLabel}
عدد الضيوف: ${guestsLabel}
ملاحظة: ${note || 'لا يوجد'}`
        : `RSVP — Ahmed & Eman Wedding 💍

Name: ${name}
Attendance: ${attendanceLabel}
Guests: ${guestsLabel}
Note: ${note || 'None'}`;

    const encoded =
        encodeURIComponent(message);

    const phone =
        String(WHATSAPP_RSVP_NUMBER || '').replace(/\D/g, '');

    const whatsappUrl = phone
        ? `https://wa.me/${phone}?text=${encoded}`
        : `https://wa.me/?text=${encoded}`;

    const container =
        document.getElementById(
            'envelopeContainer'
        );

    container.classList.add(
        'animate-envelope-fly'
    );

    setTimeout(
        () => {

            container.classList.add(
                'hidden'
            );

            container.classList.remove(
                'animate-envelope-fly'
            );

            document
                .getElementById(
                    'rsvpSuccessBox'
                )
                .classList.remove(
                    'hidden'
                );

            window.open(whatsappUrl, '_blank');

            showToast(
                currentLang === 'ar'
                    ? "جارٍ فتح واتساب لإرسال التأكيد..."
                    : "Opening WhatsApp to send your RSVP..."
            );

        },
        900
    );

}


function resetRSVPForm() {

    document
        .getElementById(
            'rsvpForm'
        )
        .reset();


    document
        .getElementById(
            'rsvpSuccessBox'
        )
        .classList.add(
            'hidden'
        );


    document
        .getElementById(
            'envelopeContainer'
        )
        .classList.remove(
            'hidden'
        );

}


/* ===================================================== */
/* WISHES */
/* ===================================================== */

function loadWishes() {

    const wishesGrid =
        document.getElementById(
            'wishesGrid'
        );


    const savedWishes =
        JSON.parse(
            localStorage.getItem(
                'mf_wedding_wishes'
            ) || '[]'
        );


    const defaultWishes =
        currentLang === 'ar'

            ? [

                {
                    author: "يوسف وسارة",
                    relation: "أصدقاء مقربين",
                    text: "ألف مبروك لأجمل عروسين! نتمنى لكما حياة ملؤها الحب والسعادة الأبدية."
                },

                {
                    author: "الخالة ليلى",
                    relation: "العائلة",
                    text: "بارك الله لكما وبارك عليكما وجمع بينهما في خير."
                }

            ]

            : [

                {
                    author: "Youssef & Sarah",
                    relation: "Best Friends",
                    text: "Wishing you a lifetime filled with love and endless joy!"
                },

                {
                    author: "Aunt Layla",
                    relation: "Family",
                    text: "May your journey together be blessed with endless happiness."
                }

            ];


    const allWishes =
        [
            ...savedWishes,
            ...defaultWishes
        ];


    wishesGrid.innerHTML =
        allWishes
            .map(
                w => `

                <div
                    class="bg-slate-900/80 border border-amber-500/20 p-4 rounded-2xl hover:border-amber-400/40 transition-colors">

                    <div
                        class="flex items-center justify-between mb-1">

                        <span
                            class="text-amber-300 font-semibold text-sm">

                            ${escapeHTML(w.author)}

                        </span>

                        <span
                            class="text-[10px] text-slate-500 uppercase">

                            ${escapeHTML(
                                w.relation ||
                                (
                                    currentLang === 'ar'
                                        ? 'ضيف'
                                        : 'Guest'
                                )
                            )}

                        </span>

                    </div>

                    <p
                        class="text-slate-300 text-xs italic">

                        "${escapeHTML(w.text)}"

                    </p>

                </div>

            `
            )
            .join('');

}


function submitWish(e) {

    e.preventDefault();


    const author =
        document.getElementById(
            'wishAuthor'
        ).value.trim();


    const relation =
        document.getElementById(
            'wishRelation'
        ).value.trim();


    const text =
        document.getElementById(
            'wishText'
        ).value.trim();


    if (!author || !text)
        return;


    const savedWishes =
        JSON.parse(
            localStorage.getItem(
                'mf_wedding_wishes'
            ) || '[]'
        );


    savedWishes.unshift({
        author,
        relation,
        text
    });


    localStorage.setItem(
        'mf_wedding_wishes',
        JSON.stringify(
            savedWishes
        )
    );


    loadWishes();


    document.getElementById(
        'wishAuthor'
    ).value = '';


    document.getElementById(
        'wishRelation'
    ).value = '';


    document.getElementById(
        'wishText'
    ).value = '';


    showToast(
        currentLang === 'ar'
            ? "تم نشر التهنئة بنجاح!"
            : "Wish Posted Successfully!"
    );

}


/* ===================================================== */
/* TOAST */
/* ===================================================== */

function showToast(msg) {

    const toast =
        document.getElementById(
            'toast'
        );


    document.getElementById(
        'toastMsg'
    ).innerText =
        msg;


    toast.classList.remove(
        'opacity-0',
        'pointer-events-none',
        'translate-y-4'
    );


    setTimeout(
        () => {

            toast.classList.add(
                'opacity-0',
                'pointer-events-none',
                'translate-y-4'
            );

        },
        3000
    );

}


/* ===================================================== */
/* SECURITY */
/* ===================================================== */

function escapeHTML(str) {

    return str.replace(
        /[&<>'"]/g,

        tag =>
            ({
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                "'": '&#39;',
                '"': '&quot;'
            }[tag] || tag)

    );

}


/* ===================================================== */
/* WHATSAPP */
/* ===================================================== */

function shareWhatsApp() {

    const url =
        encodeURIComponent(
            window.location.href
        );


    const text =
        encodeURIComponent(
            currentLang === 'ar'

                ? "أنتم مدعوون لحضور حفل الزفاف الملكي لأحمد وايمان! 💍✨"

                : "You are invited to the Royal Wedding of Ahmed & Eman! 💍✨"
        );


    window.open(
        `https://api.whatsapp.com/send?text=${text}%20${url}`,
        '_blank'
    );

}


/* ===================================================== */
/* MAP */
/* ===================================================== */

function openMapModal() {

    document
        .getElementById(
            'mapModal'
        )
        .classList.remove(
            'hidden'
        );

}


function closeMapModal() {

    document
        .getElementById(
            'mapModal'
        )
        .classList.add(
            'hidden'
        );

}
  // Disable right-click
//   document.addEventListener("contextmenu", function (e) {
//     e.preventDefault();
//   });

  // Block common DevTools shortcuts
  document.addEventListener("keydown", function (e) {
    const key = e.key.toLowerCase();

    if (
      e.key === "F12" ||
      (e.ctrlKey && e.shiftKey && ["i", "j", "c"].includes(key)) ||
      (e.ctrlKey && key === "u") ||
      (e.ctrlKey && e.shiftKey && key === "k")
    ) {
      e.preventDefault();
      e.stopPropagation();
    }
  }, true);
