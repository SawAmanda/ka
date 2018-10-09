<template>
    <div id="tmpl">
        <div id="location_img">
            <img :src="location_img">
        </div>
        <div id="location_text">
            <h2>森尼宠物店</h2>
            <h3>位于厦门市湖里区穆厝路9号101单元</h3>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            location_img : "http://localhost:8080/statics/image/address/address.jpg",
        }
    }
}
</script>

<style scoped>
#location_img {
    width: 80%;
    margin: 80px auto 20px auto;
}
#location_img img {
    width: 100%;
}

#location_text {
    text-align: center;
    margin-bottom: 100px;
    color: #ffc0cb;
}
#location_text h2,h3 {
    font-weight: 400;
}

</style>
