var conn = $.hdb.getConnection();
var rs;
var query;

query = 'SELECT * FROM "PO.Header" '
		+ ' LIMIT 10';

rs = conn.executeQuery(query);

for(var i = 0; i < rs.length; i++){
	rs[i].DISCOUNTAMOUNT = (rs[i].GROSSAMOUNT - rs[i].GROSSAMOUNT * '.10');
}


$.response.contentType = 'application/json';
$.response.setBody(JSON.stringify(rs));
$.response.status = $.net.http.OK;
