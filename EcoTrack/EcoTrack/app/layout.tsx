import type { Metadata } from 'next';
import './globals.css';
export const metadata:Metadata={title:'EcoTrack | Play. Learn. Protect.',description:'Understand your household carbon footprint, track progress and build more sustainable habits.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
