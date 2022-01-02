export const Groceryitem = ({ title, status, id }) => {
  return (
    <>
      <button>
        {title} - {status ? "Done" : "Not Done"}
      </button>

      <br />
    </>
  );
};
