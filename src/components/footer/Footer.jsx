import React from 'react'
import { Link } from 'react-router-dom'
import FOOTER_lINKS from '../../Datas/FooterLinks'
import FOOTER_CONTACT_INFO from '../../Datas/Contact'
   
export const Footer = () => {
  return (
    <footer className='flex items-center pb-24 pt-20 bg-orange-500'>
      <div className="flex w-full flex-col gap-14 px-[20px]">
        <div className='flex flex-col items-start justify-center gap-[10%] md:flex-row'>
          <Link to="/" className='text-3xl font-bold'>
          Eco shop mart
          </Link>
          <div className="mt-10 flex flex-wrap gap-8 sm:justify-between md:flex-1">{FOOTER_lINKS.map((col)=>(
            <FooterColumn title={col.title} key={col.title}>
              <ul className='pt-4 flex flex-col gap-4 font-medium text-gray-200'>
                {col.links.map((link)=>(
                  <Link to="/" key={link}>{link}</Link>
                ))}
              </ul>
            </FooterColumn>
          ))}
          <div>
           <FooterColumn title={FOOTER_CONTACT_INFO.title}>
             {FOOTER_CONTACT_INFO.links.map((link)=>(
              <Link to="/" key={link.label}>
                <p className='pt-4 text-gray-400'>{link.label}</p>
              </Link>
             ))}
           </FooterColumn>
         </div>
         <div className='flex flex-col gap-5'>
           <FooterColumn title={FOOTER_CONTACT_INFO.title}>
             {FOOTER_CONTACT_INFO.links.map((link)=>(
              <Link to="/" key={link.label} className=' flex gap-4 md:flex-col lg:flex-row items-center'>
                <p className='pt-4 text-gray-400'>{link.label}:</p>
                <p className='pt-4 medium-14 text-gray-400'>{link.value}</p>
              </Link>
             ))}
           </FooterColumn>
         </div>
         
          </div>
           
        </div>
      </div>
    </footer>
  )
}

const FooterColumn = ({title, children})=>{
  return(
    <div>
      <h4 className='font-bold'>{title}</h4>
      {children}
    </div>
  )
}