const countdown = () => {
  const endDate = new Date("2025-05-25T09:00:00");
  const now = new Date();

  const totalSeconds = Math.floor((endDate - now) / 1000);

  if (totalSeconds <= 0) {
    document.getElementById("countdown").style.display = "none";
    document.getElementById("expiredMsg").style.display = "block";
    return;
  }

  const days = Math.floor(totalSeconds / (3600 * 24));
  const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  document.getElementById("days").innerText = String(days).padStart(2, "0");
  document.getElementById("hours").innerText = String(hours).padStart(2, "0");
  document.getElementById("minutes").innerText = String(minutes).padStart(
    2,
    "0"
  );
  document.getElementById("seconds").innerText = String(seconds).padStart(
    2,
    "0"
  );
};

countdown();
setInterval(countdown, 1000);
