// Load components
function loadComponents() {
    const components = [
        { id: 'header-container', file: 'components/header.html' },
        { id: 'hero-container', file: 'components/hero.html' },
        { id: 'how-it-works-container', file: 'components/how-it-works.html' },
        { id: 'products-container', file: 'components/products.html' },
        { id: 'footer-container', file: 'components/footer.html' },
        { id: 'modal-container', file: 'components/modal.html' }
    ];

    components.forEach(component => {
        fetch(component.file)
            .then(response => response.text())
            .then(html => {
                document.getElementById(component.id).innerHTML = html;
            })
            .catch(error => console.error(`Error loading ${component.file}:`, error));
    });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    loadComponents();
});