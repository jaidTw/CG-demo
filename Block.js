function Block(type, pos) {
    this.type = type
    this.pos = vec4(pos[0], pos[1], pos[2], 0)
    this.pointsArray = []
    this.colorsArray = []
    this.normalsArray = []
    this.texCoordsArray = []
    this.reload()
}

Block.vertexColors = [
    vec4(1.0, 1.0, 1.0, 1.0), vec4(1.0, 1.0, 1.0, 1.0),
    vec4(1.0, 1.0, 1.0, 1.0), vec4(1.0, 1.0, 1.0, 1.0),
    vec4(1.0, 1.0, 1.0, 1.0), vec4(1.0, 1.0, 1.0, 1.0),
    vec4(1.0, 1.0, 1.0, 1.0), vec4(1.0, 1.0, 1.0, 1.0)
]

Block.texCoord = [vec2(0, 0), vec2(0, 1), vec2(1, 1), vec2(1, 0)]

Block.prototype.reload = function() {
    this.pointsArray = []
    this.colorsArray = []
    this.normalsArray = []
    this.texCoordsArray = []
    this.vertices = [
        add(this.pos, vec4(-1, -1,  0, 1)), add(this.pos, vec4(-1,  0,  0, 1)),
        add(this.pos, vec4( 0,  0,  0, 1)), add(this.pos, vec4( 0, -1,  0, 1)),
        add(this.pos, vec4(-1, -1, -1, 1)), add(this.pos, vec4(-1,  0, -1, 1)),
        add(this.pos, vec4( 0,  0, -1, 1)), add(this.pos, vec4( 0, -1, -1, 1))
    ]

    this._draw_quad(1, 0, 3, 2)
    this._draw_quad(2, 3, 7, 6)
    this._draw_quad(3, 0, 4, 7)
    this._draw_quad(6, 5, 1, 2)
    this._draw_quad(4, 5, 6, 7)
    this._draw_quad(5, 4, 0, 1)
}

Block.prototype._draw_quad = function (pA, pB, pC, pD) {
    var t1 = subtract(this.vertices[pB], this.vertices[pA])
    var t2 = subtract(this.vertices[pC], this.vertices[pB])
    var normal = cross(t1, t2)  // cross returns vec3
    var normal = vec4(normal)
    normal = normalize(normal)

    this.pointsArray.push(this.vertices[pA])
    this.colorsArray.push(Block.vertexColors[pA])
    this.normalsArray.push(normal)
    this.texCoordsArray.push(Block.texCoord[0])
    this.pointsArray.push(this.vertices[pB])
    this.colorsArray.push(Block.vertexColors[pB])
    this.normalsArray.push(normal)
    this.texCoordsArray.push(Block.texCoord[1])
    this.pointsArray.push(this.vertices[pC])
    this.colorsArray.push(Block.vertexColors[pC])
    this.normalsArray.push(normal)
    this.texCoordsArray.push(Block.texCoord[2])

    this.pointsArray.push(this.vertices[pA])
    this.colorsArray.push(Block.vertexColors[pA])
    this.normalsArray.push(normal)
    this.texCoordsArray.push(Block.texCoord[0])
    this.pointsArray.push(this.vertices[pC])
    this.colorsArray.push(Block.vertexColors[pC])
    this.normalsArray.push(normal)
    this.texCoordsArray.push(Block.texCoord[2])
    this.pointsArray.push(this.vertices[pD])
    this.colorsArray.push(Block.vertexColors[pD])
    this.normalsArray.push(normal)
    this.texCoordsArray.push(Block.texCoord[3])
}

Block.prototype.draw = function() {
    gl.bindBuffer(gl.ARRAY_BUFFER, vBuffer)
    gl.bufferData(gl.ARRAY_BUFFER, flatten(this.pointsArray), gl.STATIC_DRAW)
    gl.vertexAttribPointer(vPosition, 4, gl.FLOAT, false, 0, 0)
    gl.enableVertexAttribArray(vPosition)

    gl.bindBuffer(gl.ARRAY_BUFFER, cBuffer)
    gl.bufferData(gl.ARRAY_BUFFER, flatten(this.colorsArray), gl.STATIC_DRAW)
    gl.vertexAttribPointer(vColor, 4, gl.FLOAT, false, 0, 0)
    gl.enableVertexAttribArray(vColor)

    gl.bindBuffer(gl.ARRAY_BUFFER, nBuffer)
    gl.bufferData(gl.ARRAY_BUFFER, flatten(this.normalsArray), gl.STATIC_DRAW)
    gl.vertexAttribPointer(vNormal, 4, gl.FLOAT, false, 0, 0)
    gl.enableVertexAttribArray(vNormal)

    gl.bindBuffer(gl.ARRAY_BUFFER, tBuffer)
    gl.bufferData(gl.ARRAY_BUFFER, flatten(this.texCoordsArray), gl.STATIC_DRAW)
    gl.vertexAttribPointer(vTexCoord, 2, gl.FLOAT, false, 0, 0)
    gl.enableVertexAttribArray(vTexCoord)

    TextureType[this.type].reload()
}

Block.prototype.render = function() {
    gl.drawArrays(gl.TRIANGLES, 0, 36)
}