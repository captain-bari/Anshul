import React from 'react';
import Table from 'react-bootstrap/Table'
import './homecss.css';

const BasicTable = () => {
  return (
      <div className = "subjectback">
        <div className = "subjecttable">
          <Table striped bordered hover variant="dark" >
    <thead align="left">
      <tr>
        <th>Department</th>
        <th>Subjects</th>
      </tr>
    </thead>
    <tbody align="left">
      <tr >
        <td className="thead"><b>Physics</b></td>
        <td><ul>
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
        <td className="thead"><b>Chemistry</b></td>
        <td><ul>
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

      <tr>
        <td className="thead"><b>Mathematics</b></td>
        <td><ul>
        <li>Calculus-A / Calculus-1</li>
        <li>Calculus B / Calculus-2</li>
        <li>Calculus-C / Calculus-3</li>
        <li>Precalculus</li>
        <li>Differential Equations</li>
        <li>Basic Algebra</li>
        <li>College Algebra</li>
        <li>Linear systems</li>
        <li>Probability</li>
        <li>Statistics</li>
        <li>Trigonometry</li>
        <li>Geometry
</li>
        </ul></td>
      </tr>

      <tr>
        <td className="thead"><b>Mechanical Engineering</b></td>
        <td><ul>
        <li>Statics</li>
        <li>Mechanics</li>
        <li>Dynamics</li>
        <li>Strength of Materials</li>
        <li>Mechanics of Materials</li>
        <li>Fluid Statics</li>
        <li>Fluid Dynamics</li>
        <li>Fluid mechanics</li>
        <li>Thermodynamics</li>
        <li>Material Science</li>
        <li>Manufacturing Engineering</li>
        <li>Combustion Theory</li>
        <li>Vibrations</li>
        <li>Vehicle Dynamics</li>
        <li>Machine Design</li>
        <li>Experimental Methods</li>
        <li>Refrigeration and Air conditioning</li>
        <li>Heat transfer</li>
        <li>Biomaterials

</li>
        </ul></td>
      </tr>

      <tr>
        <td className="thead"><b>Civil Engineering</b></td>
        <td><ul>
        <li>Statics</li>
        <li>Analysis of Structures</li>
        <li>Fluid Mechanics</li>
        <li>Structural Design

</li>
        </ul></td>
      </tr>

      <tr>
        <td className="thead"><b>Electrical Engineering</b></td>
        <td><ul>
        <li>Circuits</li>
        <li>Electromagnetic Theory</li>
        <li>Network Analysis</li>
        <li>Control system</li>
        <li>Digital electronics</li>
        <li>Analog electronics</li>
        <li>Measurement</li>
        <li>Power electronics</li>
        <li>Power system</li>
        <li>Machines</li>
        <li>Signal and systems


</li>
        </ul></td>
      </tr>

      <tr>
        <td className="thead"><b>Biology</b></td>
        <td><ul>
        <li>Zoology</li>
        <li> Biochemistry</li>
        <li>Evolutionary Biology</li>
        <li>Cell Biology</li>
        <li>Immunology</li>
        <li>General Biology</li>
        <li>Nutrition</li>
        <li>Anthropology</li>
        <li>Genetic Engineering</li>
        <li>Environmental & Earth Science

</li>
        </ul></td>
      </tr>


      <tr>
        <td className="thead"><b>Humanities/General subjects</b></td>
        <td><ul>
        <li>Sociology</li>
        <li> Political science</li>
        <li>History</li>
        <li>American History</li>
        <li>Economics</li>
        <li>Environmental economics</li>
        <li>Ethics and Case studies

</li>
        </ul></td>
      </tr>
    </tbody>
  </Table>
  </div></div>
  );
}

export default BasicTable;