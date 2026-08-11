import './AddToBasketToast.css'

interface AddToBasketToastProps {
  title: string
  price: number
  thumbnail: string
  onClose: () => void
}

function AddToBasketToast({ title, price, thumbnail, onClose }: AddToBasketToastProps) {
  return (
    <div className="add-toast">
      <div className="add-toast__header">
        <span className="add-toast__heading">Successfully added to basket</span>
        <button
          type="button"
          className="add-toast__close"
          onClick={onClose}
          aria-label="Close notification"
        >
          ✕
        </button>
      </div>
      <div className="add-toast__body">
        <img src={thumbnail} alt={title} className="add-toast__image" />
        <div>
          <p className="add-toast__title">{title}</p>
          <p className="add-toast__price">€ {price.toFixed(2)}</p>
        </div>
      </div>
    </div>
  )
}

export default AddToBasketToast
