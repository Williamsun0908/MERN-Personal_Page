import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { MathJax } from 'better-react-mathjax'
import api from '../lib/axios'

const WritingsPage = () => {
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
        <div>
            {loading && <div></div>}
        </div>
        {writings.map(writing => 

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
            </div>
        </div>

        )}
        
    </div>
  )
}

export default WritingsPage
