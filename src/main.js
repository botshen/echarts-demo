var echarts = require('echarts')
console.log(echarts)
const main = document.getElementById('main')
// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(main, 'default')

// 指定图表的配置项和数据
// var option = {
//   legend: {
//     data: ['bug数']
//   },
//
//   xAxis: {
//     type: 'category',
//     data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
//   },
//   yAxis: {
//     type: 'value'
//   },
//   series: [{
//     name: 'bug数',
//     data: [150, 230, 224, 218, 135, 147, 260],
//     type: 'line'
//   }]
// }

// 使用刚指定的配置项和数据显示图表。
myChart.setOption({
  legend: {
    data: ['bug数']
  },

  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [{
    lineStyle: {
      color: 'red'
    },
    itemStyle: {
      borderWidth: 50
    },
    name: 'bug数',
    data: [150, 230, 224, 218, 135, 147, 260],
    type: 'line'
  }]
})
