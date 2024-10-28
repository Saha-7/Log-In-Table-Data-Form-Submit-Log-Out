import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Pagination from './Pagination';

const Home = () => {
  const [comments, setComments] = useState([])
  const [search, setSearch] = useState('')
  const [filteredComments, setFilteredComments] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [postPerPage] = useState(15)

  const totalComments = comments.length
  const uniquePostIds = new Set(comments.map(comment => comment.postId)).size

  const lastPostIndex = currentPage * postPerPage
  const firstPostIndex = lastPostIndex - postPerPage
  const currentComments = filteredComments.slice(firstPostIndex, lastPostIndex)
  
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/comments')
        setComments(response.data)
        setFilteredComments(response.data)
      } catch (error) {
        console.log("Failed to fetch comments")
      }
    }

    getData()
  }, [])

  
  useEffect(() => {
    const filtered = comments.filter(comment =>
      comment.name.toLowerCase().includes(search.toLowerCase())
    )
    setFilteredComments(filtered)
    setCurrentPage(1)
  }, [search, comments])


  return (
    <div className='p-2 m-2'>
      <div className="flex justify-evenly my-2">
        <div className="bg-blue-700 font-mono font-bold text-white p-4 rounded-lg">
          <h3>Total Data</h3>
          <h3>{totalComments}</h3>
        </div>
        <div className="bg-blue-700 p-4 font-mono font-bold text-white rounded-lg">
          <h3>Unique Post IDs</h3>
          <h3>{uniquePostIds}</h3>
        </div>
      </div>

      <input
        type="text"
        placeholder="Enter Name to search"
        className="border border-black bg-gray-200 p-2 mb-2 ml-4 rounded-lg"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <table className="table-auto w-full ml-4 mr-4 border border-collapse border-black">
        <thead className='bg-gray-500'>
          <tr>
            <th className="border border-black px-4 py-2">ID</th>
            <th className="border border-black px-4 py-2">Name</th>
            <th className="border border-black px-4 py-2">Email</th>
            <th className="border border-black px-4 py-2">Body</th>
          </tr>
        </thead>
        <tbody>
          {currentComments.map(x => (
            <tr key={x.id}>
              <td className="border border-black px-4 py-2">{x.id}</td>
              <td className="border border-black px-4 py-2">{x.name}</td>
              <td className="border border-black px-4 py-2">{x.email}</td>
              <td className="border border-black px-4 py-2">{x.body}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Pagination
        totalPosts={filteredComments.length}
        postPerPage={postPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  )
}

export default Home
