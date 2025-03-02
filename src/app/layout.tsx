import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from '@/components/Footer'
import JsonLd from '@/components/JsonLd'
import FloatingCallButton from '@/components/FloatingCallButton'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'

const inter = Inter({ subsets: ["latin"] });

const title = 'BDB부동산 - 홍대입구 상가, 사무실 부동산 전문'
const description = '홍대, 합정, 연남동 지역 부동산 전문. 상가, 사무실 매매 및 임대차. 무권리, 통임대, 사옥, 카페, 스튜디오 등 다양한 매물 보유. 친절하고 전문적인 상담.'

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL('https://bdbagent.kr'),
  keywords: [
    '홍대부동산추천', '합정부동산추천', '홍대상가', '홍대사무실', '홍대부동산', 
    '홍대무권리', '합정상가', '합정부동산', '합정사무실', '연남동부동산', 
    '연남동상가', '연남동사무실', '망원동부동산', '망원동상가', '상수상가', 
    '망원동사무실', '상수사무실', '홍대통임대', '합정통임대', '비디비', 
    '홍대부동산투자', '매물관리센터', '홍대매물', '신촌부동산', '신촌상가',
    '홍대카페임대', '홍대작업실임대', '합정동카페임대', '스튜디오', 'BDB부동산'
  ],
  authors: [{ name: '최영건' }],
  creator: 'BDB부동산',
  publisher: 'BDB부동산',
  formatDetection: {
    telephone: false,
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  openGraph: {
    title,
    description,
    url: 'https://bdbagent.kr',
    siteName: 'BDB부동산',
    locale: 'ko_KR',
    type: 'website',
    images: [
      {
        url: '/favicon/android-icon-192x192.png',
        width: 192,
        height: 192,
        alt: 'BDB부동산'
      }
    ]
  },
  alternates: {
    canonical: 'https://bdbagent.kr'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1
    }
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <head>
        <JsonLd />
        <meta name="naver-site-verification" content="87a0c78c424cd2b7e68fb70695c441d4e5a39c2a" />
        <link rel="apple-touch-icon" sizes="57x57" href="/favicon/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/favicon/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/favicon/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/favicon/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/favicon/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/favicon/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/favicon/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/favicon/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/manifest.json" />
        <meta name="msapplication-TileColor" content="#2563eb" />
        <meta name="msapplication-TileImage" content="/favicon/ms-icon-144x144.png" />
        <meta name="theme-color" content="#2563eb" />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
        <FloatingCallButton />
      </body>
    </html>
  );
}
