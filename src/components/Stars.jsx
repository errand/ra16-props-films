import Star from "./Star";

export default function Stars({stars}) {
  if (isNaN(stars) || stars < 1 || stars > 5 ) {
    return null
  }
  return (
    <ul className="card-body-stars u-clearfix">
        {[...Array(stars)].map((e, i) => <Star key={i}/>)}
    </ul>
  )
}
