import { backend } from "declarations/backend";

async function initializeCountdown() {
    try {
        const loading = document.getElementById('loading');
        
        // Target date: November 15th, 2024
        const targetDate = new Date('2024-11-15T00:00:00Z').getTime();
        
        loading.style.display = 'none';
        
        function updateCountdown() {
            const now = new Date().getTime();
            const timeLeft = targetDate - now;
            
            if (timeLeft <= 0) {
                document.querySelector('.countdown-container').innerHTML = 
                    '<div class="countdown-box" style="width: 100%"><span>We are Live!</span></div>';
                return;
            }

            // Calculate time units
            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

            // Update DOM
            document.getElementById('days').textContent = String(days).padStart(2, '0');
            document.getElementById('hours').textContent = String(hours).padStart(2, '0');
            document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
            document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
        }

        // Update countdown immediately and then every second
        updateCountdown();
        setInterval(updateCountdown, 1000);

    } catch (error) {
        console.error('Error initializing countdown:', error);
        document.getElementById('loading').innerHTML = 
            '<p class="text-danger">Error loading countdown. Please refresh the page.</p>';
    }
}

// Create matrix background effect
function createMatrixBackground() {
    const chars = "01";
    const speed = 50;
    const fontSize = 10;
    
    setInterval(() => {
        const container = document.querySelector('.matrix-bg');
        const span = document.createElement('span');
        span.style.position = 'absolute';
        span.style.left = Math.random() * 100 + '%';
        span.style.color = '#333333';
        span.style.opacity = '0.1';
        span.style.fontSize = fontSize + 'px';
        span.style.fontFamily = 'Courier New, monospace';
        span.textContent = chars[Math.floor(Math.random() * chars.length)];
        
        container.appendChild(span);
        
        let top = 0;
        const animation = setInterval(() => {
            top += 2;
            span.style.top = top + 'px';
            
            if (top > window.innerHeight) {
                clearInterval(animation);
                span.remove();
            }
        }, speed);
    }, 100);
}

initializeCountdown();
createMatrixBackground();
