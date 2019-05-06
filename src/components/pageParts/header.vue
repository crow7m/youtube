<template>
    <div class="page-header">
        <span class="heading">YouTube</span>
    </div>
</template>
<script>
    export default {
        name: "header"
    }
</script>

<style lang="less">
    .page-header{
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        height: 48px;
        background: #ed3330;
        z-index: 9;
        color: #ffffff;
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
        flex: 0 0 auto;
        font-size: 24px;
        align-items: center;
        justify-content: center;
        .heading{
            vertical-align: middle;
            line-height: 48px;
        }
    }

</style>