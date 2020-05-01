(function ($) {
  'use strict';
  $(function () {
    var lineStatsOptions = {
      scales: {
        yAxes: [{
          display: false
        }],
        xAxes: [{
          display: false
        }]
      },
      legend: {
        display: false
      },
      elements: {
        point: {
          radius: 0
        },
        line: {
          tension: 0
        }
      },
      stepsize: 100
    }
    if ($('#sales-statistics-overview').length) {
      var salesChartCanvas = $("#sales-statistics-overview").get(0).getContext("2d");
      var gradientStrokeFill_1 = salesChartCanvas.createLinearGradient(0, 0, 0, 450);
      gradientStrokeFill_1.addColorStop(1, 'rgba(255,255,255, 0.0)');
      gradientStrokeFill_1.addColorStop(0, 'rgba(102,78,235, 0.2)');
      var gradientStrokeFill_2 = salesChartCanvas.createLinearGradient(0, 0, 0, 400);
      gradientStrokeFill_2.addColorStop(1, 'rgba(255, 255, 255, 0.01)');
      gradientStrokeFill_2.addColorStop(0, '#14c671');
      var data_1_1 = [dailyconfirmed,dailydeceased,dailyrecovered];
      var data_1_2 = [totalconfirmed, totaldeceased, totalrecovered];

      var data_2_1 = [130, 145, 155, 60, 75, 65, 130, 110, 145, 149, 170];
      var data_2_2 = [0, 70, 52, 90, 25, 20, 40, 70, 49, 94, 110, 135];

      var data_3_1 = [130, 75, 65, 130, 110, 145, 155, 60, 145, 149, 170];
      var data_3_2 = [0, 70, 52, 94, 110, 135, 90, 25, 20, 40, 70, 49];

      var data_4_1 = [130, 145, 65, 130, 75, 145, 149, 170, 110, 155, 60];
      var data_4_2 = [0, 70, 90, 25, 40, 20, 94, 110, 135, 70, 49, 52];
      var areaData = {
        labels: ["Confirmed", "Deceased", "Recovered"],
        datasets: [{
          label: 'Daily',
          data: data_1_1,
          borderColor: infoColor,
          backgroundColor: gradientStrokeFill_1,
          borderWidth: 2
        }, {
          label: 'Total',
          data: data_1_2,
          borderColor: successColor,
          backgroundColor: gradientStrokeFill_2,
          borderWidth: 2
        }]
      };
      var areaOptions = {
        responsive: true,
        animation: {
          animateScale: true,
          animateRotate: true
        },
        elements: {
          point: {
            radius: 3,
            backgroundColor: "#fff"
          },
          line: {
            tension: 0
          }
        },
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
          }
        },
        legend: false,
        legendCallback: function (chart) {
          var text = [];
          text.push('<div class="chartjs-legend"><ul>');
          for (var i = 0; i < chart.data.datasets.length; i++) {
            console.log(chart.data.datasets[i]); // see what's inside the obj.
            text.push('<li>');
            text.push('<span style="background-color:' + chart.data.datasets[i].borderColor + '">' + '</span>');
            text.push(chart.data.datasets[i].label);
            text.push('</li>');
          }
          text.push('</ul></div>');
          return text.join("");
        },
        scales: {
          xAxes: [{
            display: true,
            ticks: {
              display: true,
              beginAtZero: false
            },
            gridLines: {
              drawBorder: true
            }
          }],
          yAxes: [{
            ticks: {
              max: totalconfirmed+2000,
              min: 0,
              stepSize: 5000,
              fontColor: "#858585",
              beginAtZero: false
            },
            gridLines: {
              color: '#e2e6ec',
              display: true,
              drawBorder: false
            }
          }]
        }
      }
      var salesChart = new Chart(salesChartCanvas, {
        type: 'line',
        data: areaData,
        options: areaOptions
      });
      document.getElementById('sales-statistics-legend').innerHTML = salesChart.generateLegend();

      $("#sales-statistics_switch_1").click(function () {
        var data = salesChart.data;
        data.datasets[0].data = data_1_1;
        data.datasets[1].data = data_1_2;
        salesChart.update();
      });
      $("#sales-statistics_switch_2").click(function () {
        var data = salesChart.data;
        data.datasets[0].data = data_2_1;
        data.datasets[1].data = data_2_2;
        salesChart.update();
      });
      $("#sales-statistics_switch_3").click(function () {
        var data = salesChart.data;
        data.datasets[0].data = data_3_1;
        data.datasets[1].data = data_3_2;
        salesChart.update();
      });
      $("#sales-statistics_switch_4").click(function () {
        var data = salesChart.data;
        data.datasets[0].data = data_4_1;
        data.datasets[1].data = data_4_2;
        salesChart.update();
      });
    }
    if ($("#net-profit").length) {
      var marksCanvas = document.getElementById("net-profit");
      var marksData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
        datasets: [{
          label: "Sales",
          backgroundColor: 'rgba(88, 208, 222,0.8)',
          borderColor: 'rgba(88, 208, 222,0.8)',
          borderWidth: 0,
          fill: true,
          radius: 0,
          pointRadius: 0,
          pointBorderWidth: 0,
          pointBackgroundColor: 'rgba(88, 208, 222,0.8)',
          pointHoverRadius: 10,
          pointHitRadius: 5,
          data: [54, 45, 60, 70, 54, 75, 60, 54]
        }, {
          label: "Orders",
          backgroundColor: 'rgba(150, 77, 247,1)',
          borderColor: 'rgba(150, 77, 247,1)',
          borderWidth: 0,
          fill: true,
          radius: 0,
          pointRadius: 0,
          pointBorderWidth: 0,
          pointBackgroundColor: 'rgba(150, 77, 247,1)',
          pointHoverRadius: 10,
          pointHitRadius: 5,
          data: [65, 75, 70, 80, 60, 80, 36, 60]
        }]
      };

      var chartOptions = {
        scale: {
          ticks: {
            beginAtZero: true,
            min: 0,
            max: 100,
            stepSize: 20,
            display: false,
          },
          pointLabels: {
            fontSize: 14
          },
          angleLines: {
            color: '#e9ebf1'
          },
          gridLines: {
            color: "#e9ebf1"
          }
        },
        legend: false,
        legendCallback: function (chart) {
          var text = [];
          text.push('<div class="chartjs-legend"><ul>');
          for (var i = 0; i < chart.data.datasets.length; i++) {
            console.log(chart.data.datasets[i]); // see what's inside the obj.
            text.push('<li>');
            text.push('<span style="background-color:' + chart.data.datasets[i].backgroundColor + '">' + '</span>');
            text.push(chart.data.datasets[i].label);
            text.push('</li>');
          }
          text.push('</ul></div>');
          return text.join("");
        },
      };

      var radarChart = new Chart(marksCanvas, {
        type: 'radar',
        data: marksData,
        options: chartOptions
      });
      document.getElementById('net-profit-legend').innerHTML = radarChart.generateLegend();
    }
    if ($('#total-revenue').length) {
      var ctx = document.getElementById('total-revenue').getContext("2d");
      var data = {
        labels: [
          "Day01",
          "Day02",
          "Day03",
          "Day04",
          "Day05",
          "Day06",
          "Day07",
          "Day08",
          "Day09",
          "Day10",
          "Day11",
          "Day12",
          "Day13",
          "Day14",
          "Day15",
          "Day16",
          "Day17",
          "Day18",
          "Day19",
          "Day20",
          "Day21",
          "Day22",
          "Day23",
          "Day24",
          "Day25",
          "Day26",
          "Day27",
          "Day28",
          "Day29",
          "Day30",
          "Day31",
          "Day32",
          "Day33",
          "Day34",
          "Day35",
          "Day36",
          "Day37",
          "Day38",
          "Day39",
          "Day40",
          "Day41",
          "Day42",
          "Day43",
          "Day44",
          "Day45",
          "Day46",
          "Day47",
          "Day48",
          "Day49",
          "Day50",
          "Day51",
          "Day52",
          "Day53",
          "Day54",
          "Day55",
          "Day56",
          "Day57",
          "Day58",
          "Day59",
          "Day60",
          "Day61",
          "Day62",
          "Day63",
          "Day64",
          "Day65",
          "Day66",
          "Day67",
          "Day68",
          "Day69",
          "Day70",
          "Day71",
          "Day72",
          "Day73",
          "Day74",
          "Day75",
          "Day76",
          "Day77",
          "Day78",
          "Day79",
          "Day80",
          "Day81",
          "Day82"
        ],
        datasets: [{
          label: 'Total Revenue',
          data: [56,
            55,
            59,
            59,
            59,
            57,
            56,
            57,
            54,
            56,
            58,
            57,
            59,
            58,
            59,
            57,
            55,
            56,
            54,
            52,
            49,
            48,
            50,
            50,
            46,
            45,
            49,
            50,
            52,
            53,
            52,
            55,
            54,
            53,
            56,
            55,
            56,
            55,
            54,
            55,
            57,
            58,
            56,
            55,
            56,
            57,
            58,
            59,
            58,
            57,
            55,
            53,
            52,
            55,
            57,
            55,
            54,
            52,
            55,
            57,
            56,
            57,
            58,
            59,
            58,
            59,
            57,
            56,
            55,
            57,
            58,
            59,
            60,
            62,
            60,
            59,
            58,
            57,
            56,
            57,
            56,
            58,
            59
          ],
          borderColor: '#9B86F1',
          backgroundColor: '#f2f2ff',
          borderWidth: 3,
          fill: 'origin'
        }]
      };
      var lineChart = new Chart(ctx, {
        type: 'line',
        data: data,
        options: {
          scales: {
            yAxes: [{
              display: false
            }],
            xAxes: [{
              display: false
            }]
          },
          legend: {
            display: false
          },
          elements: {
            point: {
              radius: 0
            },
            line: {
              tension: 0
            }
          },
          stepsize: 100
        }
      });
    }
    if ($('#total-transaction').length) {
      var ctx = document.getElementById('total-transaction').getContext('2d');
      var gradientStrokeFill_1 = ctx.createLinearGradient(0, 100, 200, 0);
      gradientStrokeFill_1.addColorStop(0, '#fa5539');
      gradientStrokeFill_1.addColorStop(1, '#fa3252');
      var areaData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [{
          label: 'Sessions',
          data: [320, 280, 300, 280, 300, 270, 350],
          backgroundColor: gradientStrokeFill_1,
          borderColor: '#fa394e',
          borderWidth: 0,
          pointBackgroundColor: "#fa394e",
          pointRadius: 7,
          pointBorderWidth: 3,
          pointBorderColor: '#fff',
          pointHoverRadius: 7,
          pointHoverBackgroundColor: "#fa394e",
          pointHoverBorderColor: "#fa394e",
          pointHoverBorderWidth: 2,
          pointHitRadius: 7,
        }]
      };
      var areaOptions = {
        responsive: true,
        animation: {
          animateScale: true,
          animateRotate: true
        },
        elements: {
          point: {
            radius: 0
          }
        },
        layout: {
          padding: {
            left: -10,
            right: 0,
            top: 0,
            bottom: -10
          }
        },
        legend: false,
        scales: {
          xAxes: [{
            gridLines: {
              display: false
            },
            ticks: {
              display: false
            }
          }],
          yAxes: [{
            gridLines: {
              display: false
            },
            ticks: {
              display: false
            }
          }]
        }
      }
      var revenueChart = new Chart(ctx, {
        type: 'line',
        data: areaData,
        options: areaOptions
      });
    }
    if ($("#market-overview-chart").length) {
      var MarketingChartCanvas = $("#market-overview-chart").get(0).getContext("2d");
      var Marketing_data_1_1 = [145, 238, 148, 293, 242, 235, 256, 334];
      var Marketing_data_1_2 = [330, 380, 230, 400, 309, 430, 340, 310];
      var Marketing_data_1_3 = [375, 440, 284, 450, 386, 480, 400, 365];
      var Marketing_data_1_4 = [425, 480, 324, 490, 426, 520, 440, 405];

      var Marketing_data_2_1 = [125, 138, 108, 193, 102, 200, 290, 204];
      var Marketing_data_2_2 = [330, 380, 230, 400, 309, 430, 340, 310];
      var Marketing_data_2_3 = [375, 440, 284, 450, 386, 480, 400, 365];
      var Marketing_data_2_4 = [425, 480, 324, 490, 426, 520, 440, 405];

      var Marketing_data_1_1 = [145, 238, 148, 293, 242, 235, 256, 334];
      var Marketing_data_1_2 = [330, 380, 230, 400, 309, 430, 340, 310];
      var Marketing_data_1_3 = [375, 440, 284, 450, 386, 480, 400, 365];
      var Marketing_data_1_4 = [425, 480, 324, 490, 426, 520, 440, 405];

      var MarketingChart = new Chart(MarketingChartCanvas, {
        type: 'bar',
        data: {
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
          datasets: [{
              label: 'OVERDUE',
              data: Marketing_data_1_1,
              backgroundColor: '#826af9',
              borderColor: '#826af9',
              borderWidth: 0
            }, {
              label: 'SNOOZED',
              data: Marketing_data_1_2,
              backgroundColor: '#9e86ff',
              borderColor: '#9e86ff',
              borderWidth: 0
            },
            {
              label: 'COMPLETED',
              data: Marketing_data_1_3,
              backgroundColor: '#d0aeff',
              borderColor: '#d0aeff',
              borderWidth: 0
            },
            {
              label: 'OVERDUE',
              data: Marketing_data_1_4,
              backgroundColor: '#f7d2ff',
              borderColor: '#f7d2ff',
              borderWidth: 0
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          layout: {
            padding: {
              left: 0,
              right: 0,
              top: 20,
              bottom: 0
            }
          },
          scales: {
            yAxes: [{
              ticks: {
                max: 400,
                display: true,
                beginAtZero: true,
                fontColor: "#212529",
                stepSize: 100
              },
              gridLines: {
                display: false,
              }
            }],
            xAxes: [{
              stacked: true,
              ticks: {
                beginAtZero: true,
                fontColor: "#212529"
              },
              gridLines: {
                color: "#e9ebf1",
                display: true
              },
              barPercentage: 0.2
            }]
          },
          legend: {
            display: false
          },
          elements: {
            point: {
              radius: 0
            }
          }
        }
      });
      $("#market-overview_1").click(function () {
        var data = MarketingChart.data;
        data.datasets[0].data = Marketing_data_1_1;
        data.datasets[1].data = Marketing_data_1_2;
        data.datasets[2].data = Marketing_data_1_2;
        data.datasets[3].data = Marketing_data_1_2;
        MarketingChart.update();
      });
      $("#market-overview_2").click(function () {
        var data = MarketingChart.data;
        data.datasets[0].data = Marketing_data_2_1;
        data.datasets[1].data = Marketing_data_2_2;
        data.datasets[2].data = Marketing_data_2_2;
        data.datasets[3].data = Marketing_data_2_2;
        MarketingChart.update();
      });
      $("#market-overview_3").click(function () {
        var data = MarketingChart.data;
        data.datasets[0].data = Marketing_data_3_1;
        data.datasets[1].data = Marketing_data_3_2;
        data.datasets[2].data = Marketing_data_3_2;
        data.datasets[3].data = Marketing_data_3_2;
        MarketingChart.update();
      });
    }
    if ($("#realtime-statistics").length) {
      var realtimeChartCanvas = $("#realtime-statistics").get(0).getContext("2d");
      var realtimeChart = new Chart(realtimeChartCanvas, {
        type: 'bar',
        data: {
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          datasets: [{
              label: 'Profit',
              data: [330, 380, 230, 400, 309, 530, 340],
              backgroundColor: "#0f5bff",
              borderColor: '#0f5bff',
              borderWidth: 0
            },
            {
              label: 'Target',
              data: [600, 600, 600, 600, 600, 600, 600],
              backgroundColor: '#e5e9f2',
              borderColor: '#e5e9f2',
              borderWidth: 0
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          layout: {
            padding: {
              left: 0,
              right: 25,
              top: 0,
              bottom: 0
            }
          },
          scales: {
            yAxes: [{
              display: false,
              gridLines: {
                display: false
              }
            }],
            xAxes: [{
              stacked: true,
              ticks: {
                display: false,
                beginAtZero: true,
                fontColor: "#354168"
              },
              gridLines: {
                color: "rgba(0, 0, 0, 0)",
                display: false
              },
              barPercentage: 0.5,
            }]
          },
          legend: {
            display: false
          },
          elements: {
            point: {
              radius: 0
            }
          }
        }
      });
    }
    if ($("#dashboard-vmap").length) {
      $('#dashboard-vmap').vectorMap({  
        map: 'in_mill',
        panOnDrag: true,
        backgroundColor: "transparent",
        focusOn: {
          x: 0.5,
          y: 0.5,
          scale:1,
          animate: true
        },
        series: {
          regions: [{
            scale: ['#6759A0 ','#1C143E '],
            normalizeFunction: 'polynomial',
            values: {
              "IN-AN": 16.63,
              "IN-BR": 20,
              "IN-MH": 1158.97, 
              "IN-WB": 60,
              "IN-PB": 700,
              "IN-RK": 50,
              "IN-SK": 70,
              "IN-TN": 60,
              "IN-TR": 400,
              "IN-AS": 10,
              "IN-HP": 400,
              "IN-GJ": 80,
              "IN-MZ": 30,
              "IN-GA": 60,
              "IN-OR": 90,
              "IN-UP": 40,
              "IN-UT": 400,
              "IN-PY": 200,
              "IN-KL": 460,
              "IN-RJ": 410,
              "IN-ML": 800,
              "IN-LD": 100,
              "IN-DD": 80,
              "IN-DN": 540,
              "IN-CT": 750,
              "IN-AR": 540,
              "IN-JK": 10,
              "IN-KA": 500,
              "IN-CH": 500
            }
          }]
        }
      });
    }
    if ($('#stats-line-graph-1').length) {
      var lineChartCanvas = $("#stats-line-graph-1").get(0).getContext("2d");
      var gradientStrokeFill_1 = lineChartCanvas.createLinearGradient(0, 0, 0, 50);
      gradientStrokeFill_1.addColorStop(0, 'rgba(131, 144, 255, 0.5)');
      gradientStrokeFill_1.addColorStop(1, '#fff');
      var lineChart = new Chart(lineChartCanvas, {
        type: 'line',
        data: {
          labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7", "Day 8", "Day 9", "Day 10", "Day 11", "Day 12", "Day 13"],
          datasets: [{
            label: 'Profit',
            data: [7, 6, 9, 7, 8, 6, 8, 5, 7, 8, 6, 7, 7],
            borderColor: '#6d7cfc',
            backgroundColor: gradientStrokeFill_1,
            borderWidth: 3,
            fill: true
          }]
        },
        options: lineStatsOptions
      });
    }
    if ($('#stats-line-graph-2').length) {
      var lineChartCanvas = $("#stats-line-graph-2").get(0).getContext("2d");
      var gradientStrokeFill_1 = lineChartCanvas.createLinearGradient(0, 0, 0, 50);
      gradientStrokeFill_1.addColorStop(0, 'rgba(131, 144, 255, 0.5)');
      gradientStrokeFill_1.addColorStop(1, '#fff');
      var lineChart = new Chart(lineChartCanvas, {
        type: 'line',
        data: {
          labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7", "Day 8", "Day 9", "Day 10", "Day 11", "Day 12", "Day 13"],
          datasets: [{
            label: 'Profit',
            data: [7, 6, 8, 5, 7, 8, 6, 7, 7, 6, 9, 7, 8],
            borderColor: '#6d7cfc',
            backgroundColor: gradientStrokeFill_1,
            borderWidth: 3,
            fill: true
          }]
        },
        options: lineStatsOptions
      });
    }
    if ($('#stats-line-graph-3').length) {
      var lineChartCanvas = $("#stats-line-graph-3").get(0).getContext("2d");
      var gradientStrokeFill_1 = lineChartCanvas.createLinearGradient(0, 0, 0, 50);
      gradientStrokeFill_1.addColorStop(0, 'rgba(131, 144, 255, 0.5)');
      gradientStrokeFill_1.addColorStop(1, '#fff');
      var lineChart = new Chart(lineChartCanvas, {
        type: 'line',
        data: {
          labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7", "Day 8", "Day 9", "Day 10", "Day 11", "Day 12", "Day 13"],
          datasets: [{
            label: 'Profit',
            data: [8, 6, 7, 8, 5, 7, 9, 7, 8, 7, 6, 7, 6],
            borderColor: '#6d7cfc',
            backgroundColor: gradientStrokeFill_1,
            borderWidth: 3,
            fill: true
          }]
        },
        options: lineStatsOptions
      });
    }
    if ($('#stats-line-graph-4').length) {
      var lineChartCanvas = $("#stats-line-graph-4").get(0).getContext("2d");
      var gradientStrokeFill_1 = lineChartCanvas.createLinearGradient(0, 0, 0, 50);
      gradientStrokeFill_1.addColorStop(0, 'rgba(131, 144, 255, 0.5)');
      gradientStrokeFill_1.addColorStop(1, '#fff');
      var lineChart = new Chart(lineChartCanvas, {
        type: 'line',
        data: {
          labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7", "Day 8", "Day 9", "Day 10", "Day 11", "Day 12", "Day 13"],
          datasets: [{
            label: 'Profit',
            data: [7, 6, 8, 5, 8, 6, 8, 7, 8, 6, 9, 7, 7],
            borderColor: '#6d7cfc',
            backgroundColor: gradientStrokeFill_1,
            borderWidth: 3,
            fill: true
          }]
        },
        options: lineStatsOptions
      });
    }
    if ($('#dashboard-guage-chart').length) {
      var g3 = new JustGage({
        id: 'dashboard-guage-chart',
        value: 65,
        min: 0,
        max: 100,
        symbol: '%',
        pointer: true,
        gaugeWidthScale: 1,
        customSectors: [{
          color: '#ff0000',
          lo: 50,
          hi: 100
        }, {
          color: '#00ff00',
          lo: 0,
          hi: 50
        }],
        counter: true
      });
    }
  });
})(jQuery);