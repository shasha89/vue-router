<template>
	
  <div class="container">
  	<div class='heder'>
			<img src='../assets/logo-main.png' class='left header-left' />
			<div class='right header-right'>
					<a >
						欢迎光临：请您
					</a>
					<span class='login'>
						<a >
						登录
						</a>
						<a>
							/
						</a>
						<a>
							注册
						</a>
					</span>
					<img class='header-person' src='../assets/head-person.png' />
			</div>
		</div>
    <ul class='naver'>
      <li>
        <v-link href="/">工作台</v-link>
        <v-link href="/about">数据分析</v-link>
        <v-link href="/new">通讯录</v-link>
        <v-link href="/info">应用中心</v-link>
        <v-link href="/manage">管理工具</v-link>
      </li>
    </ul>

    <slot></slot>
  </div>
</template>

<script>	
  import VLink from '../components/VLink.vue'

  export default {
    components: {
      VLink
    }
  }
</script>

<style scoped>
	@import '../assets/css/main.css'
</style>
