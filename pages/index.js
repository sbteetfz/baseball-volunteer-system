import { useState, useEffect } from 'react'
import { supabase } from '../utils/supabaseClient'
import VolunteerSignup from '../components/VolunteerSignup'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <VolunteerSignup />
    </div>
  )
}