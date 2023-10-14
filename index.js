const url = 'https://visual-crossing-weather.p.rapidapi.com/history?startDateTime=2019-01-01T00%3A00%3A00&aggregateHours=24&location=Washington%2CDC%2CUSA&endDateTime=2019-01-03T00%3A00%3A00&unitGroup=us&dayStartTime=8%3A00%3A00&contentType=csv&dayEndTime=17%3A00%3A00&shortColumnNames=0';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3d9ffb8b1fmsh720f9c6a1a3e86bp1fc720jsn792e09106925',
		'X-RapidAPI-Host': 'visual-crossing-weather.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}