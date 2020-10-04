<template>
    <div>
        <navigation/>
        <div>
            <router-view/>
        </div>
        <foot/>
    </div>
</template>

<script>
import navigation from './layout/navigation.vue';
import foot from './layout/foot.vue'
export default {
    components:{
        navigation,
        foot
    }
}
</script>