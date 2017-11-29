import techan from 'techan'
import * as d3 from 'd3'

var parseDate = d3.timeParse("%Y/%m/%d");

export default class CandleSticks {
  
  constructor(data, width, height, domId) {
  
    var margin = {top: 0, right: 0, bottom: 20, left: 40}
    
    this.width = width
    
    this.height = height
  
    this.data = data
    
    this.x = techan.scale.financetime().range([0, width])
  
    this.y = d3.scaleLinear().range([height, 0])
    
    this.zoom = d3.zoom().on('zoom', () => this.zoomed())
  
    this.candlestick = techan.plot.candlestick().xScale(this.x).yScale(this.y)
  
    this.xAxis = d3.axisBottom(this.x)
  
    this.yAxis = d3.axisLeft(this.y)
  
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
      .attr("width", this.width)
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
    // Data to display initially
  }
  
  zoomed() {
  
    var rescaledY = d3.event.transform.rescaleY(this.y);
  
    this.yAxis.scale(rescaledY);
    
    this.candlestick.yScale(rescaledY);
  
    // Emulates D3 behaviour, required for financetime due to secondary zoomable scale
    this.x.zoomable().domain(d3.event.transform.rescaleX(this.zoomableInit).domain());
  
    this.draw();
  }
  
  draw(data) {
    
    this.svg.select("g.candlestick").call(this.candlestick)
    
    this.svg.select("g.x.axis").call(this.xAxis)
    
    this.svg.select("g.y.axis").call(this.yAxis)
  }
  
  refresh(length) {
  
    var data = null
    
    if (this.data.length < length) {
  
      data = this.data.slice(0)
    }
    else {
  
      data = this.data.slice(this.data.length - length)
    }
    
    this.draw(data)
  }
  
  init() {
  
    var accessor = this.candlestick.accessor()
    
    this.data = this.data.map(function(d) {
      return {
        date: parseDate(d.Date),
        open: +d.Open,
        high: +d.High,
        low: +d.Low,
        close: +d.Close,
        volume: +d.Volume
      };
    }).sort((a, b) => { return d3.ascending(accessor.d(a), accessor.d(b)); });
    
    this.x.domain(this.data.map(accessor.d));
  
    this.y.domain(techan.scale.plot.ohlc(this.data, accessor).domain());
  
    this.svg.select("g.candlestick").datum(this.data);
    
    this.draw(this.data)
  
    this.zoomableInit = this.x.zoomable().clamp(false).copy();
  }
}
