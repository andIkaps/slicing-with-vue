<script setup>
import Layout from "@/components/Layout.vue";
import { ref } from "@vue/reactivity";
import linear from "@/assets/img/linear.png";
import forgotPasswordImage from "@/assets/img/forgot-password.png";
const email = ref("");
</script>

<template>
  <Layout>
    <template #title> Lupa kata sandi</template>
    <template #subtitle>
      Masukkan email yang kamu daftarkan sebelumnya, nanti kamu bakal dikirim
      email.
    </template>
    <template #form>
      <form
        class="flex flex-col gap-6 lg:gap-8"
        @submit.prevent=""
        autocomplete="off"
      >
        <div class="flex flex-col gap-3">
          <label for="email" class="font-semibold tracking-wide text-sm"
            >Email</label
          >
          <input
            type="email"
            name="email"
            id="email"
            placeholder="abcd@example.com"
            class="form-control"
            v-model="email"
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
          @click="$router.push('/reset-password')"
        >
          Euy!
        </button>
      </form>
    </template>
    <template #footer>
      Lah, inget lagi kata sandinya?
      <router-link to="/" class="text-primary">Login!</router-link>
    </template>

    <template #right>
      <img :src="linear" class="absolute top-0 w-full h-full z-0" alt="" />
      <img :src="forgotPasswordImage" class="w-full" alt="" />
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
          Nggak apa-apa lupa sama kata sandi, asalkan kita jangan sampe lupa
          sama jasa para pahlawan.
        </p>
      </div>
    </template>
  </Layout>
</template>

<style>
</style>