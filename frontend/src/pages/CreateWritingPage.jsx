import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import TextareaAutosize from 'react-textarea-autosize';
import { MathJax } from 'better-react-mathjax';
import axios from 'axios';
import api from '../lib/axios';

const CreateWritingPage = () => {

    const STORAGE_KEY = 'draft';
    const SAVE_DELAY  = 500;                          

    const navigate = useNavigate(); 

    const [title,    setTitle]   = useState('');
    const [summary,  setSummary] = useState('');
    const [content,     setContent]    = useState('');

    const [savedAt, setSavedAt] = useState(null);

    useEffect(() => {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
      setTitle(saved.title ?? '');
      setSummary(saved.summary ?? '');
      setContent(saved.content ?? '');
      saved.savedAt && setSavedAt(new Date(saved.savedAt));
    }, []);

    useEffect(() => {
      const id = setTimeout(() => {
        localStorage.setItem(
          STORAGE_KEY,
          JSON.stringify({ title, summary, content, savedAt: Date.now() })
        );
        setSavedAt(new Date());
      }, SAVE_DELAY);
      return () => clearTimeout(id);
    }, [title, summary, content]);

    const handleSubmit = async (e) => {
        try {
            await api.post("/writings",
                {
                    title,
                    summary,
                    content
                }
            )
        } catch(error){
            console.log("Error creating writing.", error)
        } finally {
            localStorage.removeItem(STORAGE_KEY)
            navigate('/')
        }
    }

  return (
    <div className="flex">
        <div className="w-1/2 p-6">
            <div className="my-2">
                <input 
                    type="text" 
                    placeholder="Create Your Title" 
                    className="text-sm my-1 input input-bordered w-full max-w"
                    onChange={event => setTitle(event.target.value)}
                    value={title}
                />
            </div>
            <div>
                <TextareaAutosize 
                    minRows={2} 
                    className="text-sm my-1 textarea textarea-bordered w-full max-w" 
                    placeholder="Summary or goal of your writing"
                    onChange={event => setSummary(event.target.value)}
                    value={summary}
                />
            </div>
            <div>
                <TextareaAutosize 
                    minRows={4} 
                    className="text-sm my-1 textarea textarea-bordered w-full max-w" 
                    placeholder="Body of your Writing"
                    onChange={event => setContent(event.target.value)}
                    value={content}
                />
            </div>
            <div className="flex justify-between items-center">
                <span>
                    Autosaved at {savedAt
                      ? savedAt.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                      : '—'}
                </span>
                <button className="btn btn-wide text-black" onClick={handleSubmit}>
                    Submit
                </button>
            </div>
        </div>
        <div className="w-1/2 p-6">
            <div className="card">
                <div className="card-body">
                    <h2 className="card-title">
                        <MathJax hideUntilTypeset={"first"}>
                            {title}
                        </MathJax>
                    </h2>
                    <MathJax hideUntilTypeset={"first"}>
                        {summary}
                    </MathJax>
                    <MathJax hideUntilTypeset={"first"}>
                        {content}
                    </MathJax>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CreateWritingPage
