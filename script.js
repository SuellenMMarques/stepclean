document.addEventListener('DOMContentLoaded', () => {

    const canvas = document.getElementById("hero-canvas");

    if (canvas) {

        const ctx = canvas.getContext("2d");

        const totalFrames = 40;
        const images = [];
        let currentFrame = 0;

        let fps = 10;
        let interval = 1000 / fps;
        let then = Date.now();

        for (let i = 1; i <= totalFrames; i++) {
            const img = new Image();
            const frameNumber = String(i).padStart(3, "0");
            img.src = `./assets/agua-frames/frame-${frameNumber}.jpg`;
            images.push(img);
        }

        function resizeCanvas() {
            const container = canvas.closest(".hero");
            canvas.width = container.offsetWidth;
            canvas.height = container.offsetHeight;
            drawFrame(currentFrame);
        }
        window.addEventListener("resize", resizeCanvas);

        resizeCanvas();

        function drawFrame(index) {
            if (images[index] && images[index].complete) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);

                const imgRatio = images[index].width / images[index].height;
                const canvasRatio = canvas.width / canvas.height;
                let drawWidth, drawHeight, x, y;

                if (canvasRatio > imgRatio) {
                    drawHeight = canvas.height;
                    drawWidth = canvas.height * imgRatio;
                    x = (canvas.width - drawWidth) / 2;
                    y = 0;
                } else {
                    drawWidth = canvas.width;
                    drawHeight = canvas.width / imgRatio;
                    x = 0;
                    y = (canvas.height - drawHeight) / 2;
                }

                ctx.drawImage(images[index], x, y, drawWidth, drawHeight);
            }
        }

        function animate() {
            requestAnimationFrame(animate);

            let now = Date.now();
            let delta = now - then;

            if (delta > interval) {
                then = now - (delta % interval);

                drawFrame(currentFrame);

                // Avança para o próximo frame ou volta para o zero (loop)
                currentFrame = (currentFrame + 1) % totalFrames;
            }
        }

        images[0].onload = () => {
            animate();
        };
    }

    // Mobile Menu
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const iconMenu = document.querySelector('.icon-menu');
    const iconClose = document.querySelector('.icon-close');

    if (mobileBtn && navLinks) {
        mobileBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');

            const menuOpen = navLinks.classList.contains('active');
            iconMenu.style.display = menuOpen ? 'none' : 'block';
            iconClose.style.display = menuOpen ? 'block' : 'none';
        });
    }

    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    if (faqItems.length > 0) {
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');

                // Fechar todos
                faqItems.forEach(faq => {
                    faq.classList.remove('active');
                    faq.querySelector('.faq-answer').style.maxHeight = null;
                });

                // Se não estava ativo, abre
                if (!isActive) {
                    item.classList.add('active');
                    const answer = item.querySelector('.faq-answer');
                    answer.style.maxHeight = answer.scrollHeight + "px";
                }
            });
        });
    }

    // Gallery Filters
    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    if (filterBtns.length > 0 && galleryItems.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {

                filterBtns.forEach(fBtn => fBtn.classList.remove('active'));
                btn.classList.add('active');

                const filterValue = btn.getAttribute('data-filter');

                galleryItems.forEach(item => {
                    if (filterValue === 'todos' || item.getAttribute('data-category') === filterValue) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }

    // Lightbox
    const lightbox = document.querySelector('.lightbox-wrapper');
    const lightboxImg = document.getElementById('lightbox-img');
    const btnCloseLightbox = document.querySelector('.lightbox-close');

    if (lightbox && galleryItems.length > 0) {
        galleryItems.forEach(item => {
            item.addEventListener('click', () => {
                const imgAfter = item.dataset.after;
                lightboxImg.src = imgAfter;
                lightbox.classList.add('active');
            });
        });

        btnCloseLightbox.addEventListener('click', () => {
            lightbox.classList.remove('active');
        });

        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                lightbox.classList.remove('active');
            }
        });
    }

    // Form Contato - WhatsApp Integration
    const contatoForm = document.getElementById('contatoForm');
    if (contatoForm) {
        contatoForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const nome = document.getElementById('nome').value;
            const telefone = document.getElementById('telefone').value;
            const servico = document.getElementById('servico').value;
            const descricao = document.getElementById('descricao').value;
            const mensagem = document.getElementById('mensagem').value;

            let wppText = `Olá StepClean! Meu nome é ${nome}. Tenho interesse no serviço de *${servico}*.`;
            if (descricao) wppText += `\n*Tênis:* ${descricao}`;
            if (mensagem) wppText += `\n*Mensagem:* ${mensagem}`;

            const wppUrl = `https://api.whatsapp.com/send/?phone=5512988881170&text=${encodeURIComponent(wppText)}`;

            window.open(wppUrl, '_blank');
        });
    }
});
