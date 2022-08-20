import MySpinner from "../../spinner/spinner";

export default function LazyLoadComp() {
  return (
    <div className="grid-item">
      <div
        className="lazy-img"
        style={{
          minWidth: "200px",
          minHeight: "200px",

          background:
            "linear-gradient(180deg, rgba(143, 137, 135, 0.1455) 0%, rgba(110, 103, 101, 0.5238) 100%)",
        }}
      >
        <MySpinner />
      </div>
      <div
        className="lazy-text"
        style={{ minWidth: "200px", textAlign: "center" }}
      >
        <p>...</p>
      </div>
    </div>
  );
}
