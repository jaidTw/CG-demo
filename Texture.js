var BlkType = Object.freeze({0 : "Brick", 1 : "Dirt", 2 : "Grass"})
var TexturePackName = "Default"
var textureTypes = 2
var TextureType = {}

function initTextures(packName) {
    TexturePackName = packName
    for(var i = 0; i < textureTypes; ++i) {
        TextureType[i] = new Texture(i)
    }
}

function Texture(type) {
    this.image = new Image()
    if(BlkType[type] == "Brick")
        this.image.src = "Textures/" + TexturePackName + "/blocks/brick.png"
    else if(BlkType[type] == "Dirt")
        this.image.src = "Textures/" + TexturePackName + "/blocks/dirt.png"
    else if(BlkType[type] == "Grass")
        ;
    this.texture = gl.createTexture()
}

Texture.prototype.reload = function() {
    gl.bindTexture(gl.TEXTURE_2D, this.texture)
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true)
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, this.image)
    gl.generateMipmap(gl.TEXTURE_2D)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST_MIPMAP_LINEAR)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST)
    gl.uniform1i(gl.getUniformLocation(program, "texture"), 0)
}