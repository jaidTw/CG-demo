var BlkType = Object.freeze({
	0 : "Brick",
	1 : "Dirt", 
	2 : "Clay",
	3 : "CoalBlock", 
	4 : "CoalOre", 
	5 : "CobbleStone",
	6 : "CobbleStoneMossy",
	7 : "DiamondBlock",
	8 : "DiamondOre",
	9 : "EmeraldBlock",
	10: "EmeraldOre",
	11: "EndStone",
	12: "Glass",
	13: "GoldBlock",
	14: "GoldOre",
	15: "Ice",
	16: "IronBlock",
	17: "IronOre",
	18: "NetherBrick",
	19: "NetherRack",
	20: "Obsidian",
	21: "RedstoneOre",
	22: "Sand",
	23: "SoulSand",
	24: "Sponge",
	25: "SpongeWet",
	26: "Stone",
	27: "StoneBrick",
	28: "PlanksAcacia",
	29: "PlanksBigOak",
	30: "PlanksBirch",
	31: "PlanksJungle",
	32: "PlanksOak",
	33: "PlanksSpruce",
	34: "GlowStone",
	35: "WoolBlack",
	36: "WoolBlue",
	37: "WoolBrown",
	38: "WoolCyan",
	39: "WoolGray",
	40: "WoolGreen",
	41: "WoolLightBlue",
	42: "WoolLime",
	43: "WoolMagenta",
	44: "WoolOrange",
	45: "WoolPink",
	46: "WoolPurple",
	47: "WoolRed",
	48: "WoolSilver",
	49: "WoolWhite",
	50: "WoolYellow",
})

var TexturePackName = "Default"
var textureTypes = 50
var TextureType = {}

function initTextures(packName) {
    TexturePackName = packName
    for(var i = 0; i <= textureTypes; ++i) {
        TextureType[i] = new Texture(i)
    }
}

