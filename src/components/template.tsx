import { ReactNode } from "react";

interface TemplateProps {
    children: ReactNode
}
export const Template = ( { children }: TemplateProps ) => {
    return (
        <div className="mx-auto my-5 container">
            <h1 className=" text-4xl text-gray-800 font-semibold self-center py-10"> { 'PRUEBA BUSCADOR DEPELICULAS' } </h1>
            {children}
        </div>
    );
}