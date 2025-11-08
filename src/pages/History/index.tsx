import { useContext, useEffect, useState } from "react";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";
import { HistoryContainer, HistoryList, Status } from "./styles";
import {
  PaginationContainer,
  PaginationButton,
  PaginationInfo,
  PaginationNumber,
} from "./styles";
import { CyclesContext } from "../../context/CyclesContext";
import { CaretLeftIcon, CaretRightIcon } from "@phosphor-icons/react";

export function History() {
  const { cycles } = useContext(CyclesContext);

  const pageSize = 5;

  const [page, setPage] = useState(() => {
    const stored = localStorage.getItem("@ignite-timer:history-page");
    return stored ? Number(stored) : 1;
  });

  useEffect(() => {
    localStorage.setItem("@ignite-timer:history-page", String(page));
  }, [page]);

  const sortedCycles = [...cycles].reverse();
  const totalPages = Math.ceil(sortedCycles.length / pageSize);

  const startIndex = (page - 1) * pageSize;
  const paginatedCycles = sortedCycles.slice(startIndex, startIndex + pageSize);

  function handlePrev() {
    setPage((old) => Math.max(old - 1, 1));
  }

  function handleNext() {
    setPage((old) => Math.min(old + 1, totalPages));
  }

  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>

      <HistoryList key={page}>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Iniciado</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {paginatedCycles.map((cycle) => {
              return (
                <tr key={cycle.id}>
                  <td>{cycle.task}</td>
                  <td>{cycle.minutesAmount} minutos</td>
                  <td>
                    {formatDistanceToNow(new Date(cycle.startDate), {
                      addSuffix: true,
                      locale: ptBR,
                    })}
                  </td>
                  <td>
                    {cycle.finishedDate && (
                      <Status statusColor="green">Concluído</Status>
                    )}

                    {cycle.interruptedDate && (
                      <Status statusColor="red">Interrompido</Status>
                    )}

                    {!cycle.finishedDate && !cycle.interruptedDate && (
                      <Status statusColor="yellow">Em andamento</Status>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </HistoryList>

      <PaginationContainer>
        <PaginationButton onClick={handlePrev} disabled={page === 1}>
          <CaretLeftIcon size={24} />
        </PaginationButton>

        {Array.from({ length: totalPages }).map((_, index) => {
          const pageNumber = index + 1;
          return (
            <PaginationNumber
              key={pageNumber}
              active={pageNumber === page}
              onClick={() => setPage(pageNumber)}
            >
              {pageNumber}
            </PaginationNumber>
          );
        })}

        <PaginationButton onClick={handleNext} disabled={page === totalPages}>
          <CaretRightIcon size={24} />
        </PaginationButton>

        <PaginationInfo>{cycles.length} registros</PaginationInfo>
      </PaginationContainer>
    </HistoryContainer>
  );
}
