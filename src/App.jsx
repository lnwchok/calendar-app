import { useState } from 'react'
import './App.css'
// import { format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, addMonths, subMonths, setMonth, setYear, isSaturday, isSunday } from 'date-fns';
import { format, addMonths, subMonths } from 'date-fns';
import Calendar from './components/calendar/calendar';
import Navigate from './components/navi';

const events = [
  { date: '2025-06-10', description: 'Holiday12345678', cat: 'Holiday' },
  { date: '2025-06-14', description: 'Holiday12345678', cat: 'Holiday' },
  { date: '2025-06-16', description: 'Holiday12345678', cat: 'YadaHoliday' },
  { date: '2025-06-25', description: 'Holiday12345678', cat: 'Holiday' },
  { date: '2025-07-25', description: 'Holiday12345678', cat: 'Holiday' },
  { date: '2025-07-25', description: 'Holiday12345678', cat: 'YadaHoliday' },
  { date: '2025-08-25', description: 'Holiday12345678', cat: 'Holiday' },
  { date: '2025-09-25', description: 'Holiday12345678', cat: 'Holiday' },
  { date: '2025-09-25', description: 'Holiday12345678', cat: 'YadaHoliday' },
  { date: '2025-10-25', description: 'Holiday12345678', cat: 'Holiday' },
  { date: '2025-11-25', description: 'Holiday12345678', cat: 'Holiday' },
  { date: '2025-12-25', description: 'Holiday12345678', cat: 'Holiday' },
];



function App() {
  // const [count, setCount] = useState(0)
  const today = new Date()
  const [currentMonth, setCurrentMonth] = useState(today);
  const [mode, setMode] = useState('month');

  return (
    <>
      <div className='headerPanel flex'>
        <h1 className="mb-3 text-3xl font-semibold">📆 Calendar</h1>
        <div className='grow grid grid-cols-3'>
          <div>&nbsp;
          </div>
          <div className='text-center'>
            <button type='button' className='bg-gray-400 hover:bg-gray-500 text-white p-2 px-4 mx-4 my-1 rounded cursor-pointer' onClick={() => setMode('year')}>Year</button>
            <button type='button' className='bg-gray-400 hover:bg-gray-500 text-white p-2 px-4 mx-4 my-1 rounded cursor-pointer' onClick={() => setMode('month')}>Month</button>
            <button type='button' className='bg-gray-400 hover:bg-gray-500 text-white p-2 px-4 mx-4 my-1 rounded cursor-pointer' onClick={() => setCurrentMonth(today)}>Today</button>
          </div>
          <div className='text-right'>
            <button type='button' className='bg-gray-400 hover:bg-gray-500 text-white p-2 px-4 mx-4 my-1 rounded-full cursor-pointer' onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5H1m0 0 4 4M1 5l4-4" />
              </svg>
            </button>
            <button type='button' className='bg-gray-400 hover:bg-gray-500 text-white p-2 px-4 mx-1 my-1 rounded-full cursor-pointer' onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </button>
          </div>
        </div>
        <span className='text-2xl font-semibold'>Today: {format(today, 'd-MMM-y')}</span>
      </div>

      <div className='container'>
        {/* <Navigate */}
        {/*   TodayClick={() => setCurrentMonth(today)} */}
        {/*   PrevClick={() => setCurrentMonth(subMonths(currentMonth, 1))} */}
        {/*   NextClick={() => setCurrentMonth(addMonths(currentMonth, 1))} */}
        {/* /> */}
        {/* </div> */}
        {/* <div className='LandPanel'> */}
        <Calendar
          mode={mode}
          today={today}
          currentMonth={currentMonth}
        />
        {/* </div> */}

      </div>
    </>
  )
}

export default App
