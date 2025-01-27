import Link from "next/link";
import {FragmentType, getFragmentData} from "@/gql";
import {SECTION_HEADER_FRAGMENT} from "@/queries/GetPageBySlug";
 
interface HeaderSectionProps {
    data: FragmentType<typeof SECTION_HEADER_FRAGMENT>
}
 
export default function HeaderSection(props: HeaderSectionProps) {
    const {title, image} = getFragmentData(SECTION_HEADER_FRAGMENT, props.data)
    
    return (
        <div className='px-4 md:px-10 lg:px-20'>
            <div className='mx-auto max-w-7xl w-full'
            >
                <div className='flex flex-wrap gap-y-8 py-16 md:flex-nowrap flex-shrink-0'>
                    <div
                        className='flex items-start justify-start flex-grow-0 flex-col space-y-16 md:basis-8/12 lg:basis-7/12'>
                        <h1 className='text-neutral-900 text-5xl font-medium lg:text-6xl'>
                            {title}
                        </h1>
                        {/* Searchbar */}
                        <div className='flex items-stretch justify-stretch w-full sm:max-w-xl rounded-full'>
                            <div
                                className='flex w-full justify-between rounded-l-full border-2 border-blue-600 bg-white px-4 py-2 lg:px-8 lg:py-4'>
                                <div
                                    className='flex w-full basis-5/12 items-center justify-between gap-3 md:gap-6 text-lg md:text-xl text-black hover:cursor-pointer lg:text-2xl'>
                                    <span>Brand</span>
                                    <TriangleDownIcon/>
                                </div>
                                <div className='mx-4 h-10 border-l-[1px] border-l-black lg:mx-5'></div>
                                <div
                                    className='flex basis-5/12 items-center justify-between gap-3 md:gap-6 text-lg md:text-xl text-black hover:cursor-pointer lg:text-2xl'>
                                    <span>Model</span>
                                    <TriangleDownIcon/>
                                </div>
                            </div>
                            <Link
                                href='/catalog'
                                className='flex items-center text-nowrap rounded-r-full bg-blue-600 px-4 text-base md:text-lg font-bold text-white hover:cursor-pointer hover:bg-blue-700 lg:px-8 lg:text-2xl'>
                                FIND A CAR
                            </Link>
                        </div>
                    </div>
                    <div className='flex w-full justify-end md:basis-6/12 lg:h-[23.75rem] lg:basis-7/12'>
                        <img
                                src={image?.url || ''}
                                alt={image?.caption || ''}
                                className='object-contain'
                            />
                    </div>
                </div>
            </div>
        </div>
    )
}
 
function TriangleDownIcon() {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width='18'
            height='18'
            viewBox='0 0 18 18'
            fill='none'>
            <path
                d='M9.86603 16.5C9.48112 17.1667 8.51888 17.1667 8.13398 16.5L2.0718 6C1.6869 5.33333 2.16802 4.5 2.93782 4.5L15.0622 4.5C15.832 4.5 16.3131 5.33333 15.9282 6L9.86603 16.5Z'
                fill='currentColor'
            />
        </svg>
    )
}