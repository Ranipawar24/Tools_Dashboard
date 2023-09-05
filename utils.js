function isAuthenticate() {
  const userDetails = JSON.parse(localStorage.getItem("userDetails"));
  if (!userDetails?.password || !userDetails?.email) {
    window.location.pathname = "/index.html";
  } else {
    window.location.pathname = "./dashboard.html";
  }
}

export default isAuthenticate;
