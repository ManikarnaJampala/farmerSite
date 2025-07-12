// Handle login form submission
document.getElementById('loginForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    if (!email || !password) {
        alert('Please enter both email and password');
        return;
    }

    // In a real app, you would send this to your backend
    console.log('Login attempt with:', { email, password });
    
    // For demo purposes, just redirect to home
    window.location.href = 'index.html';
});

// Handle signup form submission
document.getElementById('signupForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const fullName = document.getElementById('regFullName').value;
    const email = document.getElementById('regEmail').value;
    const phone = document.getElementById('regPhone').value;
    const password = document.getElementById('regPassword').value;
    const confirmPassword = document.getElementById('regConfirmPassword').value;

    if (!fullName || !email || !phone || !password || !confirmPassword) {
        alert('Please fill in all fields');
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }

    // In a real app, you would send this to your backend
    console.log('Signup attempt with:', { fullName, email, phone, password });
    
    // For demo purposes, just redirect to home
    window.location.href = 'index.html';
});

// Simple session check (for demo purposes)
function checkLoggedIn() {
    // In a real app, you would check for a valid session token
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn && window.location.pathname.includes('login.html')) {
        window.location.href = 'index.html';
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', checkLoggedIn);