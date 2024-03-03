<script lang="ts" setup>
definePageMeta({
  title: "pages.title.top",
});
const { t } = useI18n();
</script>
<template>
  <div class="h-lvh w-lvw">
    <div class="grid grid-cols-2">
      <div
        class="relative h-lvh overflow-hidden bg-[url('~/assets/img/chat-bg.png')] bg-cover"
      >
        <div class="relative z-10 p-24 text-white">
          <h1 class="mb-5 text-6xl font-semibold">
            {{ $t("pages.login.headingA") }}
          </h1>
          <h1 class="mb-16 ms-16 text-6xl font-semibold">
            {{ $t("pages.login.headingB") }}
          </h1>
          <div class="grid grid-cols-12">
            <div class="col-span-10">
              <p class="text-lg">
                {{ $t("pages.login.subHeading") }}
              </p>
              <button
                class="my-5 flex items-center rounded-full border-2 border-[#8F96FA] bg-[#6F79F8] px-4 py-1.5"
              >
                <span>{{ $t("appName") }}</span>
                <icon
                  icon="mdiArrowBottomRightThinCircleOutline"
                  class="ms-3 h-4"
                />
              </button>
              <p
                class="bg-text-gradient text-md mb-6 bg-clip-text text-transparent"
              >
                {{ $t("pages.login.messageA") }}
              </p>
              <p
                class="bg-text-gradient text-md mb-6 ms-4 bg-clip-text text-transparent"
              >
                {{ $t("pages.login.messageB") }}
              </p>
              <p
                class="bg-text-gradient text-md mb-6 ms-4 bg-clip-text text-transparent"
              >
                {{ $t("pages.login.messageC") }}
              </p>
              <p
                class="bg-text-gradient text-md mb-10 bg-clip-text text-transparent"
              >
                {{ $t("pages.login.messageD") }}
              </p>

              <div
                class="flex items-center justify-between rounded-full border border-gray-100 bg-gray-300 bg-opacity-30 bg-clip-padding px-2 py-2 backdrop-blur-lg backdrop-filter"
              >
                <div class="flex items-center">
                  <icon icon="mdiEmoticonHappyOutline" class="text-4xl" />
                  <p class="ms-5 text-lg opacity-75">Reply ...</p>
                </div>
                <div class="flex items-center">
                  <button class="ms-5 flex items-center">
                    <icon icon="mdiImageOutline" class="text-3xl" />
                  </button>
                  <button
                    class="ms-2 flex items-center rounded-full bg-[#6F79F8] p-2"
                  >
                    <icon icon="mdiChevronRight" class="text-2xl" />
                  </button>
                </div>
              </div>
            </div>
            <div class="col-span-2">Buttons</div>
          </div>
        </div>
      </div>
      <div class="h-lvh w-full p-20">
        <div>asda what aht</div>
      </div>
    </div>
  </div>
</template>
