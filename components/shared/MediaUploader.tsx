import React from 'react'
import { useToast } from "@/components/ui/use-toast"

const MediaUploader = () => {
    const {toast} = useToast()
  return (
    <div>
        <Toaster />
    </div>
  )
}

export default MediaUploader
