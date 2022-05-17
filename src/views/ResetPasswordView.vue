<script setup>
import Layout from "@/components/Layout.vue";
import { ref } from "@vue/reactivity";
import linear from "@/assets/img/linear.png";
import resetPasswordImage from "@/assets/img/reset-password.png";
const password = ref("");
const confirm_password = ref("");
</script>

<template>
  <Layout>
    <template #title> Atur ulang kata sandi</template>
    <template #subtitle>
      Jangan pake kata sandi yang susah-susah makannya, ngerepotin mulu jadi
      orang.
    </template>
    <template #form>
      <form
        class="flex flex-col gap-6 lg:gap-8"
        @submit.prevent=""
        autocomplete="off"
      >
        <div class="flex flex-col gap-3">
          <label for="password" class="font-semibold tracking-wide text-sm"
            >Kata Sandi Baru</label
          >
          <input
            type="password"
            name="password"
            id="password"
            class="form-control"
            v-model="password"
          />
        </div>
        <div class="flex flex-col gap-3">
          <label for="password" class="font-semibold tracking-wide text-sm"
            >Konfirmasi Kata Sandi</label
          >
          <input
            type="password"
            name="confirm_password"
            id="confirm_password"
            class="form-control"
            v-model="confirm_password"
          />
        </div>

        <button
          class="
            bg-primary
            w-full
            text-white
            p-3
            rounded-md
            shadow-md
            hover:bg-blue-600
            transition-colors
            font-semibold
            tracking-wider
            active:ring-2 active:ring-primary/50 active:ring-offset-2
            lg:text-sm lg:p-5
          "
          @click="$router.push('/')"
        >
          Atur ulang
        </button>
      </form>
    </template>

    <template #right>
      <img :src="linear" class="absolute top-0 w-full h-full z-0" alt="" />
      <img :src="resetPasswordImage" class="w-full" alt="" />
      <div class="w-[70%] mx-auto mt-10">
        <span
          class="
            text-uppercase
            font-semibold
            text-white/60 text-sm
            tracking-wider
          "
          >NAMANYAJUGABELAJAR.IO</span
        >
        <p class="text-2xl tracking-wider text-white mt-2">
          Biar nanti nggak lupa lagi sama kata sandinya, disimpen di password
          manager ya, bang!
        </p>
      </div>
    </template>
  </Layout>
</template>

<style>
</style>