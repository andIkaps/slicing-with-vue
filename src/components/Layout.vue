<script setup>
import Logo from "./Logo.vue";
</script>

<template>
  <div class="flex px-6 py-8">
    <div class="w-full">
      <Logo class="w-10" />
      <div class="my-3">
        <h1 class="font-semibold text-xl tracking-wide mb-2">
          <slot name="title"></slot>
        </h1>
        <p class="text-muted text-sm tracking-wide">
          <slot name="subtitle"></slot>
        </p>
      </div>
      <slot name="form"></slot>
      <h3 class="font-semibold text-sm text-center mt-5">
        Belum punya akun?
        <router-link to="/" class="text-primary"
          >Daftar sekarang, gratis!</router-link
        >
      </h3>
    </div>
    <div class="hidden">
      <slot name="right"></slot>
    </div>
  </div>
</template>