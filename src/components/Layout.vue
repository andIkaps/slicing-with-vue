<script setup>
import Logo from "./Logo.vue";
</script>

<template>
  <div class="flex md:h-full md:items-center">
    <div
      class="
        w-full
        px-6
        py-8
        md:px-14 md:py-0
        lg:w-1/2 lg:px-36
        overflow-hidden
      "
    >
      <router-link to="/">
        <Logo class="w-10 lg:w-14" />
      </router-link>
      <div class="my-3 lg:my-10">
        <h1 class="font-semibold text-xl lg:text-2xl tracking-wide mb-2">
          <slot name="title"></slot>
        </h1>
        <p class="text-muted text-sm tracking-wide">
          <slot name="subtitle"></slot>
        </p>
      </div>
      <slot name="form"></slot>
      <h3 class="font-semibold text-sm text-center mt-5">
        <slot name="footer"></slot>
      </h3>
    </div>
    <div class="hidden lg:block lg:w-1/2">
      <div
        class="
          w-full
          h-screen
          bg-gradient-to-b
          from-[#3730A3]
          to-[#312E81]
          relative
          flex flex-col
          justify-center
        "
      >
        <slot name="right"></slot>
      </div>
    </div>
  </div>
</template>