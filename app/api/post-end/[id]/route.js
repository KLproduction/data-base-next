import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function DELETE(req, { params }) {
  const exPost = await prisma.post.findUnique({ where: { id: params.id } });
  if (!exPost) {
    return res.status(404).json({ message: "Post not found" });
  }
  const id = params.id;
  const post = await prisma.post.delete({
    where: { id },
  });
  return NextResponse.json(post);
}
