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
export type DiStylusProps = typeof __propDef.props;
export type DiStylusEvents = typeof __propDef.events;
export type DiStylusSlots = typeof __propDef.slots;
export default class DiStylus extends SvelteComponentTyped<DiStylusProps, DiStylusEvents, DiStylusSlots> {
}
export {};
