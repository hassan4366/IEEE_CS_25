document.addEventListener("DOMContentLoaded", function () {
  setTimeout(createPopup, 5000);
});

function createPopup() {
  let popup = document.createElement("div");
  popup.className = "popup";
  popup.innerHTML = `
        <div class="popup-content">
            <span class="close-btn">&times;</span>
            <p>This is a Popup Message!</p>
        </div>
    `;

  document.body.appendChild(popup);

  document.querySelector(".close-btn").addEventListener("click", function () {
    popup.remove();
  });
}

const style = document.createElement("style");
style.innerHTML = `
    .popup {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(0, 0, 0, 0.8);
        padding: 20px;
        border-radius: 8px;
        color: white;
        text-align: center;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        z-index: 1000;
    }
    .popup-content {
        position: relative;
        padding: 10px;
    }
    .close-btn {
        position: absolute;
        top: 5px;
        right: 10px;
        cursor: pointer;
        font-size: 20px;
    }
`;
document.head.appendChild(style);
