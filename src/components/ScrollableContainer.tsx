type ScrollProps = {
  Comp: React.ReactNode
}

function ScrollableContainer({ Comp }: ScrollProps) {
  return (
    <div className='scrollable-container-parent'>
      <div className='scrollable-container'>{Comp}</div>
    </div>
  )
}

export default ScrollableContainer
