import {
  Container,
  Row,
  Col,
  Alert,
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardHeader,
  CardTitle,
  CardImg,
  CardBody,
  CardFooter,
  Button
} from "shards-react";

import Layout from "../components/layout";
import RecentUpdates from "../home/recentUpdates";
import Img from "react-image";

const index = props => (
  <Layout>
    <Container>
      <br />
      <Breadcrumb>
        <BreadcrumbItem>
          <a href="/">Home</a>
        </BreadcrumbItem>
        <BreadcrumbItem active></BreadcrumbItem>
      </Breadcrumb>
    </Container>

    <Container>
      <div className="marketing">
        <Row>
          <Col sm={12} md={4} lg={4} xl={4}>
            <Img
              src="https://pbcdn1.podbean.com/imglogo/image-logo/5663970/holabig.jpg"
              alt="image of listening"
              style={{ height: "180px" }}
              className="rounded-circle"
            />

            <br />
            <br />
            <h2>Spanish</h2>
            <p>
              Improve your Spanish listening skills with audio recordings from
              native Spanish-speakers, and listen recorded extracts from CXC
              past papers questions.
            </p>
            <p>
              <Button theme="warning" href="/listening" role="button">
                Start Learning &raquo;
              </Button>
            </p>
          </Col>
          <Col sm={12} md={4} lg={4} xl={4}>
            <Img
              src="https://www.universitymagazine.ca/wp-content/uploads/2018/02/How-To-Major-In-Biology.jpg"
              alt="image of listening"
              style={{ width: "100%" }}
            />

            <br />
            <br />
            <h2>Biology</h2>
            <p>
              Start learning CSEC and CAPE biology from teachers and tutors from
              across the Caribbean!
            </p>
            <p>
              <Button theme="warning" href="/listening" role="button">
                Start Learning &raquo;
              </Button>
            </p>
          </Col>
          <Col sm={12} md={4} lg={4} xl={4}>
            <img
              style={{ height: "180px", width: "60%" }}
              src="https://image.shutterstock.com/image-vector/math-theory-mathematical-formula-equation-260nw-360399383.jpg"
              className="rounded-circle"
            />

            <br />
            <br />
            <h2>Mathematics</h2>
            <p>Need help finding a math tutor?</p>
            <p>
              <Button theme="info" href="/" role="button">
                Start Learning &raquo;
              </Button>
            </p>
          </Col>
        </Row>
      </div>

      <RecentUpdates />
    </Container>
  </Layout>
);

export default index;
