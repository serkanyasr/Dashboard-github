var options = {
  series: [10,20,30,40,50],
  chart: {
    width: 400,
    foreColor: "#fff",
    type: "polarArea",
  },
  labels: ["LABEL 1", "LABEL 2", "LABEL 3", "LABEL 4", "LABEL 5"],
  fill: {
    opacity: 1,
  },
  stroke: {
    width: 1,
    colors: undefined,
  },
  yaxis: {
    show: false,
  },
  legend: {
    position: "bottom",
  },
  plotOptions: {
    polarArea: {
      rings: {
        strokeWidth: 1,
      },
      spokes: {
        strokeWidth: 0,
      },
      radius: 50,
    },
  },
  colors: ["#FF5733", "#FFD700", "#33FF57", "#3399FF", "#AA33FF"], // Parça dilim renklerini özelleştirin
};

var chart = new ApexCharts(document.querySelector("#figure1"), options);
chart.render();

////////////////////////////////////////////FIGURE 2///////////////////////////////////////////////////////////////


var options = {
  series: [
    {
      name: "LABEL 1",
      data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 70, 80, 70],
    },
    {
      name: "LABEL 2",
      data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 70, 80,70],
    },
    {
      name: "LABEL 3",
      data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 70, 80,70],
    },
    {
      name: "LABEL 4",
      data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 70, 80,70],
    },
    {
      name: "LABEL 5",
      data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 70, 80, 70],
    },
  ],
  colors: ["#00e396", "#feb019", "#008ffb", "#775dd0", "#d645d8"],
  chart: {
    foreColor: "#fff",
    type: "bar",
    height: 380,
    stacked: true,
    toolbar: {
      show: true,
    },

    zoom: {
      enabled: true,
    },
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        legend: {
          position: "bottom",
          offsetX: -10,
          offsetY: 0,
        },
      },
    },
  ],
  plotOptions: {
    bar: {
      horizontal: false,
      borderRadius: 10,
    },
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    type: "datetime",
    categories: getDynamicCategories(),
  },
  yaxis: [
    {
      labels: {
        formatter: function (value) {
          if (Math.abs(value) >= 1e6) {
            // Değer milyondan büyükse "M" olarak göster
            return value / 1e6 + " M";
          } else {
            // Değer milyondan küçükse bin olarak göster
            return value / 1000 + " K";
          }
        },
      },
    },
  ],
  legend: {
    position: "right",
    offsetY: 40,
  },
  fill: {
    opacity: 1,
  },
};

function getDynamicCategories() {
  // Burada o yılın değerlerini alarak kategorileri dinamik olarak oluşturabilirsiniz.
  // Örnek olarak, yıl bilgisini almak için Date nesnesini kullanıyoruz.
  const currentYear = new Date().getFullYear();

  const categories = [];

  for (let i = 1; i <= 12; i++) {
    categories.push(`0${i}/01/ ${currentYear} GMT`);
  }

  return categories;
}

var chart = new ApexCharts(document.querySelector("#figure2"), options);
chart.render();

/////////////////////////////////////////////////////////////////////////////FIGURE 3///////////////////////////////////////////////

var options = {
  series: [44, 55, 13, 43, 22],
  chart: {
    width: 400,
    type: "pie",
    foreColor: "#fff",
  },
  labels: ["LABEL 1", "LABEL 2", "LABEL 3", "LABEL 4", "LABEL 5"],
  responsive: [
    {
      breakpoint: 200,
      options: {
        chart: {
          width: 100,
        },
        legend: {
          position: "top",
          horizontalAlign: "right",
        },
      },
    },
  ],
};

var chart = new ApexCharts(document.querySelector("#figure3"), options);
chart.render();
/////////////////////////////////////////////////////////////////////////////FIGURE 4///////////////////////////////////////////////
var options = {
  series: [
    {
      name: "LABEL 1",
      data: [140, 340, 306, 470, 580, 650, 540, 350, 530, 235, 523, 743],
    },
    {
      name: "LABEL 2",
      data: [160, 220, 784, 234, 134, 522, 535, 344, 242, 324, 523, 252],
    },
    {
      name: "LABEL 3",
      data: [523, 211, 643, 435, 312, 123, 545, 876, 123, 532, 875, 423],
    },
    {
      name: "LABEL 4",
      data: [432, 532, 652, 144, 754, 252, 754, 234, 123, 523, 632, 623]
    },
    {
      name: "LABEL 5",
      data: [123, 52, 532, 764, 865, 234, 243, 876, 879, 345, 245, 623],
    },
  ],
  chart: {
    foreColor: "#fff",
    height: 350,
    type: "area",
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  yaxis: [
    {
      labels: {
        formatter: function (value) {
          if (Math.abs(value) >= 1e6) {
            // Değer milyondan büyükse "M" olarak göster
            return value / 1e6 + " M";
          } else {
            // Değer milyondan küçükse bin olarak göster
            return value / 1000 + " K";
          }
        },
      },
    },
  ],

  xaxis: {
    type: "datetime",
    categories: getDynamicCategories(),
  },
  tooltip: {
    x: {
      format: "dd/MM/yy HH:mm",
    },
  },

  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 0.1,
      opacityFrom: 0.8,
      opacityTo: 0.2,
    },
  },
};

var chart = new ApexCharts(document.querySelector("#figure4"), options);
chart.render();

/////////////////////////////////////////////////////////////////////////////FIGURE 5///////////////////////////////////////////////

var options = {
  series: [
    {
      data: [[1673730000000.0, 1366083.0], [1676408400000.0, 1286606.0]],
    },
  ],
  chart: {
    foreColor: "#fff",
    id: "area-datetime",
    type: "area",
    height: 350,
    with: 350,
    zoom: {
      autoScaleYaxis: true,
    },
  },

  xaxis: {
    type: "datetime",
    tickAmount: 6,
  },

  yaxis: [
    {
      labels: {
        formatter: function (value) {
          if (Math.abs(value) >= 1e6) {
            // Değer milyondan büyükse "M" olarak göster
            return value / 1e6 + " M";
          } else {
            // Değer milyondan küçükse bin olarak göster
            return value / 1000 + " K";
          }
        },
      },
    },
  ],

  dataLabels: {
    enabled: false,
  },

  tooltip: {
    x: {
      format: "dd MMM yyyy",
    },
  },
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.7,
      opacityTo: 0.9,
      stops: [0, 100],
    },
  },
};

var chart = new ApexCharts(document.querySelector("#figure5"), options);
chart.render();
