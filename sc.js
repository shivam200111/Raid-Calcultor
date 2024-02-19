function calculate10() {
  var raidLevel0 = document.getElementById('raidLevel3').value;
  var totalDisks0 = parseInt(document.getElementById('totalDisks3').value);
  var usableSpace0 = parseInt(document.getElementById('usableSpace3').value);

  var totalSpace0;
  if (raidLevel0 === '10') {
    totalSpace0 = usableSpace0 * (totalDisks0 / 2);
  } else if (raidLevel0 === '50') {
    totalSpace0 = usableSpace0 * (totalDisks0 - 1);
  } else if (raidLevel0 === '60') {
    totalSpace0 = usableSpace0 * (totalDisks0 - 2);
  }

  document.getElementById('result10').innerHTML =  + totalSpace0  ;
}




