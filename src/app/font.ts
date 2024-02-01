import {PT_Mono, Roboto} from "next/font/google";

export const ptMono = PT_Mono({ weight: '400' ,
    style: 'normal',
    subsets: ['latin'],
    display: 'swap',
    fallback:['arial', 'sans-serif']})


export const roboto = Roboto({ weight: '700' ,
    style: 'normal',
    subsets: ['latin'],
    display: 'swap',
    fallback:['arial', 'sans-serif']})
