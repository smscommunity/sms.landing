import Link from "next/link";

export interface HomepageButtonProps {
    label: string;
    href: string;
}

export default function HomepageButton(props: HomepageButtonProps) {
    return(
        <Link href={props.href}>
            <div className="cursor-pointer transition-colors bg-yellow-300 hover:bg-yellow-500 rounded-md text-black font-bold m-2 p-2 text-2xl w-72">
                {props.label}
            </div>
        </Link>
    )
}