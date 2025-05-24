// Owl carousel initialization
var owl = $('.owl-carousel');
owl.owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
});
$('.play').on('click', function() {
    owl.trigger('play.owl.autoplay', [3000])
})
$('.stop').on('click', function() {
    owl.trigger('stop.owl.autoplay')
})

// Booking button declaration
const myButton = document.getElementById("myButton");
const downloadButton = document.getElementById("downloadButton");
const doneButton = document.getElementById("doneButton");


// Function to handle button click
myButton.onclick = function() {
    var info = [];
    var date = [];
    info.push(document.getElementById("city").value);
    info.push(document.getElementById("activities").value);
    info.push(document.getElementById("num-people").value);
    date.push(document.getElementById("start-date").value);
    date.push(document.getElementById("end-date").value);
    document.getElementById("location").innerHTML = info[0];
    document.getElementById("date").innerHTML = date[0] + " to " + date[1];
    document.getElementById("actions").innerHTML = info[1];
    document.getElementById("number-people").innerHTML = info[2];
    document.getElementById("location2").innerHTML = info[0];
    document.getElementById("date2").innerHTML = date[0] + " to " + date[1];
    document.getElementById("actions2").innerHTML = info[1];
    document.getElementById("number-people2").innerHTML = info[2];
    document.getElementById("icon").style.visibility = "visible";
    document.getElementById("icon2").style.visibility = "visible";
    document.getElementById("code").innerHTML = "#" + Math.floor(Math.random() * 1000000);
}

// Function to handle image download prompt
downloadButton.onclick = function() {
    document.getElementById("screenshot").style.display = "block";
    document.getElementById("screenshot").style.zIndex = "9999";
    document.getElementById("screenshot").style.position = "absolute";
    const screenshot = document.getElementById("screenshot");
    html2canvas(screenshot).then(canvas => {
        const link = document.createElement('a');
        link.download = "booking-confirmation.png";
        link.href = canvas.toDataURL("image/png");
        link.click();
    });
    document.getElementById("screenshot").style.display = "none";


    // Window alert to confirm booking
    alert("Your booking has been confirmed! Please check your email for the details.");
}

//Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navlinks2 = document.querySelector('.navlinks2');
const hamburgericon = document.getElementById('hamburgericon');

hamburger.addEventListener('click', () => {
    navlinks2.classList.toggle('active');
    hamburgericon.style.display = 'none';
    document.getElementById('logoblock').style.display = 'none';
});

// Close the hamburger when clicked

const close = document.querySelector('.close');
close.addEventListener('click', () => {
    navlinks2.classList.remove('active');
    hamburgericon.style.display = 'block';
    document.getElementById('logoblock').style.display = 'block';
});
