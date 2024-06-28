import React from 'react'
import { useToast } from "@/components/ui/use-toast"
import { CldUploadWidget } from 'next-cloudinary';

const MediaUploader = () => {
    const {toast} = useToast()
    const onUploadSuccessHandler = (result: any) =>{

    }
    const onUploadErrorHandler = () => {
      toast({
        title: 'Something went wrong while uploading',
        description: 'Please try again',
        duration: 5000,
        className: 'error-toast' 
      })
    }
  return (
    <div>

<CldUploadWidget uploadPreset="jsm_imaginify"
options={{
  multiple: false,
  resourceType: "image",
}}
onSuccess={onUploadSuccessHandler}
onError={onUploadErrorHandler}
>

</CldUploadWidget>
    </div>
  )
}

export default MediaUploader
