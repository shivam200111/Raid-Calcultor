function calculate5() {
  var raidLevel1 = document.getElementById('raidLevel2').value;
  var totalDisks1 = parseInt(document.getElementById('totalDisks2').value);
  var usableSpace1 = parseInt(document.getElementById('usableSpace2').value);

  var totalSpace1;
  if (raidLevel1 === '5') {
    totalSpace1 = usableSpace1 * (totalDisks1 - 1);
  } else if (raidLevel1 === '5E') {
    totalSpace1 = usableSpace1 * (totalDisks1 - 2);
  } else if (raidLevel1 === '5EE') {
    totalSpace1 = usableSpace1 * (totalDisks1 - 3);
  }

  document.getElementById('result5').innerHTML = + totalSpace1 ;
}
