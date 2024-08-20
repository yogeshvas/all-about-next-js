export default function Docs({ params }: any) {
  if (params.slug.length == 2)
    return (
      <div>
        Viewing Docs for Feature {params.slug[0]} and concept {params.slug[1]}
      </div>
    );
  else if (params.slug.length == 1)
    return <div>Viewing Docs for Feature {params.slug[0]}</div>;
  return <div>Docs Page</div>;
}
