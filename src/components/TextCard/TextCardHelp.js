import React from 'react'
import { CommandList } from './TextCard.style'

const TextCardList = () => {
  return (
    <div>
      <p><strong>Commands:</strong></p>
      <CommandList>
        <li><p>ls - lists files/folders the current directory</p></li>
        <li><p>cd - change into a folder</p></li>
        <li><p>help - brings up this help screen</p></li>
        <li><p>clear - clears the console</p></li>
        <li><p>node [filename] - runs a 'JavaScript' file</p></li>
      </CommandList>
    </div>
  )
}

export default TextCardList
