import { HomeIcon } from '@primer/octicons-react'
import Link from "next/link"
import { ActiveLink } from '../index'

const navItems = [
    { path: '/about', text: 'About' },
    { path: '/pricing', text: 'Pricing' },
    { path: '/contact', text: 'Contact' },
]

// por defecto es un server component
export const Navbar = async () => {

    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()
    //console.log( data )

    return (
        <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
            <Link href={'/'} className='flex items-center'>
                <HomeIcon className='mr-2'/>
                <span>Home</span>
            </Link>

            <div className="flex flex-1"></div>

            {
                navItems.map( navItem => (
                    //Pasando todas las propiedades con el spred
                    <ActiveLink key={ navItem.path } { ...navItem } />
                ))
            }

        </nav>
    )
}
