import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col } from 'react-bootstrap';

class budgetBar extends Component {
  render() {
    return (
      <div style={{ width: '70%', marginBottom: '5%' }}>
        <Col
          md={2} style={{
            height: '50px',
            margin: '0',
            padding: '0',
          }}
        >
          <div
            className="upper"
            style={{
              borderBottom: 'medium solid black',
              width: '100%',
              height: '100%',
            }}
          >
            {this.props.bar.destination ? (
              <img className="img-circle" style={{ width: '75px', height: '75px' }} src={this.props.bar.destination} />
          ) : null}
          </div>
          <div
            className="lower" style={{
              borderTop: 'medium solid black',
              width: '100%',
              height: '100%',
            }}
          />
        </Col>
        <Col
          md={2} style={{
            height: '50px',
            margin: '0',
            padding: '0',
          }}
        >
          <div
            className="upper"
            style={{
              borderBottom: 'medium solid black',
              width: '100%',
              height: '100%',
            }}
          >
            {this.props.bar.hotel ? (
              <img className="img-circle" style={{ width: '75px', height: '75px' }} src={this.props.bar.hotel} />
          ) : null}
          </div>
          <div
            className="lower" style={{
              borderTop: 'medium solid black',
              width: '100%',
              height: '100%',
            }}
          />
        </Col>
        <Col
          md={2} style={{
            height: '50px',
            margin: '0',
            padding: '0',
          }}
        >
          <div
            className="upper"
            style={{
              borderBottom: 'medium solid black',
              width: '100%',
              height: '100%',
            }}
          >

            {this.props.bar.events ? (
              <img className="img-circle" style={{ width: '75px', height: '75px' }} src={this.props.bar.events} />
                ) : null}

          </div>

          <div
            className="lower" style={{
              borderTop: 'medium solid black',
              width: '100%',
              height: '100%',
            }}
          />
        </Col>
        <Col
          md={2} style={{
            height: '50px',
            margin: '0',
            padding: '0',
          }}
        >
          <div
            className="upper"
            style={{
              borderBottom: 'medium solid black',
              width: '100%',
              height: '100%',
            }}
          />
          <div
            className="lower" style={{
              borderTop: 'medium solid black',
              width: '100%',
              height: '100%',
            }}
          />
        </Col>
        <Col
          md={2} style={{
            height: '50px',
            margin: '0',
            padding: '0',
          }}
        >
          <div
            className="upper"
            style={{
              borderBottom: 'medium solid black',
              width: '100%',
              height: '100%',
            }}
          />
          <div
            className="lower" style={{
              borderTop: 'medium solid black',
              width: '100%',
              height: '100%',
            }}
          />
        </Col>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  ...state,
});

export default connect(mapStateToProps, null)(budgetBar);
