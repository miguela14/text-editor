const butInstall = document.getElementById('buttonInstall');

let deferredPrompt; // Will be used to show the install prompt later

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
  // Prevent the default behavior of the event, which is to show the install prompt
  event.preventDefault();
  // Store the event for later use
  deferredPrompt = event;
  // Show the install button on your UI or display a message to prompt the user to install
  // For example, you can show the buttonInstall element
  butInstall.style.display = 'block';
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
  if (deferredPrompt) {
    // Show the install prompt to the user
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    const result = await deferredPrompt.userChoice;
    // Reset the deferredPrompt variable for future use
    deferredPrompt = null;
    // Hide the install button after the user has responded to the prompt
    butInstall.style.display = 'none';
    // Optionally, you can track the user's choice (accepted or dismissed)
    console.log('User choice:', result.outcome); // "accepted" or "dismissed"
  }
});

// TODO: Add an event handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
  // The PWA has been successfully installed
  console.log('App installed!', event);
  // Optionally, you can perform any post-installation actions here
});