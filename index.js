const http = require('http')

const fs = require('fs') //file Sysytem

var requests = require('requests');

const homeFile = fs.readFileSync('home.html', 'utf-8');


const replaceVal = (tempvalue, orgvalue)=>{
    let temperature = tempvalue.replace("{%tempvalue%}",orgvalue.main.temp);
    temperature = temperature.replace("{%tempvaluemin%}",orgvalue.main.temp_min);
    temperature = temperature.replace("{%tempvaluemax%}",orgvalue.main.temp_max);
    temperature = temperature.replace("{%location%}",orgvalue.name);
    temperature = temperature.replace("{%country%}",orgvalue.sys.country);
    temperature = temperature.replace("{%tempstatus%}",orgvalue.weather[0].main);
    return temperature;
};


const server = http.createServer((req, res) => {
    if (req.url = '/') {

        requests('https://api.openweathermap.org/data/2.5/weather?q=Mumbai%20&appid=4c91684c692ae435a6f296801dd01f08')   // on , end data this all events to get data
            .on('data',  (chunk) =>{
               const objdata = JSON.parse(chunk);  //object format
               const arrData = [objdata]
            //    console.log(arrData[0].main.temp);
            const realData = arrData.map((val)=>replaceVal(homeFile,val)).join(" ");
            res.write(realData);
            console.log(realData)
            })

            .on('end',  (err) =>{
                if (err) return console.log('connection closed due to errors', err);
                 res.end();
          });
    }
});

server.listen(8000,'127.0.0.1')