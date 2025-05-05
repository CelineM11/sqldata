document.querySelector('form').addEventListener('submit', async (e) => {
    e.preventDefault();
  
    const username = document.querySelector('#username').value;
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
  
    const response = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, email, password })
    });
  
    const data = await response.json();
    alert(data.message);
  });
  