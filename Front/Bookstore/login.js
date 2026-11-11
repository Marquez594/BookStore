const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  try {
    const res = await fetch("http://localhost:4000/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();

    if (!res.ok) {
      document.getElementById("loginError").textContent =
        data.message || "Login failed";
      return;
    }

    window.location.href = "index.html";
  } catch (error) {
    console.error(error);
  }
});
