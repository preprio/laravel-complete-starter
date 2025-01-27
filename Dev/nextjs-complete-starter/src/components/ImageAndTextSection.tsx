import Link from "next/link";
import Button from "@/components/Button";
import {FragmentType, getFragmentData} from "@/gql";
import {CTA_BUTTON_FRAGMENT, SECTION_IMAGE_AND_TEXT_FRAGMENT} from "@/queries/GetPageBySlug";
 
interface ImageAndTextSectionProps {
    data: FragmentType<typeof SECTION_IMAGE_AND_TEXT_FRAGMENT>
}
 
export default function ImageAndTextSection(props: ImageAndTextSectionProps) {
    const image = (
        <div className='order-first flex max-h-[542px] w-full flex-grow basis-6/12 items-center justify-center bg-blue-50 p-16 md:order-none md:p-12 lg:p-16'>
            <svg
                viewBox='0 0 402 260'
                className='w-full max-w-[400px]'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                    d='M398.251 260H7.15201C4.49222 260 3.14794 256.795 5.01181 254.898L90.6954 167.668C94.5446 163.749 100.834 163.669 104.782 167.487L150.523 211.731C154.934 215.998 162.113 215.321 165.649 210.304L259.838 76.6611C263.834 70.9911 272.249 71.0127 276.216 76.703L400.712 255.284C402.099 257.273 400.676 260 398.251 260Z'
                    fill='#DBEAFE'
                />
                <circle cx='50' cy='50' r='50' fill='#DBEAFE' />
            </svg>
        </div>
    )
 
    const {align, title, cta_button} = getFragmentData(SECTION_IMAGE_AND_TEXT_FRAGMENT, props.data)
    const cta = getFragmentData(CTA_BUTTON_FRAGMENT, cta_button)
 
    const href = cta?.internal_link && cta.internal_link[0]
        ? `/${cta?.internal_link[0]._slug}`
        : cta?.link
 
    return (
        <div
            className='mx-auto max-w-7xl w-full bg-white'>
            <div className='flex w-full flex-wrap'>
                {align === 'left' &&image}
                <div className='w-full space-y-8 px-12 py-10 md:basis-6/12 lg:px-28 lg:py-24'>
                    <h2 className='text-4xl font-medium lg:text-5xl text-neutral-900'>
                        {title}
                    </h2>
                    <div className='space-y-2.5'>
                        <div className='h-4 w-full max-w-96 rounded-sm bg-gray-100'></div>
                        <div className='h-4 w-full max-w-72 rounded-sm bg-gray-100'></div>
                        <div className='h-4 w-full max-w-80 rounded-sm bg-gray-100'></div>
                        <div className='h-4 w-full max-w-64 rounded-sm bg-gray-100'></div>
                    </div>
                    <div>
                        <Link href='#'><Button buttonType='primary'>{cta?.text}</Button></Link>
                    </div>
                </div>
                {align === 'right' &&image}
            </div>
        </div>
    )
}