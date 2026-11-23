import './ProductPreview.css'

export default function ProductPreview() {
  return (
    <figure className="product-preview">
      <img
        src="/screenshots/main-browser.png"
        alt="DevFlow browser showing its toolbar, tabs, and new-tab workspace"
        fetchPriority="high"
      />
      <figcaption className="sr-only">
        DevFlow browser workspace.
      </figcaption>
    </figure>
  )
}
