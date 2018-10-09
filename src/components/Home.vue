<template>

    <div id="tmpl">
        <!-- 利用mint-ui的轮播图组件 -->
        <mt-swipe :show-indicators="false">
            <mt-swipe-item v-for="item in list">
                <img :src="item.img">
            </mt-swipe-item>
        </mt-swipe>

        <!-- 利用MUI的九宫格样式实现导航 -->
        <div class="mui-content">
            <ul class="mui-table-view mui-grid-view mui-grid-9">
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <a href="#">
                        <span class="mui-icon mui-icon-home"></span>
                        <div class="mui-media-body">Home</div>
                    </a>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <a href="#">
                        <span class="mui-icon mui-icon-email">
                            <span class="mui-badge">5</span>
                        </span>
                        <div class="mui-media-body">Email</div>
                    </a>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <a href="#">
                        <span class="mui-icon mui-icon-chatbubble"></span>
                        <div class="mui-media-body">Chat</div>
                    </a>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <a href="#">
                        <span class="mui-icon mui-icon-location"></span>
                        <div class="mui-media-body">location</div>
                    </a>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <a href="#">
                        <span class="mui-icon mui-icon-search"></span>
                        <div class="mui-media-body">Search</div>
                    </a>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <a href="#">
                        <span class="mui-icon mui-icon-phone"></span>
                        <div class="mui-media-body">Phone</div>
                    </a>
                </li>
            </ul> 
		</div>


    </div>
</template>

<script>
export default {
    data() {
        return {
            list: []
        }
    },
    created() {
        this.getimgs();
    },
    methods: {
        getimgs(){
            var url = "../../statics/json/banner-img.json";

            this.$http.get(url).then(function(res){
                var data = res.body;
                if (data.status != 0) {
                    Toast (错误);
                    return;
                }
                this.list = data.message;
            })
        }
    }
}
</script>

<style scoped>
.mint-swipe, .mint-swipe-items-wrap {
    background-color: #000;
    height: 800px;
    color: #fff;
}
.mint-swipe, .mint-swipe-items-wrap img {
    display: block;
    width: 100%;
}

.mui-content,.mui-content > .mui-table-view:first-child {
    background-color: #fff;
}

.mui-grid-view.mui-grid-9 .mui-table-view-cell{
    border-bottom: 0;
    border-right: 0;
}

.mui-grid-view.mui-grid-9{
    border-top: 0;
    border-bottom: 0;
}

</style>
