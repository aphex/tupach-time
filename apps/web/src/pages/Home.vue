<template>
  <main class="min-h-screen relative flex justify-center items-center py-12 px-6 overflow-hidden bg-bg-deep text-text-body font-sans">
    <!-- Ambient glows for premium feel -->
    <div class="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden z-0">
      <div class="w-[80vw] h-[80vw] max-w-4xl max-h-4xl bg-brand-primary/10 rounded-full blur-[100px] absolute opacity-60 mix-blend-screen"></div>
      <div class="w-[60vw] h-[60vw] max-w-2xl max-h-2xl bg-brand-secondary/15 rounded-full blur-[100px] absolute ml-60 mt-40 mix-blend-screen"></div>
    </div>

    <!-- Main Content Container -->
    <div class="relative z-10 w-full max-w-4xl flex flex-col gap-12">
      <!-- Header Area -->
      <header class="text-center flex flex-col gap-4">
         <h1 class="text-5xl md:text-7xl font-extrabold tracking-tighter uppercase drop-shadow-md">
           <span class="text-gradient">Tupach Time</span>
         </h1>
         <p class="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto font-light leading-relaxed">
           The next evolution of the UNIX epoch. Shift the origin, delay the Year 2038 problem, and measure moments with poetic perfection.
         </p>
         
         <div class="flex flex-wrap items-center justify-center gap-4 mt-6">
           <a href="https://www.npmjs.com/package/tupach-time" target="_blank" class="glass-panel px-6 py-3 rounded-full font-medium hover:bg-white/10 transition-colors flex items-center gap-2 text-brand-primary border-brand-primary/20">
             Install npm Package
           </a>
         </div>
      </header>

      <!-- Grid for Data Display -->
      <section class="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        <!-- Numerical Tupach Time -->
        <div class="glass-panel rounded-2xl p-8 flex flex-col items-center justify-between text-center gap-4 group hover:border-brand-primary/40 transition-colors duration-500 h-full min-h-[280px]">
          <div class="text-white/50 text-sm font-semibold tracking-widest uppercase">Numerical (ms)</div>
          <div class="flex items-center justify-center flex-1 w-full min-h-[100px]">
            <div class="font-mono text-3xl md:text-5xl font-bold tracking-tight text-white tabular-nums drop-shadow-[0_0_12px_rgba(255,255,255,0.2)]">
              {{ currentTupachTime.toLocaleString() }}
            </div>
          </div>
          <p class="text-white/40 text-sm">
            Milliseconds since September 13, 1996<br/>Exactly 4:03 PM PDT
          </p>
        </div>

        <!-- Lexical Makaveli Cipher -->
        <div class="glass-panel rounded-2xl p-8 flex flex-col items-center justify-between text-center gap-4 group hover:border-brand-primary/40 transition-colors duration-500 h-full min-h-[280px]">
          <div class="text-white/50 text-sm font-semibold tracking-widest uppercase">The Makaveli Cipher</div>
          <div class="flex items-center justify-center flex-1 w-full min-h-[100px]">
            <div class="font-serif italic text-2xl md:text-3xl font-medium tracking-wide text-brand-primary/90 leading-tight">
              "{{ currentTupacCipher }}"
            </div>
          </div>
          <p class="text-white/40 text-sm">
            Mapped mathematically across a 64-word vocabulary.<br/>Exclusive to this exact second.
          </p>
        </div>
      </section>

      <!-- Why Tupach Time -->
      <section class="glass-panel rounded-3xl p-8 md:p-12 mt-4 text-left border-l-4 border-l-brand-primary">
        <h2 class="text-3xl font-bold mb-6 text-white tracking-tight">Why Shift The Epoch?</h2>
        <div class="flex flex-col gap-6 text-white/80 leading-relaxed text-lg">
          <p>
            Standard Unix time dictates that the epoch began exactly at `1970-01-01T00:00:00Z`. As it rapidly increments, we march ominously towards the <strong>Year 2038 Problem</strong>, where 32-bit signed integers will overflow.
          </p>
          <p>
            <strong class="text-brand-primary">Tupach Time</strong> remedies this. By pushing the origin timestamp forward to Tupac Shakur's exact time of death, we physically gain <strong class="text-white font-mono">842,655,780</strong> seconds. That yields roughly 26.7 extra years for constrained legacy systems, defending them against integer overflow until <strong class="text-white">December 2064</strong>.
          </p>
          <p>
            Beyond mathematics, the inclusion of the <strong class="text-brand-primary">Makaveli Cipher</strong> ensures every localized moment can be encrypted down to the millisecond into exclusive poetry based entirely on Tupac's prolific musical lexicon.
          </p>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { tupachTime, tupacTime as encodeCipher } from 'tupach-time'

const currentTupachTime = ref(tupachTime())
const currentTupacCipher = ref(encodeCipher())

let animationFrameId: number

const tick = () => {
  const now = new Date()
  currentTupachTime.value = tupachTime(now)
  
  // Floor to the nearest second so the cipher sentence only changes once a second.
  const nowSec = new Date(Math.floor(now.getTime() / 1000) * 1000)
  currentTupacCipher.value = encodeCipher(nowSec)
  
  animationFrameId = requestAnimationFrame(tick)
}

onMounted(() => {
  // Use requestAnimationFrame for completely fluid 1ms interval ticking on the UI
  animationFrameId = requestAnimationFrame(tick)
})

onUnmounted(() => {
  cancelAnimationFrame(animationFrameId)
})
</script>
