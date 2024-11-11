import { backend } from "declarations/backend";

async function initializeCountdown() {
    try {
        const loading = document.getElementById('loading');
        const targetDate = await backend.getTargetDate();
        const currentTime = await backend.getCurrentTime();
        
        loading.style.display = 'none';
        
        function updateCountdown() {
            const now = Date.now() * 1000000; // Convert to nanoseconds
            const timeLeft = targetDate - now;
            
            if (timeLeft <= 0) {
                document.querySelector('.countdown-container').innerHTML = '<h2>We are Live!</h2>';
                return;
            }

            // Convert nanoseconds to regular time units
            const second = 1000000000;
            const minute = second * 60;
            const hour = minute * 60;
            const day = hour * 24;

            const days = Math.floor(timeLeft / day);
            const hours = Math.floor((timeLeft % day) / hour);
            const minutes = Math.floor((timeLeft % hour) / minute);
            const seconds = Math.floor((timeLeft % minute) / second);

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
        document.getElementById('loading').innerHTML = '<p class="text-danger">Error loading countdown. Please refresh the page.</p>';
    }
}

initializeCountdown();
