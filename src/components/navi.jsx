function Navigate(props) {
  function LeftArrowButton({ onClick }) {
    return (
      <button
        type="button"
        className="text-white bg-gray-400 hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 flex-none"
        onClick={onClick}
      >
        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5H1m0 0 4 4M1 5l4-4" />
        </svg>
      </button>
    )
  }

  function RightArrowButton({ onClick }) {
    return (
      <button
        type="button"
        className="text-white bg-gray-400 hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 flex-none"
        onClick={onClick}
      >
        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
        </svg>
      </button>
    )
  }
  return (
    <div className='flex justify-between my-3 px-6'>
      <LeftArrowButton onClick={props.PrevClick} />
      <button type="button" className='bg-gray-400 hover:bg-gray-500 text-white px-4 rounded cursor-pointer' onClick={props.TodayClick}>Today</button>
      <RightArrowButton onClick={props.NextClick} />
    </div>
  )
}

export default Navigate
