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
export type FaProjectDiagramProps = typeof __propDef.props;
export type FaProjectDiagramEvents = typeof __propDef.events;
export type FaProjectDiagramSlots = typeof __propDef.slots;
export default class FaProjectDiagram extends SvelteComponentTyped<FaProjectDiagramProps, FaProjectDiagramEvents, FaProjectDiagramSlots> {
}
export {};
