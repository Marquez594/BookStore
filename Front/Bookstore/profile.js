async function getProfile() {
  try {
    const res = await fetch("http://localhost:4000/users/getProfile", {
      method: "GET",
      credentials: "include",
    });

    const data = await res.json();
    console.log(data);

    document.getElementById("user_name").textContent =
      `${data.profile.first_name} ${data.profile.last_name}`;

    document.getElementById("user_handle").textContent =
      `@${data.profile.username}`;

    document.getElementById("initials").textContent =
      `${data.profile.first_name.charAt(0)}${data.profile.last_name.charAt(0)}`;

    document.getElementById("review_number").textContent =
      `${data.reviewNumber}`;
  } catch (error) {
    console.error(error);
  }
}

async function signOut() {
  try {
    const res = await fetch("http://localhost:4000/users/logout", {
      method: "POST",
      credentials: "include",
    });
    const data = await res.json();
    if (!res.ok) {
      return;
    }
    if (data.success == true) {
      window.location.href = "index.html";
    }
  } catch (error) {
    console.error(error);
  }
}

document.getElementById("signOut").addEventListener("click", signOut);

getProfile();
