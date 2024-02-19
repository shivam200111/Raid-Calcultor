function calculate1() {
  var raidLevel = document.getElementById('raidLevel').value;
  var totalDisks = parseInt(document.getElementById('totalDisks').value);
  var usableSpace = parseInt(document.getElementById('usableSpace').value);

  var totalSpace;
  if (raidLevel === '1') {
    totalSpace = usableSpace * totalDisks / 2;
  } else if (raidLevel === '1E') {
    totalSpace = usableSpace * (totalDisks - 1);
  }

  document.getElementById('result').innerHTML =  + totalSpace ;
}
