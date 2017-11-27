import Vue from 'vue'
import network from '../../networkmanager'
import * as d3 from 'd3'
import techan from 'techan'


var mydata = [
  {
    'Date':'9-Jun-14',
    'Open':'62.40',
    'High':'63.34',
    'Low':'61.79',
    'Close':'62.88',
    'Volume':'37617413'
  },
  {'Date':'6-Jun-14',
    'Open':'62.40',
    'High':'63.34',
    'Low':'61.79',
    'Close':'62.88',
    'Volume':'37617413'
  },
  {
    'Date':'5-Jun-14',
    'Open':'62.40',
    'High':'63.34',
    'Low':'61.79',
    'Close':'62.88',
    'Volume':'37617413'
  },
  {
    'Date':'4-Jun-14',
    'Open':'62.40',
    'High':'63.34',
    'Low':'61.79',
    'Close':'62.88',
    'Volume':'37617413'
  },
  {
    'Date':'3-Jun-14',
    'Open':'62.40',
    'High':'63.34',
    'Low':'61.79',
    'Close':'62.88',
    'Volume':'37617413'
  }
]

var parseDate = d3.timeParse("%d-%b-%y");

function con(width, height, data, domId) {
  
  var margin = {top: 0, right: 0, bottom: 20, left: 40}
  
  this.width = width
  
  this.height = height
  
  this.data = data
  
  this.x = techan.scale.financetime().range([0, width])
  
  this.y = d3.scaleLinear().range([height, 0])
  
  this.zoom = d3.zoom().on('zoom', zoomed)
  
  this.candlestick = techan.plot.candlestick().xScale(this.x).yScale(this.y)
  
  this.xAxis = d3.axisBottom().scale(this.x)
  
  this.yAxis = d3.axisLeft().scale(this.y)
  
  this.svg = d3.select(domId).append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
  
  this.svg.append("clipPath")
    .attr("id", "clip")
    .append("rect")
    .attr("x", 0)
    .attr("y", this.y(1))
    .attr("width", width)
    .attr("height", this.y(0) - this.y(1));
  
  this.svg.append("g")
    .attr("class", "candlestick")
    .attr("clip-path", "url(#clip)");
  
  this.svg.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + this.height + ")");
  
  this.svg.append("g")
    .attr("class", "y axis")
    .append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 6)
    .attr("dy", ".71em")
    .style("text-anchor", "end")
    .text("Price ($)");
  
  this.svg.append("rect")
    .attr("class", "pane")
    .attr("width", this.width)
    .attr("height", this.height)
    .call(this.zoom);
  
  function zoomed() {
    
    var rescaledY = d3.event.transform.rescaleY(this.y);
    
    this.yAxis.scale(rescaledY);
    
    this.candlestick.yScale(rescaledY);
    
    // Emulates D3 behaviour, required for financetime due to secondary zoomable scale
    this.x.zoomable().domain(d3.event.transform.rescaleX(zoomableInit).domain());
    
    draw();
  }
  
  function draw() {
    
    this.svg.select("g.candlestick").call(this.candlestick)
    
    this.svg.select("g.x.axis").call(this.xAxis)
    
    this.svg.select("g.y.axis").call(this.yAxis)
  }
}






var accessor = candlestick.accessor();

data = data.map(function(d) {
  return {
    date: parseDate(d.Date),
    open: +d.Open,
    high: +d.High,
    low: +d.Low,
    close: +d.Close,
    volume: +d.Volume
  };
}).sort(function(a, b) { return d3.ascending(accessor.d(a), accessor.d(b)); });

x.domain(data.map(accessor.d));
y.domain(techan.scale.plot.ohlc(data, accessor).domain());

svg.select("g.candlestick").datum(data);
draw();

// Associate the zoom with the scale after a domain has been applied
// Stash initial settings to store as baseline for zooming
zoomableInit = x.zoomable().clamp(false).copy();

function zoomed() {
  var rescaledY = d3.event.transform.rescaleY(y);
  yAxis.scale(rescaledY);
  candlestick.yScale(rescaledY);
  
  // Emulates D3 behaviour, required for financetime due to secondary zoomable scale
  x.zoomable().domain(d3.event.transform.rescaleX(zoomableInit).domain());
  
  draw();
}

function draw() {
  svg.select("g.candlestick").call(candlestick);
  // using refresh method is more efficient as it does not perform any data joins
  // Use this if underlying data is not changing
//        svg.select("g.candlestick").call(candlestick.refresh);
  svg.select("g.x.axis").call(xAxis);
  svg.select("g.y.axis").call(yAxis)
}

