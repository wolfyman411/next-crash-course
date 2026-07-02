"use client"

import React from 'react'
import { useParams } from 'next/navigation'

export default function page() {

  const params = useParams();

  return (
    <div>
      <h1>This is a user: {params.username}</h1>
    </div>
  )
}
