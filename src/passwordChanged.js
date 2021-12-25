import { Result } from "antd";

export function PassChanged() {
  return (
    <div>
      <Result
        status="success"
        title="Password Updated!"
        subTitle="Your password has been changed successfully Use your new password to log in"
      />
    </div>
  );
}
