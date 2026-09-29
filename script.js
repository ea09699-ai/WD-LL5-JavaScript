// ============================================================
// 🎟 Event Welcome Center — script.js
// JavaScript Foundations · Lab 5
// ============================================================

// Support alert messages in sandboxed iframe environments
(function setupAlertNotification() {
  const originalAlert = window.alert;
  window.alert = function (message) {
    try {
      if (typeof originalAlert === "function") {
        originalAlert.call(window, message);
      }
    } catch (_) {}

    // Display toast notification in case browser suppresses modal in iframe
    let container = document.getElementById("alert-toast-container");
    if (!container) {
      container = document.createElement("div");
      container.id = "alert-toast-container";
      container.style.cssText = "position:fixed;top:20px;right:20px;z-index:9999;display:flex;flex-direction:column;gap:10px;";
      document.body.appendChild(container);
    }
    const toast = document.createElement("div");
    toast.style.cssText = "background:#162D47;color:#F0F4F8;border:1px solid #00D4FF;padding:12px 18px;border-radius:8px;font-family:'Inter',sans-serif;font-size:14px;box-shadow:0 8px 24px rgba(0,0,0,0.5);";
    toast.innerHTML = `<span style="color:#00D4FF;font-weight:700;display:block;font-size:11px;font-family:'JetBrains Mono',monospace;margin-bottom:2px;">🔔 ALERT</span>${message}`;
    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transition = "opacity 0.4s ease";
      setTimeout(() => toast.remove(), 400);
    }, 4000);
  };
})();

// ── Challenge 1: Event Information ──────────────────────────

let eventName = "CodeFest";
let speakerName = "Dr. Kim";
let roomNumber = 204;
let attendeeName = "Jordan";

console.log(eventName);
console.log(speakerName);
console.log(roomNumber);
console.log(attendeeName);


// ── Challenge 2: Personalized Greetings ─────────────────────

console.log(
    "Welcome " + attendeeName + " to " + eventName + "!"
);

console.log(
    "Your session is in Room " + roomNumber + "."
);


// ── Challenge 3: Build Functions ────────────────────────────

function welcomeGuest() {
    console.log("Welcome to " + eventName);
}

function displaySessionInfo() {
    console.log("Room: " + roomNumber);
}

welcomeGuest();

displaySessionInfo();


// ── Challenge 4: Alert Messages ─────────────────────────────

// These alerts demonstrate the alert() requirement.

alert("Welcome to " + eventName + "!");

alert("Session starts in Room " + roomNumber + ".");


// ── Challenge 5: Attendee Counter ───────────────────────────

let attendeeCount = 0;

console.log("Count: " + attendeeCount);


// ── Event Check-In ───────────────────────────────────────────

// Get elements from the HTML

let attendeeInput = document.getElementById("attendeeName");

let checkInButton = document.getElementById("checkInButton");

let greeting = document.getElementById("greeting");

let count = document.getElementById("count");

let progress = document.getElementById("progress");

let progressFill = document.getElementById("progressFill");


// Maximum number of attendees

let maxAttendees = 10;


// Check-in button

checkInButton.addEventListener("click", function () {

    // Get the name entered by the attendee

    let name = attendeeInput.value;


    // Make sure the name is not empty

    if (name === "") {

        alert("Please enter your name.");

        return;
    }


    // Increase the attendee count

    attendeeCount++;


    // Display personalized greeting

    greeting.textContent =
        "Welcome " + name + " to " + eventName + "!";


    // Update attendee count

    count.textContent =
        "Attendees checked in: " + attendeeCount;


    // Calculate progress percentage

    let percent =
        (attendeeCount / maxAttendees) * 100;


    // Keep progress from going over 100%

    if (percent > 100) {
        percent = 100;
    }


    // Display progress

    progress.textContent =
        "Check-in progress: " + percent + "%";


    // Update progress bar

    progressFill.style.width = percent + "%";


    // Clear input box

    attendeeInput.value = "";


    // Show message in console

    console.log(
        name + " has checked in."
    );

    console.log(
        "Total attendees: " + attendeeCount
    );

});


// ── Level Up 1: More Functions ──────────────────────────────

function displaySpeaker() {
    console.log("Speaker: " + speakerName);
}

function displayRoom() {
    console.log("Room: " + roomNumber);
}

function displayAgenda() {
    console.log(
        "Agenda: Welcome, Speaker Session, and Networking."
    );
}


// Call the functions

displaySpeaker();

displayRoom();

displayAgenda();


// ── Level Up 2: Multiple Attendees ──────────────────────────

let attendee1 = "Ethan";
let attendee2 = "Alex";
let attendee3 = "Jordan";

console.log("Welcome " + attendee1 + "!");
console.log("Welcome " + attendee2 + "!");
console.log("Welcome " + attendee3 + "!");


// ── Level Up 3: Mini Dashboard ──────────────────────────────

function conferenceDashboard() {

    console.log("===== Conference Dashboard =====");

    console.log("Event: " + eventName);

    console.log("Speaker: " + speakerName);

    console.log("Room: " + roomNumber);

    console.log("Attendees: " + attendeeCount);

}


// Call dashboard

conferenceDashboard();


// ── Level Up 4: Console Tools ───────────────────────────────

console.warn("Remember to check in!");

console.info("The event starts soon.");

console.table([
    {
        Name: attendee1,
        Event: eventName
    },
    {
        Name: attendee2,
        Event: eventName
    },
    {
        Name: attendee3,
        Event: eventName
    }
]);
