import React from 'react'
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { MathJax } from 'better-react-mathjax';

const WritingDetailPage = () => {
    const { id } = useParams()
    console.log(id)

    const [writing,setwriting] = useState([])
    const [loading,setloading] = useState(true)

    useEffect(() => {
        const fetchWritings = async () => {
            try {
                const res = await axios.get(`http://localhost:5001/api/writings/${id}`)
                setwriting(res.data)
            } catch (error) {
                console.log("Error fetching writings",error)
            } finally {
                setloading(false)
            }
        }
        fetchWritings()
    },[])

  return (
      <div className="card border-y">
                <div className="card-body">
                    <h2 className="card-title">
                        <MathJax hideUntilTypeset={"first"}>
                            {writing?.title}
                        </MathJax>
                    </h2>
                    <h2 className="text-sm">
                        {new Date(writing?.createdAt).toLocaleString(undefined, { dateStyle: 'medium', timeStyle: 'short' })}
                    </h2>
                    <MathJax hideUntilTypeset={"first"}>
                        {writing?.summary}
                    </MathJax>

                    <MathJax hideUntilTypeset={"first"}>
                        {writing?.content}
                    </MathJax>
                </div>
            </div>
  )
}

export default WritingDetailPage
