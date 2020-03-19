import Head from "next/head";

// Components
import Header from "./header";
import Footer from "./footer";

class Layout extends React.Component {
  render() {
    return (
      <div>
        <Head>
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
            integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
            crossorigin="anonymous"
          />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/shards-ui@3.0.0/dist/css/shards.css"
            integrity="sha256-BzSgU/6XJ8eMy1Qsm+xaQJFsefUqgN7vYjZQ2CRjI+4="
            crossorigin="anonymous"
          />
          <script
            src="https://kit.fontawesome.com/3b83e0293b.js"
            crossorigin="anonymous"
          />
          <style>
            {`
              a {
          	color: #0084cf;
            }
            .breadcrumb {
            	background-color: transparent !important;
            }

            .marketing .col-lg-4 {
	margin-bottom: 1.5rem;
	text-align: center;
}
.marketing h2 {
	font-weight: 400;
}
.marketing .col-lg-4 p {
	margin-right: .75rem;
	margin-left: .75rem;
}
            `}
          </style>
        </Head>
        <span />
        <Header />
        {this.props.children}
        <br />
        <Footer />
      </div>
    );
  }
}

export default Layout;
