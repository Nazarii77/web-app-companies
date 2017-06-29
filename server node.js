
var express = require("express");
var mysql = require("mysql");
var app = express();


app.get('/', function(request, res){

    res.sendFile('C:\\Users\\Hello2times\\Desktop\\NEW\\index.html');//localhost path here

});


/*
 * Configure MySQL parameters.
 */
var connection = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "",
    database : "companies"
});

/*Connecting to Database*/


connection.connect(function(error){
    if(error)
    {
        console.log("Problem with MySQL"+error);
    }
    else
    {
        console.log("Connected to Database");
    }
});


/*
connection.query('USE Companies7; SELECT * FROM main_company;', function(err, rows, fields) {
    if (!err)
        console.log('The solution is: ', rows);
    else
        console.log('Error while performing Query.');
});
*/


var queryString = 'SELECT * FROM main_company';

var queryString77 = "SELECT DISTINCT main_company.company_name , " +
    "main_company.company_earnings,(main_company.company_earnings+" +
    "(SELECT SUM(company_earnings) FROM child_company WHERE main_company.id=child_company.company_owner " +
    "group by company_owner  having count(*) > 1) )AS allearnings FROM  main_company " +
    "LEFT JOIN  child_company ON child_company.company_owner=main_company.id;";



connection.query(queryString77, function(err, rows, fields) {
    if (err) throw err;

    for (var i in rows) {
        console.log('Rows: ',rows[i].company_name," ",rows[i].company_earnings, " ",rows[i].allearnings );
            }
    console.log("\n")
});


var queryString2 = 'SELECT * FROM child_company';

connection.query(queryString2, function(err, rows, fields) {
    if (err) throw err;

    for (var i in rows) {
        console.log('Rows: ',rows[i].id," ", rows[i].company_name, "\t ",rows[i].company_earnings," ",rows[i].company_owner );
    }
});


/*var queryString3 = "INSERT  INTO main_company VALUES (3,'Tesla',231321)";

connection.query(queryString3, function(err, rows, fields) {
    if (err) throw err;


});*/

connection.end();

/*Start the Server*/

app.listen(3000,function(){
    console.log("It's Started on PORT  http://127.0.0.1:3000/");
});



