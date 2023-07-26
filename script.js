document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".key");
    
    function playSound(event) {
      const key = event.type === "click" ? event.target.dataset.key : event.keyCode;
      const audio = document.querySelector(`audio[data-key="${key}"]`);
      const button = document.querySelector(`button[data-key="${key}"]`);
      
      if (!audio) return; // Exit if there's no corresponding audio element
      audio.currentTime = 0; // Rewind the audio to the beginning
      audio.play();
      
      if (event.type === "keydown") {
        button.classList.add("playing");
      }
    }
    
    function removeTransition(event) {
      if (event.propertyName !== "transform") return;
      this.classList.remove("playing");
    }
    
    buttons.forEach((button) => {
      button.addEventListener("click", playSound);
      button.addEventListener("transitionend", removeTransition);
    });
    
    window.addEventListener("keydown", playSound);
  });