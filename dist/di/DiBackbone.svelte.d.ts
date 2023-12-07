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
export type DiBackboneProps = typeof __propDef.props;
export type DiBackboneEvents = typeof __propDef.events;
export type DiBackboneSlots = typeof __propDef.slots;
export default class DiBackbone extends SvelteComponentTyped<DiBackboneProps, DiBackboneEvents, DiBackboneSlots> {
}
export {};
