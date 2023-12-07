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
export type GiFnFalProps = typeof __propDef.props;
export type GiFnFalEvents = typeof __propDef.events;
export type GiFnFalSlots = typeof __propDef.slots;
export default class GiFnFal extends SvelteComponentTyped<GiFnFalProps, GiFnFalEvents, GiFnFalSlots> {
}
export {};
