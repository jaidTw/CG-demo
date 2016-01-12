// webGL global vars
var gl, program, aimprogram

var pos = [0, -1, -1]
var faceVec = [0, 0, -1]
var faceNormal = multMatVec(rotateXZ3(-90), faceVec)
var upPos = [0, 1, 0]

var vBuffer, cBuffer, nBuffer, tBuffer
var vPosition, vColor, vNormal, vTexCoord
var velocity, gravAccel, gravEID, Accel = 0
var moveFactor = 0.2
var falling = false
// ModelView and Projection matrices
var modelingLoc, viewingLoc, projectionLoc

var lightPosition = vec4(0.0, 15.0, 20.0, 1.0)
var materialAmbient = vec4(0.25, 0.25, 0.25, 1.0)
var materialDiffuse = vec4(0.8, 0.8, 0.8, 1.0)
var materialSpecular = vec4(10.0, 10.0, 1.0, 1.0)
var materialShininess = 12.0

var map, lock_elem

window.onload = function init() {
    // init canvas & GL
    var canvas = document.getElementById("gl-canvas")
    gl = WebGLUtils.setupWebGL(canvas)
    if (!gl) alert("WebGL isn't available")
    gl.viewport(0, 0, canvas.width, canvas.height)
    gl.clearColor(145/255, 182/255, 253/255, 1.0)
    program = initShaders(gl, "vertex-shader", "fragment-shader")
    gl.useProgram(program)
    gl.enable(gl.DEPTH_TEST)

    // init buffers
    vBuffer = gl.createBuffer()
    cBuffer = gl.createBuffer()
    nBuffer = gl.createBuffer()
    tBuffer = gl.createBuffer()
    vPosition = gl.getAttribLocation(program, "vPosition")
    vColor = gl.getAttribLocation(program, "vColor")
    vNormal = gl.getAttribLocation(program, "vNormal")
    vTexCoord = gl.getAttribLocation(program, "vTexCoord")


	// init saders
    modelingLoc = gl.getUniformLocation(program, "modelingMatrix")
    viewingLoc = gl.getUniformLocation(program, "viewingMatrix")
    projectionLoc = gl.getUniformLocation(program, "projectionMatrix")

    gl.uniform4fv(gl.getUniformLocation(program, "lightPosition"), flatten(lightPosition))
    gl.uniform4fv(gl.getUniformLocation(program, "materialAmbient"), flatten(materialAmbient))
    gl.uniform4fv(gl.getUniformLocation(program, "materialDiffuse"), flatten(materialDiffuse))
    gl.uniform4fv(gl.getUniformLocation(program, "materialSpecular"), flatten(materialSpecular))
    gl.uniform4fv(gl.getUniformLocation(program, "eyePosition"), flatten([0, 0.5, 2, 0]))
    gl.uniform1f(gl.getUniformLocation(program, "shininess"), materialShininess)

    // register handlers
    document.addEventListener('pointerlockerror', pointerLockError, false)
    document.addEventListener('mozpointerlockerror', pointerLockError, false)
    document.addEventListener('webkitpointerlockerror', pointerLockError, false)
    document.addEventListener('pointerlockchange', pointerLockChange, false)
    document.addEventListener('mozpointerlockchange', pointerLockChange, false)
    document.addEventListener('webkitpointerlockchange', pointerLockChange, false)
    document.addEventListener('fullscreenchange', fullscreenChange, false)
    document.addEventListener('mozfullscreenchange', fullscreenChange, false)
    document.addEventListener('webkitfullscreenchange', fullscreenChange, false)
    document.addEventListener("mousemove", handleMouseMove, false)
    window.addEventListener("keydown", keyDown, false)
    document.getElementById('pLock').onclick = lockPointer
    //document.onwheel = handleWheel

    // init textures
    initTextures("Default")

    map = new Map(100, 20, 100)
    for(var x = -100; x <= 100; ++x)
        for(var z = -100; z <= 100; ++z)
            map.addBlk(new Block(1, [x, -1, z]))
    //map.addBlk(new Block(0, [0, 0, -2]))
    for(var x = -2; x <= 2; ++x)
        map.addBlk(new Block(0, [x, 0, 1]))

    enbaleGravity()
    
    render()
}

var modeling = mult(rotate(0, 1, 0, 0), mult(rotate(0, 0, 1, 0), rotate(0, 0, 0, 1)))
var projection = perspective(90, 1.0, 0.1, 100.0)

function render() {
    var eyePos = add(pos, vec3(0, 1.5, 0))
    var ceilpos = [Math.ceil(pos[0]), Math.ceil(pos[1]), Math.ceil(pos[2])]
    document.getElementById("Pos").innerHTML = pos
    document.getElementById("ceilPos").innerHTML = ceilpos
    document.getElementById("eyePos").innerHTML = eyePos
    document.getElementById("faceVec").innerHTML = faceVec

    var viewing = lookAt(eyePos, add(eyePos, faceVec), upPos)
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)
    
    gl.uniformMatrix4fv(modelingLoc, 0, flatten(modeling))
    gl.uniformMatrix4fv(viewingLoc, 0, flatten(viewing))
	gl.uniformMatrix4fv(projectionLoc, 0, flatten(projection))
    map.render(ceilpos)

    requestAnimFrame(render)
}