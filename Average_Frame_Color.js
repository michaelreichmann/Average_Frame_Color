var testMat = new JitterMatrix("inputMat");
var frameMat = new JitterMatrix("outputMat");

inlets = 2;

var frames;
declareattribute("frames");


//get frame number in
function getFrameColor(fcount) 
{
	var r = 0;
	var g = 0;
	var b = 0;
	
	frameMat.dim = frames;
	
	var numCells = testMat.dim[0] * testMat.dim[1];
	
	for(var i = 0; i < testMat.dim[0]; i++) 
	{
		for(var j = 0; j < testMat.dim[1]; j++) 
		{
			r += testMat.getcell(i, j)[1];
			g += testMat.getcell(i, j)[2];
			b += testMat.getcell(i, j)[3];
		}	
	}
	
	frameMat.setcell1d(fcount, r/numCells, g/numCells, b/numCells);
};


//do this every frame
function getColor(fcount)
{
	if(fcount > -1)
	{
		getFrameColor(fcount);
	}			
};