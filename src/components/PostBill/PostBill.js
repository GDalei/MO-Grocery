import React, { useState } from 'react';
import { Button } from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";
const PostBill = () => {
    const [text, setText] = useState("")
    const subMiteHandler = () => {

    }
    const textAreaChangeHandler = (event) => {
        console.log("Event", event.currentTarget.value)
        setText(event.currentTarget.value)
    }
    return (
        <div>
            <div className="mb-3 sm:">

                <Input
                    className="relative m-0 block min-w-0 flex-auto cursor-pointer rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] font-normal leading-[2.15] text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
                    id="formFileLg"
                    type="file"
                />
            </div>
            <label
                htmlFor="formFileLg"
                className="mb-2 inline-block text-neutral-700 dark:text-neutral-200"
            >
                OR  Please Enter you Grocery Item
            </label>
            <textarea onChange={textAreaChangeHandler}
                className="relative m-0 block w-full min-w-0 flex-auto cursor-pointer rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] font-normal leading-[2.15] text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
                id="formFileLg"
                value={text}
            />
            <br />
            <Button color="green" size="lg" fullWidth onClick={subMiteHandler}>Submite</Button>
        </div>

    );
}
export default PostBill