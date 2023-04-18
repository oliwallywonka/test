import { FC, ReactNode } from "react"
import { Link } from "react-router-dom";

type LinkWrapperProps = {
    children: ReactNode,
    to: string;
}

export const LinkWrapper: FC<LinkWrapperProps> = ({children, to}) => {
    return (
        <div>
            <Link to={to}>
                {children}
            </Link>
        </div>
    )
}