function Texture(type) {
    this.image = new Image()
    if(BlkType[type] == "Brick")
        this.image.src = "Textures/" + TexturePackName + "/blocks/brick.png"
    else if(BlkType[type] == "Dirt")
        this.image.src = "Textures/" + TexturePackName + "/blocks/dirt.png"
    else if(BlkType[type] == "Clay")
        this.image.src = "Textures/" + TexturePackName + "/blocks/clay.png"
    else if(BlkType[type] == "CoalBlock")
        this.image.src = "Textures/" + TexturePackName + "/blocks/coal_block.png"
    else if(BlkType[type] == "CoalOre")
        this.image.src = "Textures/" + TexturePackName + "/blocks/coal_ore.png"
    else if(BlkType[type] == "CobbleStone")
        this.image.src = "Textures/" + TexturePackName + "/blocks/cobblestone.png"
    else if(BlkType[type] == "CobbleStoneMossy")
        this.image.src = "Textures/" + TexturePackName + "/blocks/cobblestone_mossy.png"
    else if(BlkType[type] == "DiamondBlock")
        this.image.src = "Textures/" + TexturePackName + "/blocks/diamond_block.png"
    else if(BlkType[type] == "DiamondOre")
        this.image.src = "Textures/" + TexturePackName + "/blocks/diamond_ore.png"
    else if(BlkType[type] == "EmeraldBlock")
        this.image.src = "Textures/" + TexturePackName + "/blocks/emerald_block.png"
    else if(BlkType[type] == "EmeraldOre")
        this.image.src = "Textures/" + TexturePackName + "/blocks/emerald_ore.png"
    else if(BlkType[type] == "EndStone")
        this.image.src = "Textures/" + TexturePackName + "/blocks/end_stone.png"
    else if(BlkType[type] == "Glass")
        this.image.src = "Textures/" + TexturePackName + "/blocks/glass.png"
    else if(BlkType[type] == "GoldBlock")
        this.image.src = "Textures/" + TexturePackName + "/blocks/gold_block.png"
    else if(BlkType[type] == "GoldOre")
        this.image.src = "Textures/" + TexturePackName + "/blocks/gold_ore.png"
    else if(BlkType[type] == "Ice")
        this.image.src = "Textures/" + TexturePackName + "/blocks/ice.png"
    else if(BlkType[type] == "IronBlock")
        this.image.src = "Textures/" + TexturePackName + "/blocks/iron_block.png"
    else if(BlkType[type] == "IronOre")
        this.image.src = "Textures/" + TexturePackName + "/blocks/iron_ore.png"
    else if(BlkType[type] == "NetherBrick")
        this.image.src = "Textures/" + TexturePackName + "/blocks/nether_brick.png"
    else if(BlkType[type] == "NetherRack")
        this.image.src = "Textures/" + TexturePackName + "/blocks/netherrack.png"
    else if(BlkType[type] == "Obsidian")
        this.image.src = "Textures/" + TexturePackName + "/blocks/obsidian.png"
    else if(BlkType[type] == "RedstoneOre")
        this.image.src = "Textures/" + TexturePackName + "/blocks/redstone_ore.png"
    else if(BlkType[type] == "Sand")
        this.image.src = "Textures/" + TexturePackName + "/blocks/sand.png"
    else if(BlkType[type] == "SoulSand")
        this.image.src = "Textures/" + TexturePackName + "/blocks/soul_sand.png"
    else if(BlkType[type] == "Sponge")
        this.image.src = "Textures/" + TexturePackName + "/blocks/sponge.png"
    else if(BlkType[type] == "SpongeWet")
        this.image.src = "Textures/" + TexturePackName + "/blocks/sponge_wet.png"
    else if(BlkType[type] == "Stone")
        this.image.src = "Textures/" + TexturePackName + "/blocks/stone.png"
    else if(BlkType[type] == "StoneBrick")
        this.image.src = "Textures/" + TexturePackName + "/blocks/stonebrick.png"
    else if(BlkType[type] == "PlanksAcacia")
        this.image.src = "Textures/" + TexturePackName + "/blocks/planks_acacia.png"
    else if(BlkType[type] == "PlanksBigOak")
        this.image.src = "Textures/" + TexturePackName + "/blocks/planks_big_oak.png"
    else if(BlkType[type] == "PlanksBirch")
        this.image.src = "Textures/" + TexturePackName + "/blocks/planks_birch.png"
    else if(BlkType[type] == "PlanksJungle")
        this.image.src = "Textures/" + TexturePackName + "/blocks/planks_jungle.png"
    else if(BlkType[type] == "PlanksOak")
        this.image.src = "Textures/" + TexturePackName + "/blocks/planks_oak.png"
    else if(BlkType[type] == "PlanksSpruce")
        this.image.src = "Textures/" + TexturePackName + "/blocks/planks_spruce.png"
    else if(BlkType[type] == "GlowStone")
        this.image.src = "Textures/" + TexturePackName + "/blocks/glowstone.png"
    else if(BlkType[type] == "WoolBlack")
        this.image.src = "Textures/" + TexturePackName + "/blocks/wool_colored_black.png"
    else if(BlkType[type] == "WoolBlue")
        this.image.src = "Textures/" + TexturePackName + "/blocks/wool_colored_blue.png"
    else if(BlkType[type] == "WoolBrown")
        this.image.src = "Textures/" + TexturePackName + "/blocks/wool_colored_brown.png"
    else if(BlkType[type] == "WoolCyan")
        this.image.src = "Textures/" + TexturePackName + "/blocks/wool_colored_cyan.png"
    else if(BlkType[type] == "WoolGray")
        this.image.src = "Textures/" + TexturePackName + "/blocks/wool_colored_gray.png"
    else if(BlkType[type] == "WoolGreen")
        this.image.src = "Textures/" + TexturePackName + "/blocks/wool_colored_green.png"
    else if(BlkType[type] == "WoolLightBlue")
        this.image.src = "Textures/" + TexturePackName + "/blocks/wool_colored_light_blue.png"
    else if(BlkType[type] == "WoolLime")
        this.image.src = "Textures/" + TexturePackName + "/blocks/wool_colored_lime.png"
    else if(BlkType[type] == "WoolMagenta")
        this.image.src = "Textures/" + TexturePackName + "/blocks/wool_colored_magenta.png"
    else if(BlkType[type] == "WoolOrange")
        this.image.src = "Textures/" + TexturePackName + "/blocks/wool_colored_orange.png"
    else if(BlkType[type] == "WoolPink")
        this.image.src = "Textures/" + TexturePackName + "/blocks/wool_colored_pink.png"
    else if(BlkType[type] == "WoolPurple")
        this.image.src = "Textures/" + TexturePackName + "/blocks/wool_colored_purple.png"
    else if(BlkType[type] == "WoolRed")
        this.image.src = "Textures/" + TexturePackName + "/blocks/wool_colored_red.png"
    else if(BlkType[type] == "WoolSilver")
        this.image.src = "Textures/" + TexturePackName + "/blocks/wool_colored_silver.png"
    else if(BlkType[type] == "WoolWhite")
        this.image.src = "Textures/" + TexturePackName + "/blocks/wool_colored_white.png"
    else if(BlkType[type] == "WoolYellow")
        this.image.src = "Textures/" + TexturePackName + "/blocks/wool_colored_yellow.png"
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