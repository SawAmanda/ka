<template>
    <div>
        <!-- 利用mint-ui中的header组件实现头部header -->
        <mt-header fixed title="森尼宠物店"></mt-header>

        <router-view></router-view>

    
        <!-- 利用mui的底部消息组件实现footer -->
        <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-dianpu"></use>
                    </svg>
                </span>
				<span class="mui-tab-label">森尼</span>
			</router-link>
			<router-link class="mui-tab-item" to="/pet">
				<span class="mui-icon mui-icon-email">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-chongwu"></use>
                    </svg>
                </span>
				<span class="mui-tab-label">爱宠</span>
			</router-link>
			<router-link class="mui-tab-item" to="/address">
				<span class="mui-icon mui-icon-contact">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-dizhi"></use>
                    </svg>
                </span>
				<span class="mui-tab-label">地址</span>
			</router-link>
			<router-link class="mui-tab-item" to="/wechat">
				<span class="mui-icon mui-icon-gear">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-weixin"></use>
                    </svg>
                </span>
				<span class="mui-tab-label">微信</span>
			</router-link>
		</nav>

    </div>
</template>

<script>
//导入需要组件
//import {add} from './calc.js';

// 负责导出 .vue组件对象
export default {
    data(){
        return {
            
        }
    },
    methods: {

    },
    created(){

    }
}
</script>

<style scoped>
/*  scoped 表示这里面写的css代码只在当前组件页有效 */
</style>
