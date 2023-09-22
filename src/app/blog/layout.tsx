import { REVALIDATE_TIME } from "@/config"

interface BlogLayoutProps {
  children: React.ReactNode
}

export const revalidate = REVALIDATE_TIME

export default function RootLayout(props: BlogLayoutProps) {
  const { children } = props
  return <div>{children}</div>
}
