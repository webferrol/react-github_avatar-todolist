import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
export function ImageSkeleton () {
  return (
    <figure className='w-64 h-64'>
      <Skeleton count={10} />
    </figure>
  )
}
