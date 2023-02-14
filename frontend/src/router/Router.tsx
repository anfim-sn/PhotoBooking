import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { BookingPage } from '../pages/BookingPage'
import { ListPage } from '../pages/ListPage'

export const Router = () => (
  <Routes>
    <Route path={'/'} element={<ListPage />} />
    <Route path={'/booking'} element={<BookingPage />} />
  </Routes>
)
