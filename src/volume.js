import techan from 'techan'
import * as d3 from 'd3'

var parseDate = d3.timeParse("%d-%b-%y");

export default class Volume {
  
  constructor(data, width, height, domId) {
    
    var margin = {top: 20, right: 20, bottom: 30, left: 50}
    
    this.width = width
    
    this.height = height
    
    this.data = data
    
    this.x = techan.scale.financetime().range([0, width])
    
    this.y = d3.scaleLinear().range([height, 0])
    
    this.volume = techan.plot.volume().accessor(techan.accessor.ohlc()).xScale(this.x).yScale(this.y)
    
    this.xAxis = d3.axisBottom().scale(this.x)
    
    this.yAxis = d3.axisLeft().scale(this.y)
    
    this.svg = d3.select(domId).append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
  }
  
  draw(data) {
  
    this.x.domain(data.map(this.volume.accessor().d))
    
    this.y.domain(techan.scale.plot.volume(data, this.volume.accessor().v).domain());
  
    this.svg.selectAll("g.volume").datum(data).call(this.volume);
    
    this.svg.selectAll("g.x.axis").call(this.xAxis);
    
    this.svg.selectAll("g.y.axis").call(this.yAxis);
  }
  
  init() {
  
    var accessor = this.volume.accessor();
  
    this.data = this.data.map(function(d) {
      return {
        date: parseDate(d.Date),
        volume: +d.Volume,
        open: +d.Open,
        high: +d.High,
        low: +d.Low,
        close: +d.Close
      };
    }).sort(function(a, b) { return d3.ascending(accessor.d(a), accessor.d(b)); });
  
    this.svg.append("g")
      .attr("class", "volume");
  
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
      .text("Volume");
  
    // Data to display initially
    this.draw(this.data);
  }
}
