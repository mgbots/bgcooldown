document.getElementById('cooldown-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const cooldownSeconds = parseInt(document.getElementById('cooldown_seconds').value);
    
    const now = Math.floor(Date.now() / 1000); // Current Unix time
    const cooldownVariable = `{solve_equation[{time_now_unix}+${cooldownSeconds}]}`;
    
    // Display only the variable
    document.getElementById('result-text').innerText = cooldownVariable;
    
    // Button click effect
    const button = event.target.querySelector('button');
    button.style.backgroundColor = '#00ff00'; // Green
    setTimeout(() => {
        button.style.backgroundColor = '#333'; // Black
    }, 1500); // 1.5 seconds
});
