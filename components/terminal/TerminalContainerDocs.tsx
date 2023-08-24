import { DocsConstants, terminal } from "@/constants/common-constants"
import Link from "next/link"
import '../../app/globals.css'

export const TerminalContainerDocs  = ()=>{
    return (
        <div className="flex flex-col gap-6">
            <h3 className="max-w-650 text-gray-300 text-5xl">{terminal.TERMINAL_SECTION_INFO}</h3>
            <Link className="text-gray-300 text-2xl link-animation" href="/docs">{DocsConstants.GET_STARTED}</Link>
        </div>
    )
}