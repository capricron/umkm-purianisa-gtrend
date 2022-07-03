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

    //     let xml = `<?xml version="1.0" encoding="UTF-8"?>
    //     <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    //         <data>
    //             <value>${value}</value>
    //         </data>
    //     </urlset>`

    // res.header("Content-Type", "application/xml");
    // res.status(200).send(xml);
    })
    .catch(function(err){
      console.error('Oh no there was an error', err);
    });

}

module.exports = {getGtrends};