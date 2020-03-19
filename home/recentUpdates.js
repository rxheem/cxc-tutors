import { Toast } from "react-bootstrap";

class RecentUpdates extends React.Component {
  render() {
    return (
      <div>
        <h5>Recent Updates</h5>
        <br />
        <Toast>
          <Toast.Header>
            <img
              style={{ width: "15px" }}
              src="https://avatars2.githubusercontent.com/u/37784173?s=460&u=e573e196762cf5e53acee68dd0e8f39d35ac0b32&v=4"
              className="rounded mr-2"
              alt="icon"
            />
            <strong className="mr-auto">Raheem M.</strong>
            <small>18 March 2020</small>
          </Toast.Header>
          <Toast.Body>
            Our online classrooms are currently full and we will not be creating
            anymore until close towards exam time.{" "}
          </Toast.Body>
        </Toast>

        <Toast>
          <Toast.Header>
            <img
              style={{ width: "15px" }}
              src="https://avatars2.githubusercontent.com/u/37784173?s=460&u=e573e196762cf5e53acee68dd0e8f39d35ac0b32&v=4"
              className="rounded mr-2"
              alt="icon"
            />
            <strong className="mr-auto">Raheem M.</strong>
            <small>18 March 2020</small>
          </Toast.Header>
          <Toast.Body>
            New classroom codes:
            <br />
            <br />
            Biology: r5tw3dx <br />
            English A: wepktjm <br />
            Integrated Science: qf653h2
            <br />
            <br />
            You can download the official{" "}
            <a
              targer="_blank"
              href="https://play.google.com/store/apps/details?id=com.google.android.apps.classroom&hl=en"
            >
              Google Classroom
            </a>{" "}
            app or use the online{" "}
            <a target="_blank" href="https://www.classroom.google.com">
              website
            </a>
            .
          </Toast.Body>
        </Toast>

        <Toast>
          <Toast.Header>
            <img
              style={{ width: "15px" }}
              src="https://i.imgur.com/stMN66u.jpg"
              className="rounded mr-2"
              alt="icon"
            />
            <strong className="mr-auto">CXC Student Guide Team</strong>
            <small>18 March 2020</small>
          </Toast.Header>
          <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
        </Toast>
      </div>
    );
  }
}

export default RecentUpdates;
