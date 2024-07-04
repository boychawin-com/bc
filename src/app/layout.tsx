import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });


export function generateMetadata(): Metadata {
  const title = "boychawin.com"
  const description = "This website is a free code collection and open source library and SDK that has content of interest to general software developers and web application developers."

  return {

    // metadataBase: new URL("/"),
    title,
    description,
    authors: [{ name: "boychawin", url: "/" }],
    keywords: ["guwork", "boychawin.com"],
    icons: [{ rel: "icon", url: "/favicon.ico" }, { rel: "apple-icon", url: "/favicon.ico" }, { rel: "apple-touch-icon", url: "/favicon.ico" }],
    alternates: {
      canonical: '/',
      languages: {
        'en-US': '/en-US',
        'th': '/th',
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      title,
      description,
      url: "",
      siteName: "boychawin.com",
      locale: "en_US",
      type: "website",
      images: [
        {
          url: '/favicon.ico',
          // width: 800,
          height: 600,
        },
        {
          url: '/favicon.ico',
          // width: 1800,
          height: 1600,
          alt: 'boychawin.com',
        },
      ],

    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: "@boychawin",
    },
  }
}


export default function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // const GA_TRACKING_ID = "G-WCL5PRERPF";


  return (<html
    lang={locale}
    className={`scroll-smooth`}
    suppressHydrationWarning
  >

    <head>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <link rel="apple-touch-icon" sizes="76x76" href="/logo-dark.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/logo-dark.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/logo-dark.png" />
      {/* <link rel="manifest" href="/static/favicons/site.webmanifest" /> */}
      <link rel="mask-icon" href="/favicon.ico" color="#058043" />
      <meta name="theme-color" media="(prefers-color-scheme: light)" content="#fff" />
      <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#000" />
      {/* <link rel="alternate" type="application/rss+xml" href="/feed.xml" /> */}

      <meta name="twitter:image" content="/logo-dark.png" />
      <meta name="twitter:image:type" content="image/png" />
      <meta name="twitter:image:width" content="76" />
      <meta name="twitter:image:height" content="76" />
      <meta name="author" content="boychawin.com" />
      <meta property="fb:admins" content="BoyChawin" />
      <meta property="fb:app_id" content="3710740645722239" />
      <meta
        property="article:author"
        content="https://www.facebook.com/boychawincom"
      />
      <meta
        name="facebook-domain-verification"
        content="04vqwnnmyu1lzmxnmz72jnw1ovz8lh"
      />
      <meta
        property="article:publisher"
        content="https://www.facebook.com/boychawincom"
      />
      <meta name="propeller" content="36ac1415f9eb6cc8b69b9ee62158eab1" />
      <meta name="google-site-verification" content="rQdwXov7rOwWi0r6EKmqOkQFY7WsBiL6tZ9aAleVIJs" />

     
    </head>
 
    <body className={"antialiased  font-mono text-gray-600 min-h-full  flex flex-col  bg-gradient-to-r from-gray-100  from-10%  via-gray-100   to-emerald-200    dark:from-gray-900   dark:via-gray-900   dark:to-emerald-900"} >
      <Suspense fallback={<>...</>}>
     
          <main className={"flex pb-10 px-0  container mx-auto max-w-5xl items-stretch flex-col  sm:px-0  min-h-screen "}>
            {children}
          </main>
        
      </Suspense>
    </body>
  </html>
  );
}