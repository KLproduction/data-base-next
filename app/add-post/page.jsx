'use client'
import { Button } from "@/components/ui/button"
import PostForm from "@/components/Form"
import Link from "next/link"


const addPost = () => {
  return (
    <div className="flex flex-col justify-center items-center">
        <h1>Add Post</h1>
        <PostForm/>
        <Button as Chlid>
            <Link href='/'>Back</Link>
        </Button>

    </div>
  )
}

export default addPost