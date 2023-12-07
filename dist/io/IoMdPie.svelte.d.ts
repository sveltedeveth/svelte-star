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
export type IoMdPieProps = typeof __propDef.props;
export type IoMdPieEvents = typeof __propDef.events;
export type IoMdPieSlots = typeof __propDef.slots;
export default class IoMdPie extends SvelteComponentTyped<IoMdPieProps, IoMdPieEvents, IoMdPieSlots> {
}
export {};
