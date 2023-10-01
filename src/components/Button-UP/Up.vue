<template>
    <Transition name="fade">
        <div id="up" v-show="scY > 500" @click="ToTop()">
            <i class="fa-solid fa-chevron-up"></i>
        </div>
    </Transition>
</template>
<script>

export default {
    name: 'Up',
    data() {
        return {
            scY: 0
        }
    },
    mounted() {
        window.addEventListener("scroll", this.handleScroll)
    },
    methods: {
        handleScroll: function () {
            this.scY = window.scrollY
        },
        ToTop() {
            window.scrollTo(0, 0)
        }
    },

}
</script>
<style lang="scss" scoped>
#up {
    background-color: white;
    position: fixed;
    bottom: 25px;
    right: 25px;
    padding: 10px;
    border-radius: 3px;
    cursor: pointer;
    z-index: 1000;
    display: flex;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>