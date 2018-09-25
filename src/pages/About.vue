<template>
  <main-layout>
    <div class="row">
	        	<div class="ibox-title">
                    <h5>应用访问概况 <small></small></h5>
                    
                </div>
	            <div class="col-sm-8 " >
	                <div class="ibox float-e-margins">
	                    
	                    <div id='box1'>
		                   	<div class="ibox-content" >
		                       <table class="table table-hover no-margins" >
	                                    <thead>
	                                        <tr style="background:#F2F2F2">
	                                        	<th>应用名称</th>
	                                            <th>今天访问人数</th>
	                                            <th>今天访问次数</th>
	                                            <th>昨天访问人数</th>
	                                            <th>昨天访问次数</th>
	                                        </tr>
	                                    </thead>
	                                    <tbody>
	                                        <tr>
	                                        	<td>实训考试</td>
	                                            <td>20
	                                            </td>
                                            <td>50</td>
	                                            <td>20</td>
	                                            <td >50</td>
	                                        </tr>
	                                        <tr>
	                                        	<td>网络课堂</td>
	                                            <td>20
	                                            </td>
	                                            <td>40</td>
	                                            <td>10</td>
	                                            <td >20</td>
	                                        </tr>
	                                    </tbody>
	                                </table>
	                    </div>
	                    </div>
	                </div>
	            </div>
	           
	        </div>
	        <div class="row" style='clear:both'>
	            <div class="col-sm-6">
	                <div class="ibox float-e-margins">
	                    <div class="ibox-title">
	                      <h5>各部门学习情况</h5>
	                        
	                        
	                    </div>
	                    <div class="ibox-content">
	                        <div class="echarts" id="myChart" ></div>
	                    </div>
	                </div>
	            </div>
	            <div class="col-sm-6">
	                <div class="ibox float-e-margins">
	                    <div class="ibox-title">
	                      <h5>平台登录率(月登录率=月登陆总人数/总人数*30)</h5>
	                       
	                    </div>
	                    <div class="ibox-content">
	                        <div class="echarts" id="echarts-line-chart" ></div>
	                    </div>
	                </div>
	            </div>
	        </div>

  </main-layout>
</template>
<script>
	/*import '../assets/zTreeStyle/js/jquery-1.4.4.min.js'*/
	import '../assets/js/box1.js'
	import '../assets/js/echarts-all.js'
	import '../assets/js/echarts-demo.min.js'		
</script>
<script>
  import MainLayout from '../layouts/Main.vue'

  /*export default {
    components: {
      MainLayout
    }
  }*/
  
  export default {
  	components: {
      MainLayout
   },
	  name: 'hello',
	  data () {
	    return {
	      msg: 'Welcome to Your Vue.js App'
	    }
	  },
	  mounted(){
	    this.drawLine();
	    
	  },
	  methods: {
	    drawLine(){
	        // 基于准备好的dom，初始化echarts实例
	        let myChart = this.$echarts.init(document.getElementById('myChart'))
	        // 绘制图表
	        myChart.setOption({
			             title: {  
			        text: ""  
			    },  
			    tooltip: {  
			         trigger: "axis"  
			    },  
			    legend: {  
			        data:["学分获取数量","学习课程数量"],
			        x : "right"
			    }, 
			    grid : {
						x : 60,
						x2 : 40,
						y: 30,
						y2 :60
					},
			    //x轴显示  
			    xAxis: {  
		        data: ["财务部","销售部","研发部","人力资源部","财务部","销售部","研发部"
		        ],
		        "axisLabel":{  
				            interval: 0,
				            rotate: -35
				        } , 
			            splitLine:{  
			            　　　　show:false  
			            　　}  
			        },  
			        //y轴显示  
			        yAxis: {  
			            splitLine:{  
			            　　　　show:false  
			            　　}  
			        },  
			        series: [  
			             {  
			                name: "学分获取数量",  
			                type: "bar",  
			                stack: "业务",//折叠显示  
			                data: [ "600", "800", "500", "400","700", "1000",  "400"
					                
			                ],
		 
			                //显示颜色  
			                itemStyle:{    
			                     normal:{color:"#FC8D52"}    
			                }  
			             },  
			             {  
			                 name: "学习课程数量",  
			                 type: "bar",  
			                 stack: "业务",  
			                 data: [ "100", "400", "300", "200","100", "400",  "200"
					                 ],
			                 itemStyle:{    
			                     normal:{color:"#0066FF"}    
			                 }  
			             }
			         ]  
        	});
        
         // 基于准备好的dom，初始化echarts实例
	        let myChart1 = this.$echarts.init(document.getElementById('echarts-line-chart'))
	        // 绘制图表
	        myChart1.setOption({
			            title: { text: "",itemGap :100}, 
			tooltip: {
				trigger: 'item',   
	    		formatter: "{b}\n{c}%" 
			},
			legend : {
			data : [ "实训考试","网络课堂"],
			x : "right"
			},
			grid: { x : 60,
				x2 : 40,
				y: 40,
				y2 : 40},
			calculable: !0,
			xAxis: [{ type: "category","axisLabel":{  
	            interval: 0,
	            rotate: -35
	        }  ,
			boundaryGap: !1, data: ["七月", "八月", "九月", "十一月", "十二月"] }],
			yAxis: [{ type: "value",
			
			axisLabel: { formatter: "{value} %" } }],
			series: [
				{ name: "实训考试", type: "line", showAllSymbol: 'true',
				data: [11, 20, 35, 30, 12],
				markPoint: { data: [{ type: "max", name: "最大值" },
				{ type: "min", name: "最小值" }] }
				 },
				{ name: "网络课堂", type: "line", showAllSymbol: 'true',
				data: [21, 30, 25, 20, 42],
				markPoint: { data: [{ type: "max", name: "最大值" },
				{ type: "min", name: "最小值" }] }
//				markLine: { data: [{ type: "average", name: "平均值" }] } 
				}
			]
        	});
        	
    }
  }
}
</script>
<style scoped>
	@import '../assets/css/style.min862f.css';
	@import '../assets/css/bootstrap.css';
	
</style>
<style>
	*{
		font-family: "微软雅黑";
	}
	.col-sm-6 {
	    width: 50%;
	    float:left;
	}
</style>
