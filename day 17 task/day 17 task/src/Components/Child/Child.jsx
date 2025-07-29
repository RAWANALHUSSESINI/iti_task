export default function Child({ selectedHotel }) {
  return (
    <>
      {selectedHotel && (
        <h3 className="mt-4 bg-warning p-3 text-center rounded">
        You selected: {selectedHotel}
        </h3>
      )}
    </>
  )
}
