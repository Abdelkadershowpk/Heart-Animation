const scene = document.getElementById("scene");
const heartText = document.getElementById("heartText");


/* =========================
   إنشاء كلمات القلب
========================= */

const totalWords = 180;

const heartWidth = 600;
const heartHeight = 600;

for (let i = 0; i < totalWords; i++) {

    const word = document.createElement("div");

    word.className = "heartWord";

    word.textContent = "I love you";


    const t =
        (Math.PI * 2 * i) /
        totalWords;


    const x =
        16 * Math.pow(Math.sin(t), 3);


    const y =
        13 * Math.cos(t)
        - 5 * Math.cos(2 * t)
        - 2 * Math.cos(3 * t)
        - Math.cos(4 * t);


    const scale = 16;


    const posX =
        (heartWidth / 2) +
        (x * scale);


    const posY =
        (heartHeight / 2) -
        (y * scale);


    word.style.left =
        posX + "px";


    word.style.top =
        posY + "px";


    word.style.transform =
        "translate(-50%, -50%) rotate(" +
        (t * 180 / Math.PI - 90) +
        "deg)";


    word.style.animationDelay =
        (i * 0.01) + "s";


    heartText.appendChild(word);
}


/* =========================
   إنشاء الأضواء
========================= */

const numberOfLights = 45;

for (let i = 0; i < numberOfLights; i++) {

    const light = document.createElement("div");

    light.className = "light";


    /*
        توزيع الأضواء
        حول كامل الشاشة
    */

    const x =
        50 + (Math.random() * 70 - 35);

    const y =
        50 + (Math.random() * 70 - 35);


    light.style.left =
        x + "%";

    light.style.top =
        y + "%";


    /*
        اتجاه حركة الضوء
    */

    const moveX =
        (Math.random() * 160 - 80) + "px";

    const moveY =
        (Math.random() * 160 - 80) + "px";


    light.style.setProperty(
        "--moveX",
        moveX
    );


    light.style.setProperty(
        "--moveY",
        moveY
    );


    /*
        سرعة مختلفة لكل ضوء
    */

    const duration =
        (3 + Math.random() * 5) + "s";


    light.style.setProperty(
        "--duration",
        duration
    );


    /*
        اختلاف الحجم
    */

    const size =
        3 + Math.random() * 6;


    light.style.width =
        size + "px";

    light.style.height =
        size + "px";


    /*
        تأخير عشوائي
    */

    light.style.animationDelay =
        (-Math.random() * 5) + "s";


    scene.appendChild(light);
}


/* =========================
   بدء المشهد
========================= */

scene.classList.add("show-heart");


/* =========================
   الحركة المستمرة
========================= */

function startAnimation() {

    /*
        القلب
    */

    scene.classList.remove("show-rose");

    scene.classList.add("show-heart");


    /*
        بعد 5 ثوانٍ:
        الوردة
    */

    setTimeout(() => {

        scene.classList.remove("show-heart");

        scene.classList.add("show-rose");

    }, 5000);


    /*
        بعد 10 ثوانٍ:
        العودة للقلب
    */

    setTimeout(() => {

        startAnimation();

    }, 10000);
}


/* تشغيل */

setTimeout(() => {

    startAnimation();

}, 100);