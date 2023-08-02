"use client";

import { ArrowLeftIcon, DocumentTextIcon, LinkIcon, PhotoIcon } from "@heroicons/react/24/solid";
import TPostForm from "./forms/tpost";
import IPostForm from "./forms/ipost";
import LPostForm from "./forms/lpost";
import { Button, Card, Tab, TabPanel, Tabs, TabsBody, TabsHeader } from "@material-tailwind/react";
import { useRouter } from "next/navigation";

export default function Write() {
    const router = useRouter();

    return (
        <>
            <div className="container mx-auto max-w-7xl px-2 py-4">
                <div className="flex mt-4 pb-3">
                    <Button onClick={() => router.back()} variant="gradient" color="amber" size="sm" className="flex gap-2 items-center font-bold text-base py-2">
                        <ArrowLeftIcon className="w-7 h-7" />
                        Back
                    </Button>
                </div>
                <div className="py-6">
                    <h1 className="text-3xl font-semibold text-slate-700">Create a post</h1>
                </div>
                <Card>
                    <Tabs value="text">
                        <TabsHeader>
                            <Tab value="text">
                                <div className="flex items-center gap-2 py-2">
                                    <DocumentTextIcon className="w-8 h-8" />
                                    Text
                                </div>
                            </Tab>
                            <Tab value="image">
                                <div className="flex items-center gap-2 py-2">
                                    <PhotoIcon className="w-8 h-8" />
                                    Photo
                                </div>
                            </Tab>
                            <Tab value="link">
                                <div className="flex items-center gap-2 py-2">
                                    <LinkIcon className="w-8 h-8" />
                                    Link
                                </div>
                            </Tab>
                        </TabsHeader>
                        <TabsBody>
                            <TabPanel  value="text">
                                <TPostForm />
                            </TabPanel>
                            <TabPanel  value="image">
                                <IPostForm />
                            </TabPanel>
                            <TabPanel  value="link">
                                <LPostForm />
                            </TabPanel>
                        </TabsBody>
                    </Tabs>
                </Card>
            </div>
        </>
    )
}
