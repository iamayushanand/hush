const fs = require('fs');
/*
var entry = JSON.parse(fs.readFileSync("storage/data.dat",'utf-8'))
var newIndex = entry.length;
for(entri of entry){
  let website = entri["website"]
  let username = entri["username"]
  let password = entri["password"]
  var tab = document.getElementById('myTable');
  var row = document.createElement('tr');
  var cell_website = document.createElement('td');
  var cell_username = document.createElement('td');
  var cell_password = document.createElement('td');
  row.insertCell(0).append(website);
  row.insertCell(1).append(username);
  row.insertCell(2).append(password);
  row.insertCell(3).append(password);
  tab.append(row);
}
*/
function getEntries(){
    let entries=JSON.parse(fs.readFileSync("storage/data.dat",'utf-8'))
    return entries
}

exports.getEntries=getEntries
function addEntry(entry){
    let entries=JSON.parse(fs.readFileSync("storage/data.dat",'utf-8'))
    entries[entries.length]=entry
    fs.writeFile("storage/data.dat",JSON.stringify(entries), (err)=>{})
}	
exports.addEntry=addEntry
/*
function newElement(){
  var tab = document.getElementById('myTable');
  var row = document.createElement('tr');
  var cell_website = document.createElement('td');
  var cell_username = document.createElement('td');
  var cell_password = document.createElement('td');
  let website = document.getElementById('WebsiteName').value;
  let username = document.getElementById('UserName').value;
  let password = document.getElementById('password').value;
  const newEntry = {
    "username" : username,
    "website" : website,
    "password" : password
  };
  return newEntry
  entry[newIndex] = newEntry;
  newIndex +=1;
  row.insertCell(0).append(website);
  row.insertCell(1).append(username);
  row.insertCell(2).append(password);
  row.insertCell(3).append(password);
  var val = JSON.stringify(entry);
  fs.writeFile("storage/data.dat",val, function (err) {
	  if (err) throw err;
	  console.log('Replaced!');
  });
      tab.append(row); 
    };
*/
