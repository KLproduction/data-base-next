'use client'

import React, { useState } from 'react';
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';



function PostForm() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try{
             await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/add-post-end`,{
                method:"POST",
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({title,content})
            })
        }catch(err){
            console.error(err);
        }
        router.refresh();
        setTitle('');
        setContent('');
    };

    return (
        <form onSubmit={handleSubmit} className=''>
            <div className=' border-b-2 border-zinc-900 flex flex-col justify-between'>
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} // Update title state on change
                    required
                    className=' bg-gray-200'
                />
            </div>
            <div className=' border-b-2 border-zinc-900 flex flex-col justify-between'>
                <label htmlFor="content" className=''>Content:</label>
                <textarea
                    id="content"
                    name="content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)} // Update content state on change
                    required
                    className=' border border-zinc-950'
                />
            </div>
            <div>
                <Button type="submit">Submit</Button>
            </div>
        </form>
    );
}

export default PostForm;
