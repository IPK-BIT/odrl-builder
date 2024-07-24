class Config {
	constructor() {}

	set(config) {
		this.config = config;
	}

	init() {
		this.apiBaseUrl = this.config.apiBaseUrl;
	}
}

//const configInstance = new Config();

let config = {};

let setConfig = (_config) => {
	config = _config;
};

export { config, setConfig };
