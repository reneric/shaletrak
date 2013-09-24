$(function () { 
    $('#graph').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Top Royalty Producing Wells'
        },
        xAxis: {
            categories: ['Brown Well 35', 'Shell Well 15', 'LSHDA Well 35', 'LSHDA Well 13', 'LSHDA Well 6', 'Shale Well 7', 'R232A Well 1']
        },
        yAxis: {
            title: {
                text: ''
            },
            labels: {
                formatter: function() {
                    return (this.value)/1000 + 'k';
                }
            }
        },
        column: {
            color: '#147c35'
        },
        series: [{
            data: [436403, 300244, 280382, 251143, 223391, 175321, 139391]
        }]
    });
});