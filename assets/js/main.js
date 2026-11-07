// Tambahkan interaktivitas JavaScript di sini
console.log("Website Portofolio Siap!");

// Image Modal / Lightbox Preview
function openImageModal(src, caption) {
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-img');
    const modalCaption = document.getElementById('modal-caption');
    if (!modal || !modalImg) return;
    
    modalImg.src = src;
    if (modalCaption) {
        modalCaption.textContent = caption || '';
    }
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeImageModal() {
    const modal = document.getElementById('image-modal');
    if (!modal) return;
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

// Close modal on Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeImageModal();
    }
});

// Expose functions globally
window.openImageModal = openImageModal;
window.closeImageModal = closeImageModal;

