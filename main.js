const ENABLE_ARROW_SCALING = false;
setTimeout(function () {
    var container = document.getElementById("scrollableContainer");
    var scrollDistance = 200; // Adjust the scroll distance as needed
    var scrollSpeed = 2; // Adjust the scroll speed as needed
    var scrollInterval;
    // console.log("ScrollWidth: "+container.scrollWidth);
    // console.log("offSetWidth: "+container.offsetWidth);
    function scrollToEnd() {
        container.scrollLeft += scrollSpeed;
        // console.log("Scrolling to end: ",container.scrollLeft," check ",container.scrollWidth - container.offsetWidth-1);
        if (container.scrollLeft >= container.scrollWidth - container.offsetWidth - 1) {
            clearInterval(scrollInterval);
            // console.log("called scrollToStart");
            setTimeout(scrollToStart, 500); // Delay before scrolling back to start
        }
    }

    function scrollToStart() {
        scrollInterval = setInterval(scrollToBeginning, 10); // Adjust the scrolling speed as needed
    }

    function scrollFromStart() {
        scrollInterval = setInterval(scrollToEnd, 10); // Adjust the scrolling speed as needed
    }

    function scrollToBeginning() {
        // console.log("Scrolling to start");
        container.scrollLeft -= scrollSpeed;
        if (container.scrollLeft <= 0) {
            clearInterval(scrollInterval);
            // scrollInterval = setInterval(scrollToEnd, 10)
            setTimeout(scrollFromStart, 500);
        }
    }

    scrollFromStart();       //To be started for movement of skills div

    // scrollInterval = setInterval(scrollToEnd, 10); // Adjust the scrolling speed as needed
}, 1000);

var arrows = document.querySelectorAll(".arrow");
var text = document.getElementById("present")
var index = 0;
var changeImageInterval;

//needsToBeChecked
// var targetDiv = document.getElementById("ExperienceMain");

// var options = {
//     root: null, // Use the viewport as the root
//     rootMargin: "0px", // No margin around the viewport
//     threshold: 0.5 // Trigger when at least 50% of the target is visible
// };

// function handleIntersection(entries, observer) {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             // Start the image changing process
//             Reset();
//         } else {
//             // Stop the image changing process
//             clearInterval(changeImageInterval);
//         }
//     });
// }

// var observer = new IntersectionObserver(handleIntersection, options);

// // Observe the target div
// observer.observe(targetDiv);

function ChangeImages() {
    if (index == 0) {
        ChangeStyle(text, "white", "normal", 1);
    }
    for (var i = 0; i < arrows.length / 2; i++) {
        if (ENABLE_ARROW_SCALING){
            arrows[i].style.transform = index == i ? 'scale(3)' : 'scale(1)';
        }
        arrows[i].src = index == i ? "arrowCopy.png" : "arrow.png";
    }
    index++;
    if (index > (arrows.length / 2) - 1) {
        ChangeStyle(text, "lightgreen", "bolder", 1.1);
        clearInterval(changeImageInterval)
        if (ENABLE_ARROW_SCALING){
            for (var i = 0; i < arrows.length / 2; i++) {
                arrows[i].style.transform = 'scale(1)';
            }
        }
        setTimeout(() => {
            Reset();
        }, 700);
        index = 0
    }
}
// Reset();

function ChangeStyle(object, color, weight, scale = 1) {
    // object.style.scale = scale;
    object.style.transform = `scale(${scale})`;
    object.style.color = color;
    object.style.fontWeight = weight;
}
function Reset() {
    // console.log("ResetCalled!!");
    changeImageInterval = setInterval(ChangeImages, 300);
}
Reset();

// const arrows = document.querySelectorAll('.arrow');
// arrows.forEach((arrow, index) => {
//     arrow.style.animation = 'none';
//     arrow.offsetHeight; /* Trigger reflow */
//     arrow.style.animation = null;
// });

// // Set the image sources
// const imageSources = ["arrowCopy1.png", "arrowCopy2.png", "arrowCopy3.png", "arrowCopy4.png", "arrowCopy5.png"];
// let currentIndex = 0;

// function changeImagesSequentially() {
//     arrows.forEach((arrow, index) => {
//         // Change the src attribute of the current img element
//         arrow.src = imageSources[(currentIndex + index) % imageSources.length];
//     });
//     // Increment currentIndex
//     currentIndex = (currentIndex + 1) % imageSources.length;
// }

// // Call the function initially
// changeImagesSequentially();

// // Set interval to call the function every second (for example)
// const intervalId = setInterval(changeImagesSequentially, 1000);


// <!-- For Small devices popUp -->

function showPopup() {
    var width = window.innerWidth;
    if (width < 768) {
        document.getElementById("smallDevicePopup").style.display = "block";
        document.body.classList.add('popUpOpen');
    }
}

// function closePopup() {
//     document.getElementById("smallDevicePopup").style.display = "none";
// }

window.onload = showPopup;
