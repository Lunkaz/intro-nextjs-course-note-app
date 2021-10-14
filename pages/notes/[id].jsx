/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default ({note}) => {

  return (
    <div sx={{variant: 'containers.page'}}>
      <h1>Note: {note.title} </h1>
    </div>
  )
}

export async function getServerSideProps({params, req, res}) {
  const response = await fetch(`http://localhost:3000/api/note/${params.id}`)

  if(!response.ok) {
    return {
      redirect: {
        destination: '/notes',
        permanent: false,
      },
    }
  }

  const {data} = await response.json()

  if (response.ok) {
    return {
      props: {note: data}
    }
  }
}