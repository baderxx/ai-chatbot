<script lang="ts" setup>
definePageMeta({
  title: "pages.title.top",
});
const { t } = useI18n();
</script>
<template>
  <div class="h-lvh w-lvw">
    <div class="grid grid-cols-2">
      <div class="relative h-lvh overflow-hidden">
        <div
          class="bg-login-gradient absolute left-0 top-0 h-lvh w-full blur-[110px]"
        />
        <div class="relative z-10 p-24 text-white">
          <h1 class="mb-16 text-5xl font-light">
            Learn, discover & Automate in one place.
          </h1>
          <div class="grid grid-cols-12">
            <div class="col-span-10">
              <p class="text-lg">
                Create a chatbot gpt using python language what will be step for
                that
              </p>
              <button
                class="mb-5 mt-8 flex items-center rounded-full border-2 border-[#8F96FA] bg-[#6F79F8] px-4 py-1.5"
              >
                <span>CHAT A.I +</span>
                <icon
                  icon="mdiArrowBottomRightThinCircleOutline"
                  class="ms-3 h-4"
                />
              </button>
              <p class="mb-6">
                Sure, I can help you get started with creating a chatbot using
                GPT in Python. Here are the basic steps you'll need to follow:
              </p>
              <p class="mb-6 ms-4">
                1. Sure, I can help you get started with creating a chatbot
                using GPT in Python. Here are the basic steps you'll need to
                follow:
              </p>
              <p class="mb-6 ms-4">
                2.Load the pre-trained model: GPT comes in several sizes and
                versions, so you'll need to choose the one that fits your needs.
                You can load a pre-trained GPT model. This
              </p>
              <p class="mb-6">
                These are just the basic steps to get started with a GPT chatbot
                in Python. Depending on your requirements, you may need to add
                more features or complexity to the chatbot. Good luck!
              </p>
            </div>
            <div class="col-span-2">Buttons</div>
          </div>
        </div>
      </div>
      <div>right</div>
    </div>
  </div>
</template>
