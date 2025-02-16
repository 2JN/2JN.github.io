import React from "react";

import * as styles from "./table.module.css";

const Table = () => (
  <table className={styles.table}>
    <caption>Delivery slots:</caption>
    <thead>
      <tr>
        <td aria-hidden></td>
        <th>Standard</th>
        <th>Intelligent Tiering</th>
        <th>Standard-AI</th>
        <th>One Zone-AI</th>
        <th>Glacier Instant Retrieval</th>
        <th>Glacier Flexible Retrieval</th>
        <th>Glacier Deep Archive</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>Durability</th>
        <td colSpan="7" style={{ textAlign: "center" }}>
          99.999999999% == (11 9's)
        </td>
      </tr>
      <tr>
        <th>Availability</th>
        <td>99.99%</td>
        <td>99.9%</td>
        <td>99.9%</td>
        <td>99.5%</td>
        <td>99.9%</td>
        <td>99.99%</td>
        <td>99.99%</td>
      </tr>
      <tr>
        <th>Availability SLA</th>
        <td>99.9%</td>
        <td>99%</td>
        <td>99%</td>
        <td>99%</td>
        <td>99%</td>
        <td>99.9%</td>
        <td>99.9%</td>
      </tr>
      <tr>
        <th>Availability Zones</th>
        <td>&gt;=3</td>
        <td>&gt;=3</td>
        <td>&gt;=3</td>
        <td>1</td>
        <td>&gt;=3</td>
        <td>&gt;=3</td>
        <td>&gt;=3</td>
      </tr>
      <tr>
        <th>Min. Storage Duration Charge</th>
        <td>None</td>
        <td>None</td>
        <td>30 days</td>
        <td>30 days</td>
        <td>90 days</td>
        <td>90 days</td>
        <td>180 days</td>
      </tr>
      <tr>
        <th>Min. Billable Object Size</th>
        <td>None</td>
        <td>None</td>
        <td>128 KB</td>
        <td>128 KB</td>
        <td>128 KB</td>
        <td>40 KB</td>
        <td>40 KB</td>
      </tr>
      <tr>
        <th>Retrieval Fee</th>
        <td>None</td>
        <td>None</td>
        <td>Per GB retrieved</td>
        <td>Per GB retrieved</td>
        <td>Per GB retrieved</td>
        <td>Per GB retrieved</td>
        <td>Per GB retrieved</td>
      </tr>
    </tbody>
  </table>
);

export default Table;
