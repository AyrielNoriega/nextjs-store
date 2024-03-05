

import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
        <nav>navegacion de categorias</nav>
        { children }
    </main>
  )
}


export default layout