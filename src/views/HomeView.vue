<template>
    <div class="main">
        <div class="left item"></div>
        <div class="center">
            欢迎来到我的世界！
        </div>
        <div class="right item"></div>
    </div>
</template>

<style lang="scss" scoped>
.main{
    display: flex;
    flex: 1;
    position: relative;
    overflow: hidden;
    .left{
        border-right: 36px solid rgba($color: #f8c006, $alpha: 0.3);
        margin-right: 5px;
        animation: openleft 5s forwards 2s;
        
    }
    .right{
        border-left: 36px solid rgba($color: #f8c006, $alpha: 0.3);
        margin-left: 5px;
        animation: openright 5s forwards 2s;
    }
    .center{
        position: absolute;
        top: 40%;
        font-size: 30px;
        width: 100%;
        text-align: center;
        animation: opencenter 7s forwards;
    }
    .item{
        position: relative;
        flex: 1;
    }
}

</style>