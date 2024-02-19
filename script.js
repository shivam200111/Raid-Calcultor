function calculate() {
    var diskCount = parseInt(document.getElementById('diskCount').value);
    var diskSize = parseInt(document.getElementById('diskSize').value);
    
    var totalCapacity = diskCount * diskSize;
  



    
    document.getElementById('totalCapacity').textContent = totalCapacity;


  }



