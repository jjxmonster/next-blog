"use client";
import { PostsHeader } from "@/components/ui/posts-header";
import { Button } from "@nextui-org/button";
import { Input, Textarea } from "@nextui-org/input";
import { FormEvent } from "react";

export default function Contact() {
  const handlSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <section>
      <PostsHeader title="Contact Us" />
      <form onSubmit={handlSubmit} className="grid grid-cols-2 mt-10 gap-5">
        <Input label="Name" />
        <Input label="Email" />
        <Textarea label="Message" className="col-span-2" />
        <Button className="col-span-2" type="submit" color="primary">
          Send
        </Button>
      </form>
    </section>
  );
}
