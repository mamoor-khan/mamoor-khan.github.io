type ScrollProps = {
  Comp: React.ReactNode
  reverseScrolling?: boolean
}

function ScrollableContainer({ Comp, reverseScrolling = false }: ScrollProps) {
  return (
    <div className='scrollable-container-parent'>
      <div
        className={`scrollable-container ${reverseScrolling ? 'reverse' : ''}`}
      >
        {Comp}
      </div>
    </div>
  )
}

export default ScrollableContainer
