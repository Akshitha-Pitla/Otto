async function loadImages() {
    const count = parseInt(document.getElementById('imageCount').value);
    const gallery = document.getElementById('gallery');

    if (isNaN(count) || count < 1 || count > 10) {
        alert("Please enter a number between 1 and 10.");
        return;
    }

    // Clear previous images
    gallery.innerHTML = '';

    try {
        const response = await fetch(`https://picsum.photos/v2/list?page=2&limit=${count}`);
        const images = await response.json();

        images.forEach(image => {
            const div = document.createElement('div');
            div.className = 'gallery-item';
            div.innerHTML = `<img src="${image.download_url}" alt="Image by ${image.author}">`;
            gallery.appendChild(div);
        });
    } catch (error) {
        console.error('Failed to fetch images:', error);
        alert("Failed to load images.");
    }
}