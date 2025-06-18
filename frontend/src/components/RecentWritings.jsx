import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import { MathJax } from "better-react-mathjax";
import { Link } from 'react-router';
import api from '../lib/axios';

const RecentWritings = () => {

    const [writings,setwritings] = useState([])
    const [loading,setloading] = useState(true)

    useEffect(() => {
        const fetchWritings = async () => {
            try {
                const res = await api.get("/writings")
                setwritings(res.data)
            } catch (error) {
                console.log("Error fetching writings",error)
            } finally {
                setloading(false)
            }
        }
        fetchWritings()
    },[])

  return (
    <div>
        <div className="z-0 card-body font-bold text-2xl border-y">
            Recent Writings
        </div>
        <div>
            {loading && <div></div>}
        </div>
        {writings.map(writing => 

            <div className="card border-y">
                <div className="card-body">
                    <Link to={`/writings/${writing?._id}`}>
                        <h2 className="card-title hover:text-sky-700">
                            
                                <MathJax hideUntilTypeset={"first"}>
                                    {writing?.title}
                                </MathJax>
                            
                        </h2>
                    </Link>
                    <h2 className="text-sm">
                        {new Date(writing?.createdAt).toLocaleString(undefined, { dateStyle: 'medium', timeStyle: 'short' })}
                    </h2>
                    <MathJax hideUntilTypeset={"first"}>
                        {writing?.summary}
                    </MathJax>
                </div>
            </div>

        )}
        
    </div>
  )
}

export default RecentWritings
