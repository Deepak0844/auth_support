import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Result } from "antd";

export function Activate() {
  const { token } = useParams();
  // const [data, setData] = useState();
  useEffect(() => {
    axios
      .get(`http://localhost:9000/user/account-verification/${token}`)
      .then((res) => {
        console.log(res.data.message);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, [token]);
  return (
    <div>
      <Result
        status="success"
        title="Congratulations"
        subTitle="Your account has been activated successfully."
      />
    </div>
  );
}
