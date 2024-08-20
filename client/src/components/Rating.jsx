const Rating = ({ rating }) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    i <= rating
      ? stars.push(
          <svg
            //Prevents the "Each child in a list should have a unique "key" prop." error
            key={i} // Adding key prop here
            width="22"
            height="22"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22 10.1c.1-.5-.3-1.1-.8-1.1l-5.7-.8L12.9 3c-.1-.2-.2-.3-.4-.4-.5-.3-1.1-.1-1.4.4L8.6 8.2 2.9 9q-.45 0-.6.3c-.4.4-.4 1 0 1.4l4.1 4-1 5.7c0 .2 0 .4.1.6.3.5.9.7 1.4.4l5.1-2.7 5.1 2.7c.1.1.3.1.5.1h.2c.5-.1.9-.6.8-1.2l-1-5.7 4.1-4c.2-.1.3-.3.3-.5"
              fill="#fe001aff"
            />
          </svg>,
        )
      : stars.push(
          <svg
            key={i} // Adding key prop here
            width="22"
            height="22"
            viewBox="0 0 0.66 0.66"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M.605.266A.03.03 0 0 0 .581.248L.425.225.355.083a.028.028 0 0 0-.05 0l-.07.141-.156.023a.03.03 0 0 0-.022.019.03.03 0 0 0 .007.028l.114.11L.15.56a.03.03 0 0 0 .011.028A.03.03 0 0 0 .19.59L.33.516.47.59l.013.003A.03.03 0 0 0 .499.588.03.03 0 0 0 .51.56L.482.404l.114-.11A.03.03 0 0 0 .605.266m-.169.11A.03.03 0 0 0 .428.4l.02.115L.345.46a.03.03 0 0 0-.026 0L.216.515.236.4A.03.03 0 0 0 .228.376L.145.293.261.276A.03.03 0 0 0 .282.261L.33.157l.052.105a.03.03 0 0 0 .021.015l.116.017Z"
              fill="#fe001aff"
            />
          </svg>,
        );
  }

  return <div key={stars}>{stars}</div>;
};

export default Rating;
