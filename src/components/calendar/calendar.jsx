import './calendar.css';
import { format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, addMonths, subMonths, setMonth, setYear, isSaturday, isSunday } from 'date-fns';

function Calendar(props) {

  const isToday = (date) => { return format(date, 'yyyy-MM-dd') === format(props.today, 'yyyy-MM-dd') };
  // const [selectedDate, setSelectedDate] = useState(null);

  const isCurrentMonth = (month) => {
    return format(props.today, 'MMMM') === format(month, 'MMMM')
  }

  function renderDate(date) {
    let _date = format(date, 'd')
    return (
      <div className={`h-8 w-8 flex items-center justify-center ${isToday(date) ? 'rounded-full bg-red-500 text-white font-semibold' : ''}`}>
        <span className='text-lg'>{_date}</span>
      </div>
    )
  }

  function headerSection(month) {
    return (
      <>
        <div className="flex mt-1 mb-5">
          <span className={`text-center text-3xl font-semibold ${isCurrentMonth(month) ? 'text-red-400' : ''}`}>
            {props.mode === 'year' ? format(month, "y") : format(month, "y MMMM")}
          </span>
        </div>
      </>
    );
  }

  function renderDays(today, month) {
    const days = [];
    const day_names = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const Weekend = (date) => {
      if (date === 'Sat') {
        return 'weekend';
      } else if (date === 'Sun') {
        return 'weekend';
      } else { return ''; }
    }
    const Today = (td, i, m) => {
      return (format(td, 'i') % 7 === i) && (format(td, 'MM') === format(m, 'MM')) ? 'text-red-400 border-black' : '';
    }

    for (let i = 0; i < 7; i++) {
      days.push(
        <div className={`border-b border-t p-1 pb-4 text-center font-semibold ${Weekend(day_names[i])} ${Today(today, i, month)}`}
          key={i} >
          {day_names[i]}
        </div >
      );
    }
    return (
      <>
        <div className={`flex justify-center mb-1 ${props.mode === 'month' ? 'hidden' : ''}`}>
          <span className={`text-xl font-semibold ${isCurrentMonth(month) ? 'text-red-400' : ''}`}>{format(month, "MMMM")}</span>
        </div>
        <div className="grid grid-cols-7">{days}</div>
      </>
    );
  }

  function renderCells(monthDate, events) {
    const monthStart = startOfMonth(monthDate);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const isWeekend = (date) => {
      if (isSaturday(date)) {
        return true;
      } else if (isSunday(date)) {
        return true;
      } else { return false; }
    }

    const eventsinMonth = events.filter(e => format(e.date, 'yyyy-MM') === format(monthDate, 'yyyy-MM'))
    const rows = [];
    let days = [];
    let day = startDate;

    const hasEvent = (date) => { return eventsinMonth.map(e => e.date).includes(format(date, 'yyyy-MM-dd')) }

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        days.push(
          <div
            key={day}
            className={`p-1  overflow-y-auto text-xs ${isWeekend(day) ? 'weekend' : ''} ${props.mode === 'month' ? 'h-28 border-b' : ''} ${hasEvent(day) ? 'event_day' : ''}`}
          >
            {format(day, 'MM') === format(monthDate, 'MM') ? renderDate(day) : ''}
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div className="grid grid-cols-7" key={day}>
          {days}
        </div>
      );
      days = [];
    }
    return <div className='mb-4'>{rows}</div>;
  }

  function mainRender(M) {
    if (M === 'month') {
      return (
        <>
          {headerSection(props.currentMonth)}
          {renderDays(props.today, props.currentMonth)}
          {renderCells(props.currentMonth, props.events)}
        </>
      )
    } else if (M === 'year') {
      let mon = [];
      for (let i = 0; i < 12; i++) {
        mon.push(
          <div key={i}>
            {renderDays(props.today, setMonth(props.currentMonth, i))}
            {renderCells(setMonth(props.currentMonth, i), props.events)}
          </div>
        );

      }
      return (
        <>
          {headerSection(props.currentMonth)}

          <div className='calendarYear'>
            {mon}
          </div>
        </>
      )
    }
  }
  return (
    <>
      {mainRender(props.mode)}
    </>
  )

}

export default Calendar
