// Get toggle svg element
let toggle = Snap(".toggle");
var toggleDot;

console.log(toggleDot);

// Define callback onload svg
function onToggleLoaded(data) {
    toggle.append(data);

    // Get dot svg part of toggle
    toggleDot = Snap('#dot');

    // Choose night day mode with local time
    const date = new Date();
    const hour = date.getHours()
    console.log(hour);

    if (hour < 7 | hour > 18) {
      switchMode();
    }
};

// Load svg and use callback
Snap.load("static/assets/logo/toggle.svg", onToggleLoaded)
