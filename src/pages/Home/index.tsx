import React, { useState, useMemo } from "react";
import styled from "styled-components";
import { DndContext, useDraggable, closestCenter } from "@dnd-kit/core";
import { createSnapModifier } from "@dnd-kit/modifiers";
import { CSS } from "@dnd-kit/utilities";
import type { DragEndEvent } from "@dnd-kit/core";
import { ResizableBox } from "react-resizable";
import "react-resizable/css/styles.css";


// ------------------------------------------------------------
// STYLES
// ------------------------------------------------------------
const HomeContainer = styled.div`
  padding: ${(props) => props.theme.spacing[6]};
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.div`
  display: flex;
  gap: ${(props) => props.theme.spacing[4]};
  align-items: center;
  margin-bottom: ${(props) => props.theme.spacing[6]};
`;

const Board = styled.div`
  position: relative;
  width: 100%;
  min-height: 600px;
  border: 1px dashed ${(props) => props.theme.colors.border};
  border-radius: ${(props) => props.theme.borderRadius.lg};
`;

const WidgetCard = styled.div`
  background-color: ${(props) => props.theme.colors.card.background};
  border-radius: ${(props) => props.theme.borderRadius.lg};
  padding: ${(props) => props.theme.spacing[4]};
  box-shadow: ${(props) => props.theme.shadows.md};
  border: 1px solid ${(props) => props.theme.colors.border};
  width: 100%;
  height: 100%;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
`;


const RemoveButton = styled.button`
  margin-top: ${(props) => props.theme.spacing[3]};
  background-color: ${(props) => props.theme.colors.error.main};
  color: ${(props) => props.theme.colors.error.contrast};
  border: none;
  padding: ${(props) => `${props.theme.spacing[2]} ${props.theme.spacing[4]}`};
  border-radius: ${(props) => props.theme.borderRadius.md};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.error.dark};
  }
