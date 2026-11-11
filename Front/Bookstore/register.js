const registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const surname = document.getElementById("surname").value;
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const email = document.getElementById("email").value;

  try {
    const res = await fetch("http://localhost:4000/users/signUp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        surname,
        username,
        email,
        password,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      console.log("error oh no", data);
      return;
    }

    window.location.href = "login.html";
  } catch (error) {
    console.error(error);
  }
});
