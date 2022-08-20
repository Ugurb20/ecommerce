import ClipLoader from "react-spinners/ClipLoader";

export default function MySpinner() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ClipLoader color="#3b2827" loading={true} size={100} />;
    </div>
  );
}
