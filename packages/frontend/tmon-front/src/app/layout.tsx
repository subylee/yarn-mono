import type { Metadata } from 'next'

import Header from "../../../../libs/frontend/components/sharedarea/Header";
import Gnb from "../components/Gnb";
import Footer from "../../../../libs/frontend/components/sharedarea/Footer";
import Skip from "../components/Skip";


export const metadata: Metadata = {
  title : "NEW TMON NextJS Site",
  description : "새롭게 한번 시작해서 만들어 봅시다.",
  keywords:["포트폴리도", "리액트", "next.js"],
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
              <link rel="stylesheet" href="https://img1.tmon.kr/fe/release/service/static/markup/pc/css/common.css?v=202307270900"/>
              <link rel="stylesheet" href="https://img1.tmon.kr/fe/release/service/static/markup/pc/css/home.css?v=202307270900"/>

      </head>
      
      <body>
    <div id="wrap">
      <Skip />
      <Header/>
      <Gnb/>
      <hr/>
	    <div id="container">
        <div id="contents_head">
        </div>

        <div className="ct_inner">
          {children}
        </div>
      </div>
      <hr/>
      <Footer/>

    </div>
    </body>
    </html>
  )
}
