var records = {
  1999 : {
    "album"  : 'Hello world',
    "artist" : 'Luna',
  },
  1755 : {
    "album"  : 'Nani',
    "artist" : 'Leon',
    "tracks" : [
      "Nani-1",
      "Nani-2",
      "Nani-3"
    ]
  }
}

function updateRecord(id, property, value) {
  var newproperty = false;
  if (!records[id].hasOwnProperty(property)) {
    var newproperty = true;
    console.log("such property doesn't exist yet, we will create it");
  }

  records[id][property] = value;
  if (records[id][property] == value) {
    return "value updated succesfully";
  } else if (records[id][property] == value && newproperty) {
    return "new property created and value assigned";
  } else {
    return "error";
  }
}

//not working function:
function snapshotRecords() {
  functionFinished = false
  if (!functionFinished) {
    var recordsSnapshot = records;
  }
  return recordsSnapshot;
  functionFinished = true;
}

//working but not as intended function:
//cuz global variable - recordsSnapshot is changing
//whenever records global variable is chaged
function rrecordsSnapshot(action) {
  switch(action) {
    case "take" :
      recordsSnapshot = records;
      break;
    case "get" :
      return recordsShanpshot;
    default:
      return "only allowed: 'get' and 'take' arguments";
  }
}

function resetRecords() {
  records = snapshotRecords;
}

