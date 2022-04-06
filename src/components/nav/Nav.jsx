/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import "./nav.css"
import {AiOutlineHome} from "react-icons/ai"
import {AiOutlineUser} from "react-icons/ai"
import {BiBook} from "react-icons/bi"
import {RiServiceLine} from "react-icons/ri"
import {BiMessageSquareDetail} from "react-icons/bi"
import { useState,useEffect } from 'react'
import {AiFillCaretDown} from "react-icons/ai"

//useEffect runs first the cleanup function(return), then the above code.
//useState re-renders the component and modificates the selected state but no the others states.

const Nav = () => {
  const [activeNav,setActiveNav] = useState("")
  const about = "#about", home = "#", experience = "#experience", services="#services",contact="#contact",footer="#footer";
  
  // const handleClick = (params)=>{
  //   setActiveNav(params)
  //   const timer = setTimeout(()=>{
  //     console.log("INside settimeout")
  //     setActiveNav("")
  //   },2000)

  //   return ()=>{
  //     clearTimeout(timer)
  //   }
  // }

  const inTime = ()=>{
      setActiveNav("");
  }

  useEffect(()=>{

  const timer = setTimeout(()=>{
      inTime();
  },2000)

  return ()=>{
    clearTimeout(timer)
  }

  },[activeNav])

  return (
    <nav>
      <a href={home} onClick={()=>setActiveNav(home)} className={activeNav===home?"active":""}><AiOutlineHome /></a>
        
      <a href={about} onClick={()=>setActiveNav(about)}  className={activeNav===about?"active":""}><AiOutlineUser /></a>

      <a href={experience} onClick={()=>setActiveNav(experience)} className={activeNav===experience?"active":""}><BiBook /></a>

      <a href={services} onClick={()=>setActiveNav(services)} className={activeNav===services?"active":""}><RiServiceLine /></a>

      <a href={contact} onClick={()=>setActiveNav(contact)} className={activeNav===contact?"active":""}><BiMessageSquareDetail /></a>

      <a href={footer} onClick={()=>setActiveNav(footer)} className={activeNav===footer?"active":""}><AiFillCaretDown /></a>

    </nav>
  )
  
}

export default Nav