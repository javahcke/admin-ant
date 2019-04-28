<template>
    <div>
         <div>
            <a-row>
            <a-col :span="18" :push="6">
                <div>
                    <a-button-group>
                        <a-button type="primary">
                            <a-icon type="plus" />添加
                        </a-button>
                        <a-button v-action:a>测试</a-button>
                    </a-button-group>
                </div>
            </a-col>
            <a-col :span="6" :pull="18">
                <div>
                    <span>机构树</span>
                </div>
            </a-col>
            </a-row>
            
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
