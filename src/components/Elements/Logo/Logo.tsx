import { Link } from "react-router-dom"

export const Logo = () => {
  return (
    <Link
      to="/"
    >
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/cd8fcf5f1718e258020263c34adf86f0ca7994a068f996e9aa3b730bb1135cb6?"
        className="shrink-0 self-stretch my-auto max-w-full aspect-[3.57] w-[121px]"
      />
    </Link>
  )
}