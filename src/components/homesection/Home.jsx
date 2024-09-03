import React from 'react'
import { Hero } from './Hero'
import { Popular } from './Popular'
import { Offer } from './items/Offer'
import { NewCollections } from './items/NewCollections'
import { NewsLetter } from './items/NewsLetter'

export const Home = () => {
  return <>
  <Hero/>
  <Popular/>
  <Offer/>
  <NewCollections/>
  <NewsLetter/>
  </>
}
