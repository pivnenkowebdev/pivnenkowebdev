import Link, {LinkProps} from "next/link"
import { ReactNode, AnchorHTMLAttributes } from "react"
import { Inter } from 'next/font/google'

type CustomLinkProps = LinkProps &
    AnchorHTMLAttributes<HTMLAnchorElement> & {
    children: ReactNode;
};

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
})

export default function CustomLink({
    href,
    children,
    className,
    ...rest
}: CustomLinkProps) {
    return (
        <Link className={`px-3 py-2.5 bg-yellow-100 border-2 border-yellow-200 block text-center font-semibold text-md max-w-3xs ${inter.className} ${className}`} href={href} {...rest}>
        {children}
        </Link>
    );
}
