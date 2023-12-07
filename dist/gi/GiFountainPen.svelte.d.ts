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
export type GiFountainPenProps = typeof __propDef.props;
export type GiFountainPenEvents = typeof __propDef.events;
export type GiFountainPenSlots = typeof __propDef.slots;
export default class GiFountainPen extends SvelteComponentTyped<GiFountainPenProps, GiFountainPenEvents, GiFountainPenSlots> {
}
export {};
