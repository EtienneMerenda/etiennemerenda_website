// Get toggle svg element
let toggle = Snap(".toggle");
var toggleDot;

console.log(toggleDot);

// Define callback onload svg
function onToggleLoaded(data) {
    toggle.append(data);

    // Get dot svg part of toggle
    toggleDot = Snap('#dot');
};

// Load svg and use callback
Snap.load("static/assets/logo/toggle.svg", onToggleLoaded)
