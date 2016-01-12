function left() {
    var rpos = pos
    pos = add(pos, sMul(moveFactor, faceNormal))
    if(hasBlk([Math.ceil(pos[0]), Math.ceil(pos[1] + 1), Math.ceil(pos[2])]))
        pos = rpos
}

function right() {
    var rpos = pos
    pos = subtract(pos, sMul(moveFactor, faceNormal))
    if(hasBlk([Math.ceil(pos[0]), Math.ceil(pos[1] + 1), Math.ceil(pos[2])]))
        pos = rpos
}

function foward() {
    var rpos = pos
    pos = add(pos, sMul(moveFactor, faceVec))
    if(hasBlk([Math.ceil(pos[0]), Math.ceil(pos[1] + 1), Math.ceil(pos[2])]))
        pos = rpos
}

function backward() {
    var rpos = pos
    pos = subtract(pos, sMul(moveFactor, faceVec))
    if(hasBlk([Math.ceil(pos[0]), Math.ceil(pos[1] + 1), Math.ceil(pos[2])]))
        pos = rpos
}

function jump() {
    if(falling)
        return
    falling = true
    Accel = 50
    JID = setInterval(_jump, 40)
}

function _jump() {
    if(Accel < 1e-10) {
        clearInterval(JID)
        Accel = 0
    }
    Accel *= 0.001
}


function keyDown(e) {
    if (e.keyCode == "87") { foward() } // W
    else if (e.keyCode == "65") { left() } // A
    else if (e.keyCode == "83") { backward() } // S
    else if (e.keyCode == "68") { right() } // D
    else if (e.keyCode == "32") { jump() } // D
}

function handleMouseMove(event) {
    var movementX = event.movementX || event.mozMovementX || 0,
        movementY = event.movementY || event.mozMovementY || 0
    document.getElementById("movementX").innerHTML = movementX
    document.getElementById("movementY").innerHTML = movementY

    faceVec = multMatVec(rotateXZ3(movementX/10), faceVec)
    faceNormal = multMatVec(rotateXZ3(-90), faceVec)
}

// This will only used for debugging
function handleWheel(event) {
    document.getElementById("wheelDeltaX").innerHTML = event.deltaX
    document.getElementById("wheelDeltaY").innerHTML = event.deltaY
    pers += event.deltaY
}

function enbaleGravity() {
    velocity = 0
    gravAccel = -9.8
    gravEID = setInterval(fall, 50)
}

function disableGravity() {
    velocity = 0
    clearInterval(gravEID)
}

function fall() {
    velocity += 0.01 * (gravAccel + Accel) - 0.001 * velocity
    newz = pos[1] + velocity
    if(hasBlk([Math.ceil(pos[0]), Math.ceil(newz), Math.ceil(pos[2])])) {
        pos[1] = Math.ceil(newz)
        velocity = 0
        falling = false
    }
    else {
        falling = true
        pos[1] = newz
    }
}

function hasBlk(hpos) {
    return map.map[hpos]
}