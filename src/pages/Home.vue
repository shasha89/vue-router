<template>
  <main-layout>
   
    <div class="main-container ">
				<div id="content_left" >
						<div class="content-top">
							<div style="font-size:14px;">上午好，张宇</div>	
							<div style="font-size:12px;color: #787878;">您有8条消息</div>
							<div class="news"><span class="left">管理员林新然于 2018年07月11日 10:13 关闭自动邀请成员使用功能   </span><span class="right">»</span></div>
							<div class="news"><span class="left">管理员林新然于 2018年07月11日 10:13 开启自动邀请成员使用功能   </span><span class="right">»</span></div>
							<div class="news"><span class="left">管理员王雷雷于6月28日10:45向李莎莎发出邀请</span><span class="right">»</span></div>
							<div class="news-hid" v-show="isShow">
								<div class="news"><span class="left">企业认证将于3天后过期，请进行年审或重新认证   </span><span class="right">»</span></div>
								<div class="news"><span class="left">管理员林新然于 2018年07月11日 10:13 开启自动邀请成员使用功能  </span><span class="right">»</span></div>
								<div class="news"><span class="left">管理员为员工配置增值税发票抬头信息，员工扫一扫快速开发票    </span><span class="right">»</span></div>
								<div class="news"><span class="left">管理员王雷雷于5月30日18:40向李莎莎发出邀请   </span><span class="right">»</span></div>
								<div class="news"><span class="left">企业认证通过，成员人数上限提升至400(人数)</span><span class="right">»</span></div>
							</div>
							<div > <a href="javascript:;" style="color: #0C4C7F;" v-text="btnText" v-on:click='toggleFinish'></a></div>
						</div>
						<div class="content-c">
							<p style="padding: 25px 0 10px 10px">信息统计</p>
							<div class="inline"  style="margin-left: 0px;">
								<div>学习月活跃度</div>
								<div>
									<div class="inline" >
										<h4 >21</h4>
										<div>登录次数</div>
									</div>
									<div class="inline" >
										<h4>1</h4>
										<div>考试次数</div>
									</div>
								</div>
								
							</div>
							<div class="inline">
								<div>课程信息</div>
								<div>
									<div class="inline" >
										<h4>6</h4>
										<div>课程总数</div>
									</div>
									<div class="inline" >
										<h4>0</h4>
										<div>课程评论</div>
									</div>
								</div>
								
							</div>
							<div class="inline">
								<div>企业信息</div>
								<div>
									<div class="inline" >
										<h4>24</h4>
										<div>成员数量</div>
									</div>
									<div class="inline" >
										<h4>1</h4>
										<div>在线人数</div>
									</div>
								</div>
								
							</div>
						</div>	
						<div class="centent-b" style='clear:both'>
							<p style="padding: 15px 0 10px 10px">快捷入口</p>
							<a href='classroom/kecheng.html' class="inline" style="margin-left: 0px;">
								<img src="../assets/kecheng.jpg" width="36" height="36"/>
								<span>上传课程</span>
							</a>
							<a href='test/test-copy.html' class="inline oinline">
								<img src="../assets/kaoshi.jpg" width="36" height="36"/>
								<span>创建考试</span>
							</a>
							<a href='test/training-test.html' class="inline">
								<img src="../assets/xunlian.jpg" width="36" height="36"/>
								<span>创建训练</span>
							</a>
							<a href='javascript:;' class="inline">
								<span> + </span>
								<span>添加新入口</span>
							</a>
						</div>
					</div>
					<div id="content_right" >
						<div class="right-top">
							<span class="left" style="width: 18%;">排行榜</span>
							<span class="left" style="border-bottom:1px solid #ccc;width: 64%;padding-top: 11px;"></span>
							<span class="right" style="color: #777;width: 12%;">更多></span>
						</div>
						<div class="right-pai" style="width: 98%;overflow: hidden;">
							<div>
								<div class="left" >
									<div class="right-img" ><img src="../assets/r-2.jpg" alt="" width="100%" height="100%" style="border-radius:50%"/></div>
									<div style="height: 30px;line-height: 30px;text-align: center;">第1名：张明</div>
									<div style="color: #e3735c;text-align: center;">积分：800</div>
								</div>
								<div class="left" >
									<div class="right-img"><img src="../assets/r-1.jpg" alt="" width="100%" height="100%" style="border-radius:50%"/></div>
									<div style="height: 30px;line-height: 30px;text-align: center;">第2名：李华</div>
									<div style="color: #e3735c;text-align: center;">积分：760</div>
								</div>
								<div class="left" >
									<div class="right-img"><img src="../assets/r-2.jpg" alt="" width="100%" height="100%" style="border-radius:50%"/></div>
									<div style="height: 30px;line-height: 30px;text-align: center;">第3名：王辉</div>
									<div style="color: #e3735c;text-align: center;">积分：740</div>
								</div>
							</div>
							<div>
								<div class="left" >
									<div class="right-img"><img src="../assets/r-1.jpg" alt="" width="100%" height="100%" style="border-radius:50%"/></div>
									<div style="height: 30px;line-height: 30px;text-align: center;">第4名：钱森</div>
									<div style="color: #e3735c;text-align: center;">积分：726</div>
								</div>
								<div class="left" >
									<div class="right-img"><img src="../assets/r-2.jpg" alt="" width="100%" height="100%" style="border-radius:50%"/></div>
									<div style="height: 30px;line-height: 30px;text-align: center;">第5名：赵鑫</div>
									<div style="color: #e3735c;text-align: center;">积分：700</div>
								</div>
								<div class="left" >
									<div class="right-img"><img src="../assets/r-1.jpg" alt="" width="100%" height="100%" style="border-radius:50%"/></div>
									<div style="height: 30px;line-height: 30px;text-align: center;">第6名：李明义</div>
									<div style="color: #e3735c;text-align: center;">积分：690</div>
								</div>
							</div>
						</div>
						<div class="right-top">
							<span class="left" style="width: 18%;">推荐课程</span>
							<span class="left" style="border-bottom:1px solid #ccc;width: 64%;padding-top: 11px;"></span>
							<span class="right" style="color: #777;width:12%">更多></span>
						</div>
						<div style="margin-bottom: 17px;">
							<div class="tuwen">
								<div class="left"><img src="../assets/d1.jpg"/></div>
								<div class="left">
									<p>[觅食报表]全国最好的大学排名</p>
									<a href="javascript:;" style="color: #1794bb;">详情 ></a>
								</div>
							</div>
							<div class="tuwen">
								<div class="left"><img src="../assets/d2.jpg"/></div>
								<div class="left">
									<p>[课程]姓名保险学-侯老师</p>
									<a href="javascript:;" style="color: #1794bb;">详情 ></a>
								</div>
							</div>
							<div class="tuwen">
								<div class="left"><img src="../assets/d3.jpg"/></div>
								<div class="left">
									<p>如何做好活动运营-李老师开讲了</p>
									<a href="javascript:;" style="color: #1794bb;">详情 ></a>
								</div>
							</div>
						</div>
					</div>			
				</div>											
				
			</div>
  </main-layout>
</template>

<script>
  import MainLayout from '../layouts/Main.vue'

  export default {
    components: {
      MainLayout
    },
    data:function(){
	  	return{
	  		btnText:"显示全部",
				isShow:false
			}
	  },
    methods:{
	  	toggleFinish:function(){
	  		this.isShow = !this.isShow
				if(this.isShow){
					this.btnText = "收起"
				}else{
					this.btnText = "显示全部"
				}
	  	}
	  }
  }
</script>
<style scoped>
	@import '../assets/css/home.css'
</style>

