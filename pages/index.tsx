import Head from 'next/head'
import Image from 'next/image'
import { GradientBackgroundCon } from '@/components/QuoteGenerator/QuoteGeneratorElements'

 
export default function Home() {
  return (
    <>
      {/* header */}
      <Head>
        <title>Quote Generator</title>
        <meta name="description" content="A fun project to generate quotes :D" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {/* Background */}
      <GradientBackgroundCon></GradientBackgroundCon>


    </>
  )
}
