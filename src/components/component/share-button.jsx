/**
 * v0 by Vercel.
 * @see https://v0.dev/t/SPpTMKtSgux
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import { Button } from "@/components/ui/button"

export default function ShareButton() {
    return (
        <div className="flex justify-center items-center vh-screen">
            <Button variant="solid" className="bg-[#7c3aed] text-white p-4 hover:bg-[#6d28d9] focus:ring-[#7c3aed]">
                <ShareIcon className="mr-2 h-4 w-4" />
                Submit
            </Button>
        </div>
    )
}

function ShareIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
            <polyline points="16 6 12 2 8 6" />
            <line x1="12" x2="12" y1="2" y2="15" />
        </svg>
    )
}
