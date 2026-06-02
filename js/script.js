document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener('click', function(e) {

        e.preventDefault();

        const destino = document.querySelector(
            this.getAttribute('href')
        );

        destino.scrollIntoView({
            behavior: 'smooth'
        });

    });

});

document
.getElementById("formWhatsapp")
.addEventListener("submit", function(e){

    e.preventDefault();

    const nome =
        document.getElementById("nome").value;

    const servico =
        document.getElementById("servico").value;

    const data =
        document.getElementById("data").value;

    const obs =
        document.getElementById("obs").value;

    const mensagem =
`Olá! Gostaria de agendar um horário.

👤 Nome: ${nome}

💇 Serviço: ${servico}

📅 Data desejada: ${data}

📝 Observações:
${obs}`;

    const telefone = "85985956867";

    const url =
`https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;

    window.open(url, "_blank");

});