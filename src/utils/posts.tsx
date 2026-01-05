import matter from "gray-matter"

export interface Post {
  title: string
  description: string
  date: string
  slug: string
  content: string
  category: string
}

export const getPosts = async (): Promise<Post[]> => {
  const files = import.meta.glob("../blog/*.md", { as: "raw" })
  const posts: Post[] = []

  for (const path in files) {
    const raw = await files[path]()
    const { data, content } = matter(raw)

    posts.push({
      title: data.title,
      description: data.description,
      date: data.date,
      slug: data.slug,
      content,
      category: data.category
    })
  }

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
}
