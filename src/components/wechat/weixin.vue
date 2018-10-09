<template>
    <div id="tmpl">
        <div id="wechat_img">
            <img :src="wechat_img">
        </div>
        <div id="wechat_text">
            <h2>老板微信</h2>
        </div>
    </div>
</template>

<script>
export default {
     data(){
        return {
            wechat_img : "http://localhost:8080/statics/image/wechat/wechat.jpg",
        }
    }
}
</script>

<style scoped>
#wechat_img {
    width: 80%;
    margin: 80px auto 20px auto;
}
#wechat_img img {
    width: 100%;
}

#wechat_text {
    text-align: center;
    margin-bottom: 100px;
    color: #ffc0cb;
}
#wechat_text h2 {
    font-weight: 400;
}
</style>
