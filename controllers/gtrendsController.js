const googleTrends = require('google-trends-api');

getGtrends = function(req, res) {
    $request = req.query 

    googleTrends.interestOverTime({keyword: $request.keyword, startTime: new Date($request.startTime), endTime: new Date($request.endTime)})
    .then(function(results){
        results = JSON.parse(results).default.timelineData
        // looping data value dari result
        value = 0
        for(data in results){
            value += results[data].value[0]
        }

        res.json({
            value: value
        })
    })
    .catch(function(err){
      console.error('Oh no there was an error', err);
    });

}

module.exports = {getGtrends};