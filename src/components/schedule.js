import React from 'react';
import {
  ScheduleComponent,
  ViewsDirective,
  ViewDirective,
  Inject,
  TimelineViews,
  Agenda,
  Resize,
  DragAndDrop
} from '@syncfusion/ej2-react-schedule';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

const onPopupOpen = args => {
  if ((!args.target.classList.contains('e-appointment') && (args.type === 'QuickInfo')) || (args.type === 'Editor')) {
    args.cancel = true;
  }
}
const onActionBegin = args => {
  if ((args.requestType === 'eventCreate') || args.requestType === 'eventChange') {
    args.cancel = true;
  }
}
const onDragStop = args => {
  args.cancel = true;
}
const onResizeStop = args => {
  args.cancel = true;
}

const applyCategoryColor = (args, currentView) => {
  var categoryColor = args.data.CategoryColor;
  if (!args.element || !categoryColor) {
      return;
  }
  if (currentView === 'Agenda') {
      args.element.firstChild.style.borderLeftColor = categoryColor;
  }
  else {
      args.element.style.backgroundColor = categoryColor;
  }
};

export default ({ schedule, height }) => {
  let scheduleObj = null;

  return <div className='schedule-control-section'>
    <div className='col-lg-12 control-section'>
      <div className='control-wrapper'>
      <ScheduleComponent
        ref={t => scheduleObj = t}
        height={height}
        selectedDate={new Date(2020, 9, 3)}
        eventSettings={{ dataSource: schedule, enableTooltip: true }}
        popupOpen={onPopupOpen}
        actionBegin={onActionBegin}
        dragStop={onDragStop}
        resizeStop={onResizeStop}
        eventRendered={args => applyCategoryColor(args, scheduleObj.currentView)}
      >
          <ViewsDirective>
            <ViewDirective option='TimelineDay' />
            <ViewDirective option='Agenda' />
          </ViewsDirective>
          <Inject services={[TimelineViews, Agenda, Resize, DragAndDrop]} />
        </ScheduleComponent>
      </div>
    </div>
  </div>
};
