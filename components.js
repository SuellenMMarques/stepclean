//header
const header = `
    <header>

        <div class="logo-btn-container">
            <a href="index.html">
                <img src="./assets/Logo StepClean.png" alt="Logo StepClean" class="logo-header">
            </a>
            <button class="mobile-menu-btn" aria-label="Abrir menu">
                <img src="./assets/icon-menu.png" alt="Icon Menu" class="icon-menu">
                <img src="./assets/icon-close.png" alt="Icon Close" class="icon-close">
            </button>
        </div>

        <nav>

            <ul class="nav-links">
                <li><a href="./index.html" class="link">HOME</a></li>
                <li><a href="./services.html" class="link">SERVIÇOS</a></li>
                <li><a href="./how-works.html" class="link">COMO FUNCIONA</a></li>
                <li><a href="./gallery.html" class="link">GALERIA</a></li>
                <li><a href="./faq.html" class="link">FAQ</a></li>
                <li><a href="./contact.html" class="link">CONTATO</a></li>
                <li><a href="./contact.html" class="btn-primary">AGENDAR AGORA</a></li>
            </ul>

        </nav>

    </header>
    `;

//footer

const footer = `
    <footer>

        <div class="hero-footer-wrapper">

            <div class="text-logo-container">
                <a href="./index.html">
                    <img src="./assets/Logo StepClean - Para fundo escuro.png" alt="Logo StepClean">
                </a>
                <p>Lavanderia especializada em tênis. <br>Limpeza profissional com diagnóstico individual para cada par.</p>
            </div>

            <div class="container-links-footer">
                <a href="./services.html">Serviços</a>
                <a href="./how-works.html">Como funciona</a>
                <a href="./gallery.html">Galeria</a>
                <a href="./faq.html">FAQ</a>
                <a href="./contact.html">Contato</a>
            </div>

            <div class="wrapper-contact-social-media">

                <div class="container-contact">
                    <p>Rua Domingos Rodrigues do Prado, 99
                        <br>Vila Edmundo - Taubaté, SP</p>
                    <p>(12) 988881170</p>
                    <p>contato@stepclean.com.br</p>
                </div>
            
                <div class="container-social-media">
                    <a href="https://api.whatsapp.com/send/?phone=5512988881170" target="_blank"
                        rel="noopener noreferrer"><img src="./assets/icon-whats.png" alt="Icon WhatsApp"></a>
                    <a href="https://www.instagram.com/stepcleantaubate/" target="_blank" rel="noopener noreferrer"><img src="./assets/icon-insta.png" alt="Icon Instagram"></a>
                </div>

            </div>

        </div>

        <div class="straight"></div>

        <p>© 2026 StepClean Taubaté. Todos os direitos reservados.</p>

    </footer>`;

//Colocando header e footer na pagina
document.addEventListener('DOMContentLoaded', () => {
    document.body.insertAdjacentHTML('afterbegin', header);
    document.body.insertAdjacentHTML('beforeend', footer);
});