import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type GiDiagramProps = typeof __propDef.props;
export type GiDiagramEvents = typeof __propDef.events;
export type GiDiagramSlots = typeof __propDef.slots;
export default class GiDiagram extends SvelteComponentTyped<GiDiagramProps, GiDiagramEvents, GiDiagramSlots> {
}
export {};
