import { useParams } from "react-router-dom";

function Book() {
  const { bookname } = useParams();

  return (
    <div>
      {bookname}
    </div>
  )
}

export default Book;