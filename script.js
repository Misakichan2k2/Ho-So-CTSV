function showTabLeft(tabName) {
  var i;
  var tabContent = document.getElementsByClassName("table-left");
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }
  document.getElementById(tabName).style.display = "block";
}

function showTabRight(tabName) {
  var i;
  var tabContentRight = document.getElementsByClassName("table-right");
  for (i = 0; i < tabContentRight.length; i++) {
    tabContentRight[i].style.display = "none";
  }
  document.getElementById(tabName).style.display = "block";
}

showTabLeft('trangthai');
showTabRight('lylich');

// Chart

var ki_hoc = ["20211", "20212", "20221", "20222", "20231"];
var tcNoData = [0, 1, 0, 0, 0];
var tcTichLuyData = [13, 30, 47, 71, 88];

var ctx = document.getElementById('myChart').getContext('2d');

var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ki_hoc,
    datasets: [
      {
        label: 'TC Nợ',
        data: tcNoData,
        backgroundColor: 'rgba(255, 0, 0, 0.8)',
        borderColor: 'rgba(255, 206, 86, 1)',
        borderWidth: 1
      },
      {
        label: 'TC Tích Lũy',
        data: tcTichLuyData,
        backgroundColor: 'rgba(38, 194, 129, 1)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1
      }
    ]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

var ki_hoc_renluyen = ["2021-1", "2021-2", "2022-1", "2022-2", "2023-1"];
var diem_renluyen = [50, 45, 65, 58, 85];

var ctxRenLuyen = document.getElementById('myChartRenLuyen').getContext('2d');

var myChartRenLuyen = new Chart(ctxRenLuyen, {
  type: 'line',
  data: {
    labels: ki_hoc_renluyen,
    datasets: [{
      label: 'Kết quả rèn luyện học tập',
      data: diem_renluyen,
      fill: false,
      borderColor: 'green',
      borderWidth: 2,
      pointBackgroundColor: 'green',
      pointRadius: 1,
      pointHoverRadius: 8
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        max: 100
      }
    }
  }
});
