document.addEventListener('DOMContentLoaded', function() {
    const toProducts = document.getElementById('toProducts');
    const toDiscounts = document.getElementById('toDiscounts');
    const toContacts = document.getElementById('toContacts');
    const toFeedback = document.getElementById('toFeedback');

    if (toProducts) {
        toProducts.addEventListener('click', function() {
            document.getElementById('product').scrollIntoView({ behavior: 'smooth' });
        });
    }

    if (toDiscounts) {
        toDiscounts.addEventListener('click', function() {
            document.getElementById('skidka').scrollIntoView({ behavior: 'smooth' });
        });
    }

    if (toContacts) {
        toContacts.addEventListener('click', function() {
            document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
        });
    }

    if (toFeedback) {
        toFeedback.addEventListener('click', function() {
            document.getElementById('feedback').scrollIntoView({ behavior: 'smooth' });
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const responseMessage = document.getElementById('responseMessage');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Предотвращаем стандартное поведение формы

        // Отображаем сообщение
        responseMessage.textContent = "Спасибо за понимание, ваше обращение было отправлено";
        
        // Убираем сообщение через 4 секунд
        setTimeout(function() {
            responseMessage.textContent = ""; // Очищаем текст сообщения
        }, 4000); // 4000 миллисекунд = 4 секунд

        // Очищаем форму (по желанию)
        contactForm.reset();
    });
});