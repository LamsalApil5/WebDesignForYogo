
window.onscroll = function () {
    var header = document.querySelector(".relative");
    var stickyClass = "fixed top-4 inset-x-0 z-30";
    if (window.pageYOffset > 100) { // Adjust based on when to trigger the fixed header
        header.classList.add(stickyClass);
    } else {
        header.classList.remove(stickyClass);
    }
};

        // Mobile Navigation Toggle
        const menuToggle = document.getElementById('menuToggle');
        const mobileMenu = document.getElementById('mobileMenu');

        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        flatpickr("#date-picker", {
     mode: "range", // Allows selecting a range of dates
    dateFormat: "Y-m-d", // Customize the date format
    showMonths: 2, // Show two months for easier navigation
    altInput: true, // Show a nicer, human-readable input
    altFormat: "F j, Y", // Format for the alternative input field
    minDate: "today", // Disable past dates
    onOpen: function(selectedDates, dateStr, instance) {
      // Set a high z-index for the calendar popup
      instance.calendarContainer.style.zIndex = "10000";
    }
  });
       

   // JavaScript to handle slider navigation
   const slider = document.getElementById('cardSlider');
   const prevBtn = document.getElementById('prevBtn');
   const nextBtn = document.getElementById('nextBtn');
   
   let scrollAmount = 0;
   const maxScroll = slider.scrollWidth - slider.clientWidth;
 
   // Enable/disable buttons based on scroll position
   function updateButtons() {
     prevBtn.disabled = scrollAmount <= 0;
     nextBtn.disabled = scrollAmount >= maxScroll;
   }
 
   nextBtn.addEventListener('click', () => {
     const scrollWidth = slider.clientWidth; // Scroll by container width
     scrollAmount = Math.min(scrollAmount + scrollWidth, maxScroll);
     slider.style.transform = `translateX(-${scrollAmount}px)`;
     updateButtons();
   });
 
   prevBtn.addEventListener('click', () => {
     const scrollWidth = slider.clientWidth;
     scrollAmount = Math.max(scrollAmount - scrollWidth, 0);
     slider.style.transform = `translateX(-${scrollAmount}px)`;
     updateButtons();
   });