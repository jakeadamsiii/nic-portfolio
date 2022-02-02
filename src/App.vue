<template>
    <transition name="roll" mode="out-in">
        <router-view class="roll-mask"/>
    </transition>
</template>

<style>

/* leaving */
.roll-mask::after {
    content: "";
    position: fixed;
    left: 0;
    top: 100%;
    background: #000;
    height: 100%;
    width: 100%;
    transition-duration: .75s;
    transition-property: top;
    transition-timing-function: ease;
}

.roll-leave::after {
    top: 100%;
}

.roll-leave-to::after {
     top: 0%;
}

.roll-enter::after {
    top: 0;
}

.roll-enter-to::after {
    top: -100%;
}

</style>