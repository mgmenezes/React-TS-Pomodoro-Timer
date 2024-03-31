import { HistoryContainer, HistoryList } from "./styles";

export function History() {
  return (
    <HistoryContainer>
      <h1>My history</h1>
      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Time</th>
              <th>Start</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Task 1</td>
              <td>25 minutes</td>
              <td>Last Week</td>
              <td>10/09/2021</td>
            </tr>
            <tr>
              <td>Task 2</td>
              <td>50 minutes</td>
              <td>Last Week</td>
              <td>10/09/2021</td>
            </tr>
            <tr>
              <td>Task 3</td>
              <td>30 minutes</td>
              <td>Last Week</td>
              <td>10/09/2021</td>
            </tr>
            <tr>
              <td>Task 4</td>
              <td>Last Week</td>
              <td>30 minutes</td>
              <td>10/09/2021</td>
            </tr>
            <tr>
              <td>Task 5</td>
              <td>Last Week</td>
              <td>30 minutes</td>
              <td>10/09/2021</td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  );
}
