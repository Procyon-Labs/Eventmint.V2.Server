import React from 'react'
import { Typography } from '../typogrphy';
import { Button } from '../button'
import { ChangeEvent } from "react";
import Image from 'next/image';
import Cancel from '../svgs/cancel';

type TicketCompProps = {
    first: string;
    second: string;
    third: string;
    fourth: string;
    labelButton: string;
    icon: React.ReactNode;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    image: string | null;
    id: string;
}

export default function TicketComponent(props: TicketCompProps) {
    const {
        first,
        second,
        third,
        fourth,
        icon,
        labelButton,
        image,
        id,
        onChange
    } = props;

    return (
        <div className='flex flex-col gap-[1rem]'>
            <div className='flex flex-col gap-y-[16px]'>
                <div>
                    <Typography customClassName='text-body-xxsx font-open-sans' color="fontBodyMGreyishColor">
                        {first}
                    </Typography>
                </div>
                <div
                    className='mx-auto w-full px-[32px] py-[32px] flex flex-col gap-y-[16px] text-center rounded-[16px] border border-dashed border-[#4B5768] bg-[rgba(0,0,0,0.10)] cursor-pointer'
                    onClick={() => {
                        const inputElement = document.getElementById(id) as HTMLInputElement;
                        if (inputElement && !image) {
                            inputElement.click();
                        }
                    }}
                >
                    <input
                        type="file"
                        id={id}
                        className="input-field"
                        accept="image/*"
                        hidden
                        onChange={onChange}
                    />
                    {image ? (
                        <div className="relative w-full h-full">
                            <Image  src={image} alt="Uploaded" className="w-full h-full object-cover rounded-[10.23px] " width={400}height={400}/>
                            <div className="absolute  inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 hover:bg-black hover:bg-opacity-20">
                                <div
                                    className="cursor-pointer rounded-full p-2"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        onChange({ target: { files: null } } as any);
                                    }}
                                >
                                    <Cancel/>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className='mx-auto text-center w-full flex flex-col gap-y-[16px]'>
                            <div className="text-center mx-auto">
                                {icon}
                            </div>
                            <div className="flex flex-col gap-[8px]">
                                <Typography customClassName='text-body-xxs font-open-sans text-center' color="fontBodyRGreyishColor">
                                    {second}
                                </Typography>
                                <Typography customClassName='text-small font-open-sans text-center' color="fontBodyMGreyishColor">
                                    {third}
                                </Typography>
                            </div>
                            <div className="mx-auto">
                                <Button
                                    label={labelButton}
                                    customClassName="text-eventMint font-open-sans bg-gradient-to-b-custom rounded-[12px] text-center"
                                    size="smaller"
                                    fit
                                />
                            </div>
                            <div>
                                <Typography customClassName='text-eventMint font-open-sans text-center' color="fontBodyMGreyishColor">
                                    {fourth}
                                </Typography>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
