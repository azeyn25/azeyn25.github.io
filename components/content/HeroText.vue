<template>
  <div class="not-prose lg:max-w-3xl mx-auto pt-8 lg:pt-44 content-visibility-auto contain-intrinsic-size-[auto_400px]">
    <div class="flex flex-col gap-9">
      <h1 class="text-center font-display font-light leading-snug text-3xl md:text-4xl lg:text-5xl text-zinc-700 dark:text-zinc-300">
        <slot> Weaving narrtives and revealing emotions, frame by frame. one click at a time. </slot>
      </h1>
      <p class="text-zinc-700 dark:text-zinc-400 text-center text-sm lg:text-base px-0 md:px-14 lg:px-24">
        <slot name="description"> Dive into my photography collection, each print a captured moment through my lens. Ready to add beauty and emotion to your space? Contact me for high-quality prints that bring your walls to life. </slot>
      </p>
    </div>
  </div>
</template>
