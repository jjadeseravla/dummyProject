export default function Place({item }) {
  return (
    <article>
      <div>
        <h2>
          {item.title}
        </h2>
        <p>
          {item.description}
        </p>
      </div>
    </article>
  )
}