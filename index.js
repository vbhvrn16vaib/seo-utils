var Utils = module.exports;
[require('./src/main'),require('./src/rule')].forEach(function(ext){
	Object.keys(ext).forEach(function(key){
		Utils[key] = ext[key].bind(Utils);
	});
});
