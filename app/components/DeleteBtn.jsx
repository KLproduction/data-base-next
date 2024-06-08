'use client'
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"



export default function DeleteBtn({ postId }) {
    const router = useRouter();
  
    async function handleClick() {
      try {

        const url = `${process.env.NEXT_PUBLIC_API_URL}/api/post-end/${postId}`;
        await fetch(url, {
          method: "DELETE"
          });
          console.log("message: Post deleted successfully")
          router.refresh();
      } catch (err) {
        console.error('Error in fetch:', err);
      }

      
    }
  
    return (
      <Button onClick={handleClick}>Delete</Button>
    );
  }