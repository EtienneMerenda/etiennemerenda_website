// Get toggle svg element
let toggle = Snap(".toggle")

// Define callback onload svg
function onToggleLoaded(data) {
    toggle.append(data);
};

// Load svg and use callback
Snap.load("static/assets/logo/toggle.svg", onToggleLoaded)