`;

// ------------------------------------------------------------
// WIDGETS MOCK
// ------------------------------------------------------------
const widgetsList = [
  { id: "tasks", name: "Tarefas" },
  { id: "calendar", name: "Calendário" },
  { id: "finance", name: "Financeiro" },
  { id: "notes", name: "Anotações" },
] as const;

type WidgetId = (typeof widgetsList)[number]["id"];

const WidgetsMap: Record<WidgetId, React.FC> = {
  tasks: () => (
    <WidgetCard>
      <h3>Tarefas</h3>
      <p>📌 3 pendentes</p>
    </WidgetCard>
  ),
  calendar: () => (
    <WidgetCard>
      <h3>Calendário</h3>
      <p>📅 Reunião amanhã — 14h</p>
    </WidgetCard>
  ),
  finance: () => (
    <WidgetCard>
      <h3>Financeiro</h3>
      <p>💰 R$ 2.400 este mês</p>
    </WidgetCard>
  ),
  notes: () => (
    <WidgetCard>
      <h3>Anotações</h3>
      <p>📝 Enviar proposta</p>
    </WidgetCard>
  ),
};

// ------------------------------------------------------------
// DRAGGABLE WIDGET
// ------------------------------------------------------------
function DraggableWidget({
  id,
  x,
  y,
  w,
  h,
  children,
  onRemove,
  onResize,
}: {
  id: string;
  x: number;
  y: number;
  w: number;
  h: number;
  children: React.ReactNode;
  onRemove: () => void;
  onResize?: (width: number, height: number) => void;
}) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id });

  const style = {
    position: "absolute" as const,
    left: x,
    top: y,
    transform: CSS.Translate.toString(transform),
    cursor: "grab",
  };

  return (
    <div style={style}>
      <ResizableBox
        width={w}
        height={h}
        minConstraints={[100, 80]} // tamanho mínimo
        onResizeStop={(e, { size }) => {
          if (onResize) onResize(size.width, size.height);
        }}
        handle={
          <span
            style={{
              position: "absolute",
              bottom: 0,
              right: 0,
              cursor: "se-resize",
            }}
          >
            ↘
          </span>
        }
      >
        <div
          ref={setNodeRef}
          {...attributes}
          {...listeners}
          style={{ width: "100%", height: "100%" }}
        >
          {children}
        </div>
      </ResizableBox>

      <RemoveButton onClick={onRemove}>Remover</RemoveButton>
    </div>
  );
}

// ------------------------------------------------------------
// HOME
// ------------------------------------------------------------
const Home: React.FC = () => {
  const [selectedWidget, setSelectedWidget] = useState<WidgetId | "">("");
  const [gridSize, setGridSize] = useState(30);
  const [widgetWidth, setWidgetWidth] = useState(200);
  const [widgetHeight, setWidgetHeight] = useState(150);

  const snapToGrid = useMemo(() => createSnapModifier(gridSize), [gridSize]);

  const [widgets, setWidgets] = useState<
    Record<string, { x: number; y: number; w: number; h: number }>
  >({});

  // ⬇ melhor posicionamento inicial baseado em grid
  function handleAddWidget() {
    if (!selectedWidget) return;
    if (widgets[selectedWidget]) return;

    const i = Object.keys(widgets).length;
    const col = i % 4;
    const row = Math.floor(i / 4);

    setWidgets((prev) => ({
      ...prev,
      [selectedWidget]: {
        x: 40 + col * (gridSize * 8),
        y: 40 + row * (gridSize * 6),
        w: widgetWidth,
        h: widgetHeight,
      },
    }));
  }

 function handleDragEnd(e: DragEndEvent) {
   const { delta, active } = e;
   if (!delta) return;

   setWidgets((prev) => {
     const widget = prev[active.id];
     if (!widget) return prev;

     return {
       ...prev,
       [active.id]: {
         ...widget, // mantém w e h
         x: widget.x + delta.x,
         y: widget.y + delta.y,
       },
     };
   });
 }


  function handleRemoveWidget(id: string) {
    setWidgets((prev) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { [id]: _, ...rest } = prev;
      return rest;
    });
  }

  return (
    <HomeContainer>
      <h1>Dashboard — Drag and Drop Livre</h1>

      <Header>
        <select
          value={selectedWidget}
          onChange={(e) => setSelectedWidget(e.target.value as WidgetId)}
        >
          <option value="">Selecionar Widget...</option>
          {widgetsList.map((w) => (
            <option key={w.id} value={w.id}>
              {w.name}
            </option>
          ))}
        </select>

        <button onClick={handleAddWidget}>Adicionar</button>

        <label>
          Grid (px):
          <input
            type="number"
            value={gridSize}
            onChange={(e) => setGridSize(Number(e.target.value))}
            style={{ width: 80 }}
          />
        </label>
        <label>
          Largura:
          <input
            type="number"
            value={widgetWidth}
            onChange={(e) => setWidgetWidth(Number(e.target.value))}
            style={{ width: 80 }}
          />
        </label>

        <label>
          Altura:
          <input
            type="number"
            value={widgetHeight}
            onChange={(e) => setWidgetHeight(Number(e.target.value))}
            style={{ width: 80 }}
          />
        </label>
      </Header>

      <DndContext
        modifiers={[snapToGrid]}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <Board>
          {Object.entries(widgets).map(([id, pos]) => {
            const Widget = WidgetsMap[id as WidgetId];
            return (
              <DraggableWidget
                key={id}
                id={id}
                x={pos.x}
                y={pos.y}
                w={pos.w}
                h={pos.h}
                onRemove={() => handleRemoveWidget(id)}
                onResize={(w, h) => {
                  setWidgets((prev) => ({
                    ...prev,
                    [id]: { ...prev[id], w, h },
                  }));
                }}
              >
                <Widget />
              </DraggableWidget>
            );
          })}
        </Board>
      </DndContext>
    </HomeContainer>
  );
};

export default Home;
