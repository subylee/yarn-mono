import type { Metadata } from 'next'


export const metadata: Metadata = {
  title : "BestSeller Page",
  description : "베셀 페이지 나오나?",
  keywords:["포트폴리도", "리액트", "next.js"],
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>Best Layout
    <br></br>
    {children}
    </>
  )
}
