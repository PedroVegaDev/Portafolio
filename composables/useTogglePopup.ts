const isPopup = ref(false)
const initialData = {
  name: '',
  thumbnail: '',
  image: '',
  repositorie: '',
  description: '',
  tech: '',
  url: ''
}
const data = ref(initialData)

export default function () {
  const togglePopup = () => {
    isPopup.value = !isPopup.value
  }

  const onTogglePopup = (newData: typeof initialData) => {
    togglePopup()
    data.value = newData
  }

  return {
    data,
    isPopup,
    onTogglePopup,
    togglePopup
  }
}
