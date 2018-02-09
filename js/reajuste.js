function reajusta(sal) {

	switch(true){
		case (sal>1500):
			return Number((sal*1.05).toFixed(2));
		case (sal>700):
			return Number((sal*1.1).toFixed(2));
		case (sal>280):
			return Number((sal*1.15).toFixed(2));
		case (sal>=0):
			return Number((sal*1.2).toFixed(2));
		default:
			return null;
	};

};
