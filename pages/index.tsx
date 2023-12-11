import React, { useState } from 'react'

import Head from 'next/head'
import Image from 'next/image'

//components
import { BackgroundImage1, BackgroundImage2, FooterLink, Footercon, GenerateQuoteButton, GenerateQuoteButtonText, GradientBackgroundCon, QuoteGeneratorCon, QuoteGeneratorInnerCon, QuoteGeneratorSubTitle, QuoteGeneratorTitle } from '@/components/QuoteGenerator/QuoteGeneratorElements'


//assets
import idea1 from '@/assets/idea-bulb.jpg'
import idea2 from '@/assets/lightbulb-idea-vector-1899962.jpg'
 
export default function Home() {
  const [numberOfQuotes, setNumberOfQuotes] = useState<Number | null>(0)

  return (
    <>
      {/* header */}
      <Head>
        <title>Quote Generator</title>
        <meta name="description" content="A fun project to generate quotes :D" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* quote modal popUP */}
      {/* <QuoteGeneratorModal/> */}

      {/* quote Generator */}
      <QuoteGeneratorCon>
        <QuoteGeneratorInnerCon>
          <QuoteGeneratorTitle>
            Daily Inspiration Generator
          </QuoteGeneratorTitle>

          <QuoteGeneratorSubTitle>
            Looking for a splash of inspiration? Generate a quote card with a random inspirational quote provided by 
            <FooterLink href="https:/zenquotes.io/" target="_blank" rel="noopener noreferrer">ZenQuotes API</FooterLink>
          </QuoteGeneratorSubTitle>

          <GenerateQuoteButton>
            <GenerateQuoteButtonText onClick={null}>
              Make a Quote
            </GenerateQuoteButtonText>
          </GenerateQuoteButton>
        </QuoteGeneratorInnerCon>
      </QuoteGeneratorCon>
      
      {/* Background */}
      <GradientBackgroundCon>
      <BackgroundImage1
        src={idea1}
        height="300"
        alt="ideaBulb1"/>

      <BackgroundImage2
      src={idea2}
      height="300"
      alt="ideaBulb1"/>

      <Footercon>
        <>
        Quotes Generated: {numberOfQuotes}
        <br />
        YaY! :D
        </>
      </Footercon>

      </GradientBackgroundCon>


    </>
  )
}
//1:50 backend svg