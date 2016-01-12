function lockPointer() {
    lock_elem = document.getElementById("lockElem")
    // Start by going fullscreen with the element. Current implementations
    // require the element to be in fullscreen before requesting pointer
    // lock--something that will likely change in the future.
    lock_elem.requestFullscreen = lock_elem.requestFullscreen    ||
                                  lock_elem.mozRequestFullscreen ||
                                  lock_elem.mozRequestFullScreen || // Older API upper case 'S'.
                                  lock_elem.webkitRequestFullscreen
    lock_elem.requestFullscreen()
}


function pointerLockError() {
    console.log("Error while locking pointer.")
}

function fullscreenChange() {
    if(document.webkitFullscreenElement === lock_elem ||
       document.mozFullscreenElement === lock_elem ||
       document.mozFullScreenElement === lock_elem) { // Older API upper case 'S'.
        // Element is fullscreen, now we can request pointer lock
        lock_elem.requestPointerLock = lock_elem.requestPointerLock    ||
                                       lock_elem.mozRequestPointerLock ||
                                       lock_elem.webkitRequestPointerLock
        lock_elem.requestPointerLock()
    }
}

function pointerLockChange() {
    if (document.mozPointerLockElement === lock_elem ||
        document.webkitPointerLockElement === lock_elem) {
        console.log("Pointer Lock was successful.")
    }
    else {
        console.log("Pointer Lock was lost.")
    }
}
