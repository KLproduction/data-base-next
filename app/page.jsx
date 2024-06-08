import Image from "next/image";
import prisma from "@/lib/prisma";
import Post from "./components/Post";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button"
import DeleteBtn from "./components/DeleteBtn";

async function getPost(){
  const posts = await prisma.post.findMany({
    where:{
      published:true,
    },
      include:{
        author:{
          select:{name:true}
        }
      }
    
  })

  return posts;
}

export default async function Home() {
  const posts = await getPost();
  console.log(posts)

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div>
        <Button asChild>
          <Link href="/add-post">Add Post</Link>
        </Button>

        <h1>Feed</h1>
        {
          posts.map((post)=>{
            // console.log('Post ID:', post.id);
            return(
              <div key={post.id} className="flex flex-col gap-3">
                  <Post 
                id={post.id} 
                title={post.title} 
                content={post.content} 
                authorName={post.author.name}/>

                <DeleteBtn postId={post.id}/>

              </div>
            )
          })
        }

      </div>
    </main>
  );
}
