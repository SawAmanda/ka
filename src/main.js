// 1.0.1 导入Vue核心包
import Vue from 'vue';
// 1.0.2 导入mint-ui组件
import mintui from 'mint-ui';
// 1.0.3 导入mint-ui的css文件
import 'mint-ui/lib/style.min.css';
// 1.0.4 在Vue中全局使用mintui
Vue.use(mintui);
// 1.0.5 导入mui的css文件
import '../statics/mui/css/mui.css';
// 1.0.6 导入矢量库的css文件
import '../statics/footercss/iconfont.js';

// 2.0 导入App.vue的vue对象
import App from './App.vue';

// 4.0 导入当前系统的全局基本样式
import '../statics/css/site.css';

// 5.0.1 导入vue-resource注入$http对象使用ajax请求
import vueResource from 'vue-resource';
// 5.0.2 在Vue中全局使用vue-resource
Vue.use(vueResource);

// 3.0.1 将vue-router路由集成到项目中
import VueRouter from 'vue-router';
// 3.0.2 绑定vueRouter对象到Vue对象上
Vue.use(VueRouter);
// 3.0.3 导入路由规则对应组件对象
import home from './components/Home.vue';
import pet from './components/pet/chongwu.vue';
import address from './components/address/dizhi.vue';
import wechat from './components/wechat/weixin.vue';
import pet_content from './components/pet/pet_content/pet_content.vue';
// 3.0.4 定义路由规则
var router = new VueRouter({
    linkActiveClass : 'mui-active',
    routes : [
        //当服务器启动的时候进入home页面
        {path:'/',redirect: '/home'},
        {path:'/home',component: home},
        {path:'/pet',component:pet},
        {path:'/address',component:address},
        {path:'/wechat',component:wechat},
        {path:'/pet/pet_content/:id',component: pet_content}
    ]
});

// 3.0 利用Vue对象进行解析渲染
new Vue({
    el: '#app',
    // 使用路由对象实例
    router:router,
    render: c=>c(App)
});