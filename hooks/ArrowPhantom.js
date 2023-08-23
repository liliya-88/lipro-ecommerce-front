import Link from 'next/link'
import { useEffect, useState } from 'react'

function ArrowPhantom() {
  const [scroll, setScroll] = useState(false)
  const handleScroll = () => {
    const scrollTop = window.pageYOffset
    const arrow = document.querySelector('.arrow-phantom')
    if (scrollTop > 500) {
      arrow.style.opacity = 1
      setScroll(true)
    } else {
      arrow.style.opacity = 0
      setScroll(false)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <div>
      <Link href='#top'>
        {' '}
        <span className='arrow-phantom '>
          <i className='fas fa-arrow-up'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke-width='1.5'
              stroke='currentColor'
              class='w-4 h-4'>
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M8.25 6.75L12 3m0 0l3.75 3.75M12 3v18'
              />
            </svg>
          </i>
        </span>
      </Link>
    </div>
  )
}

export default ArrowPhantom
