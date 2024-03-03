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
            <div class="col-span-2 place-self-center self-start">
              <button
                class="mb-2 flex items-center justify-between rounded-full border border-gray-100 bg-gray-300 bg-opacity-20 bg-clip-padding px-2 py-2 backdrop-blur-lg backdrop-filter"
              >
                <icon icon="mdiSquareEditOutline" class="text-2xl" />
              </button>
              <button
                class="mb-2 flex flex-col items-center justify-between rounded-full border border-gray-100 bg-gray-300 bg-opacity-20 bg-clip-padding px-2 py-5 backdrop-blur-lg backdrop-filter"
              >
                <icon icon="mdiThumbUpOutline" class="text-2xl" />
                <divider class="my-2" />
                <icon icon="mdiThumbDownOutline" class="text-2xl" />
                <divider class="my-2" />
                <icon icon="mdiContentCopy" class="text-2xl" />
              </button>
              <button
                class="flex items-center justify-between rounded-full border border-gray-100 bg-gray-300 bg-opacity-20 bg-clip-padding px-2 py-2 backdrop-blur-lg backdrop-filter"
              >
                <icon icon="mdiDotsVertical" class="text-2xl" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="grid h-lvh w-full content-center p-20">
        <div class="mx-auto grid max-w-lg grid-cols-1">
          <div class="mb-12 text-center">
            <h1 class="mb-3 text-3xl font-semibold">
              Sign up free with {{ $t("appName") }}
            </h1>
            <p class="text-md text-gray-500">
              Empower your experience, sign up for a free account today
            </p>
          </div>
          <div class="grid grid-cols-1 gap-4">
            <form-text-field
              label="Email Address"
              placeholder="ex. email.example.com"
            />
            <form-text-field label="Password" placeholder="Enter password" />
          </div>
          <p class="mb-5 mt-8 text-center text-sm">
            By registering for an account, you are consenting to our
            <a href="#" class="text-[#5661F6]">Terms of Service</a> and
            confirming that you have reviewed and accepted the
            <a href="#" class="text-[#5661F6]">Global Privacy Statement</a>.
          </p>
          <button
            class="w-full rounded-full bg-[#5661F6] px-5 py-3.5 text-white"
          >
            Get started free
          </button>
          <p class="text-md mb-4 mt-6 text-center">
            Already have an account?
            <a href="#" class="text-[#5661F6]">Login</a>.
          </p>
          <div class="flex items-center justify-between">
            <hr class="w-full" />
            <span
              class="block shrink-0 px-5 text-center text-sm font-thin text-gray-400"
              >Or better yet..</span
            >
            <hr class="w-full" />
          </div>
          <button
            class="my-4 w-full rounded-full border border-gray-200 px-5 py-3.5 text-black"
          >
            Continue with Google
          </button>
          <button
            class="w-full rounded-full border border-gray-200 px-5 py-3.5 text-black"
          >
            Continue with Apple
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
