// Form Validation
function validateForm() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    
    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
        return false;
    }
    
    alert('Thank you for contacting us! We will get back to you shortly.');
    return true;
}

// Open modal
document.getElementById('open-modal').onclick = function() {
    document.getElementById('contact-modal').style.display = 'flex';
};

// Close modal
document.getElementById('close-modal').onclick = function() {
    document.getElementById('contact-modal').style.display = 'none';
};

// Close modal if clicked outside
window.onclick = function(event) {
    if (event.target === document.getElementById('contact-modal')) {
        document.getElementById('contact-modal').style.display = 'none';
    }
};

// Function to show the modal
function showModal(title, description) {
    document.getElementById('service-modal').style.display = 'flex';
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-description').innerText = description;
}

// Function to close the modal
function closeModal() {
    document.getElementById('service-modal').style.display = 'none';
}

// Close modal when clicking outside the modal content
window.onclick = function(event) {
    if (event.target === document.getElementById('service-modal')) {
        closeModal();
    }
}
// Function to open modal
function openModal(serviceId) {
    document.getElementById(serviceId).style.display = "block";
}

// Function to close modal
function closeModal(serviceId) {
    document.getElementById(serviceId).style.display = "none";
}

// Close modal when clicking outside the modal
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
    }
}
