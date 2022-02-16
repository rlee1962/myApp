import { useState, useRef, useEffect } from "react"

const useDropdown = () => {
  const [showDropdown, setShowDropdown] = useState(false)
  const dropRef = useRef()
  useEffect(() => {
    if (dropRef && dropRef.current) {
      // ensure that relative class is added to the wrapper
      dropRef.current.classList.add("relative")
    }
  }, [])
  useEffect(() => {
    const dropdownListener = (e) => {
      if (!dropRef.current || dropRef.current.contains(e.target)) {
        return
      } else {
        setShowDropdown(false)
      }
    }
    document.addEventListener("mousedown", dropdownListener)
    return () => document.removeEventListener("mousedown", dropdownListener)
  }, [dropRef])

  return [showDropdown, setShowDropdown, dropRef]
}

export default useDropdown
