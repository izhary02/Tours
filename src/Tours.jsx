import SingleTour from './SingleTour'

const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      <div>
        <h2 className="title"> our tours</h2>
        <div className="title-underline"></div>
      </div>
      <div className="tours">
        {tours.map((tour) => {
          return <SingleTour key={tour.id} {...tour} removeTour={removeTour} />
        })}
      </div>
    </section>
  )
}

export default Tours
