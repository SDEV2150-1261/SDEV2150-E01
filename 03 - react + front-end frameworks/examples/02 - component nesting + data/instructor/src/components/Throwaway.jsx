export default function Throwaway({ text, children }) {
  // if I'm destructuring, I need to *explicitly* ingest the children prop
  console.log(text, children);

  return (
    <>
      <p>{text}</p>
      {children}
    </>
  )
}