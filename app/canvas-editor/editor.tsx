"use client"

import { createStore } from 'polotno/model/store';
import { PolotnoContainer, SidePanelWrap, WorkspaceWrap } from 'polotno';
import { Toolbar } from 'polotno/toolbar/toolbar';
import { ZoomButtons } from 'polotno/toolbar/zoom-buttons';
import { Workspace } from 'polotno/canvas/workspace';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/popover2/lib/css/blueprint-popover2.css';
import { FunctionComponent, useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import { SidePanel } from 'polotno/side-panel';



export default function CanvasEditor() {
  let store=useRef(createStore())
  useEffect(()=>{
    const page = store.current.addPage();

    page.addElement({
      x: 50,
      y: 50,
      type: 'text',
      fill: 'black',
      text: 'hello',
    });
  },[])
    return (
        <PolotnoContainer style={{ width: '100vw', height: '100vh' }}>
          <SidePanelWrap>
            <SidePanel store={store.current} />
          </SidePanelWrap>
          <WorkspaceWrap>
            <Toolbar store={store.current} downloadButtonEnabled />
            <Workspace store={store.current} />
            <ZoomButtons store={store.current} />
          </WorkspaceWrap>
        </PolotnoContainer>
      );
}