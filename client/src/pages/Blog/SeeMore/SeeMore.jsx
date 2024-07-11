import { useLocation } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import React from "react";
import "./SeeMore.css";

export const SeeMore = () => {
    const location = useLocation();
    const { blog } = location.state || {};
    const quillRef = React.createRef();

    return (
        <div className="container mx-auto mt-16 px-10 py-5">
            <h1 className="text-4xl font-bold text-center">{blog.title}</h1>
            <div className="flex justify-center mt-6">
                <img 
                    src={blog.image} 
                    alt={blog.title} 
                    className="w-full max-w-2xl rounded-lg object-cover h-96"
                />
            </div>
            <div className="mt-8 text-lg leading-relaxed text-justify">
                <ReactQuill 
                    ref={quillRef} 
                    value={blog.blogContent} 
                    readOnly={true} 
                    theme="bubble"
                />
            </div>
        </div>
    );
}
