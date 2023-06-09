import { useNavigate, useSearchParams } from "react-router-dom";

const Edit = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get("id");
  console.log(id);

  const mode = searchParams.get("mode");
  console.log(mode);

  return (
    <div>
      <h1>Edit</h1>
      <p>이곳은 추가 작성 페이지입니다.</p>
      <button onClick={() => setSearchParams({ who: "jiyoung" })}>
        쿼리 스트링 바꾸기
      </button>

      <button onClick={() => navigate("/home")}>HOME으로 가기</button>

      <button onClick={() => navigate(-1)}>뒤로 가기</button>
    </div>
  );
};

export default Edit;
