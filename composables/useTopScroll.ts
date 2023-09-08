const isTopScroll = ref(true)

const onScroll = () => {
  isTopScroll.value = !window.scrollY
}

export default function useTopScroll() {
  onMounted(() => {
    window.addEventListener('scroll', onScroll)
  })

  return {
    isTopScroll,
    onScroll
  }
}
