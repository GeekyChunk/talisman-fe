"use client";
import { Tab } from "@headlessui/react";
import { DocumentTextIcon, LinkIcon, PhotoIcon } from "@heroicons/react/24/outline";
import TPostForm from "./forms/tpost";
import IPostForm from "./forms/ipost";
import LPostForm from "./forms/lpost";

export default function Write() {
    return (
        <>
            <div className="container mx-auto max-w-7xl px-2 py-4">
                <div className="py-6">
                    <h1 className="text-3xl font-semibold text-slate-700">Create a post</h1>
                </div>
                <div className="bg-gray-100 rounded-xl border border-gray-300 overflow-hidden">
                    <Tab.Group>
                        <Tab.List className="w-full flex flex-col md:flex-row">
                            <Tab className="desktop-tab">
                                <div className="flex gap-1 justify-center items-center">
                                    <DocumentTextIcon className="w-10 h-10" />
                                    <div>Post</div>
                                </div>
                            </Tab>
                            <Tab className="desktop-tab">
                                <div className="flex gap-1 justify-center items-center">
                                    <PhotoIcon className="w-10 h-10" />
                                    <div>Image</div>
                                </div>
                            </Tab>
                            <Tab className="desktop-tab">
                                <div className="flex gap-1 justify-center items-center">
                                    <LinkIcon className="w-10 h-10" />
                                    <div>Link</div>
                                </div>
                            </Tab>
                        </Tab.List>
                        <Tab.Panels className="px-4 py-3">
                            <Tab.Panel>
                                <TPostForm />
                            </Tab.Panel>
                            <Tab.Panel>
                                <IPostForm />
                            </Tab.Panel>
                            <Tab.Panel>
                                <LPostForm />
                            </Tab.Panel>
                        </Tab.Panels>
                    </Tab.Group>
                </div>
            </div>



        </>
    )
}
