function Map(x, y, z) {
	this.map = []
}

Map.prototype.addBlk = function(block) {
	bpos = [block.pos[0], block.pos[1], block.pos[2]]
	this.map[bpos] = block
}

Map.prototype.render = function(ceilpos) {
	for(var x = ceilpos[0] - 10; x <= ceilpos[0] + 10; ++x)
		for(var y = ceilpos[1] - 10; y <= ceilpos[1] + 10; ++y)
			for(var z = ceilpos[2] - 10; z <= ceilpos[2] + 10; ++z)
				if(this.map[[x, y, z]]) {
					this.map[[x, y, z]].draw()
					this.map[[x, y, z]].render()
				}
}

/*
Map.prototype.reload(map) {
    for(var x = 0; x < map.length; ++x)
        for(var y = 0; y < map[0].length; ++y)
            for(var z = 0; z < map[0][0].length; ++z)
                this.blockLst.push(new Block(map[x][y][z], [x, y, z]))
}*/
