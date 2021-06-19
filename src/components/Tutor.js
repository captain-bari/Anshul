import React from 'react';
import Table from 'react-bootstrap/Table'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './homecss.css';

const Tutor = () => {
  return (
      <div >
          <Row><Col></Col><Col  xs={4}>
          <Table striped bordered hover variant="dark" >
    <thead align="left">
      <tr >
        <th className="thead">Department</th>
        <th className="thead">Subjects</th>
      </tr>
    </thead>
    <tbody align="left">
      <tr >
        <td >Physics</td>
        <td><ul className="tables">
        <li>Physics-1</li>
        <li>Physics-2</li>
        <li>Physics-3</li>
        <li>Classical Physics</li>
        <li>Optics</li>
        <li>Electromagnetic Theory</li>
        <li>Quantum Physics</li>
        <li>Algebra Based Physics</li>
        <li>General Physics</li>
        <li>Solid State Physics</li>
        <li>Calculus Based Physics</li>
        <li>Modern Physics</li>
        <li>Thermodynamics </li> 
        </ul></td>
      </tr>

      <tr>
        <td>Chemistry</td>
        <td><ul className="tables">
        <li>Chemistry-1</li>
        <li>Chemistry-2</li>
        <li>Chemistry-3</li>
        <li>Inorganic Chemistry</li>
        <li>Analytical Chemistry</li>
        <li>Organic Chemistry</li>
        <li>Physical Chemistry</li>
        <li>General Chemistry</li>
        <li>Environmental Chemistry</li>
        </ul></td>
      </tr>
    </tbody>
  </Table>
          </Col><Col></Col>
    <Col  xs={4}><Table striped bordered hover variant="dark" >
    <thead align="left">
      <tr>
        <th>Department</th>
        <th>Subjects</th>
      </tr>
    </thead>
    <tbody align="left">
      <tr >
        <td>Maths</td>
        <td><ul className="tables">
        <li>Calculus-A / Calculus-1</li>
        <li>Calculus B / Calculus-2</li>
        <li> Calculus-C / Calculus-3</li>
        <li>  Precalculus</li>
        <li>  Differential Equations</li>
        <li>  Basic Algebra</li>
        <li>  College Algebra</li>
        <li>  Linear systems</li>
        <li>Probability</li>
        <li>Statistics</li>
        <li>Trigonometry</li>
        <li>Geometry
 </li> 
        </ul></td>
      </tr>

      <tr>
        <td>Chemistry</td>
        <td><ul className="tables">
        <li>Chemistry-1</li>
        <li>Chemistry-2</li>
        <li>Chemistry-3</li>
        <li>Inorganic Chemistry</li>
        <li>Analytical Chemistry</li>
        <li>Organic Chemistry</li>
        <li>Physical Chemistry</li>
        <li>General Chemistry</li>
        <li>Environmental Chemistry</li>
        </ul></td>
      </tr>
    </tbody>
  </Table>
  </Col><Col></Col>
  </Row>
  </div>
  );
}

export default Tutor;