import { Button } from "./style";

const LoadMore = ({ children, onClick, disabled }) => {
  return (
    <Button type="button" onClick={onClick} disabled={disabled}>
      {children}
    </Button>
  )
}

export default LoadMore