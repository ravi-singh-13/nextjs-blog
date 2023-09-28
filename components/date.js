/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import { parseISO, format } from 'date-fns'

export default function Date ({ dateString }) {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
}
