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
export type GiFastArrowProps = typeof __propDef.props;
export type GiFastArrowEvents = typeof __propDef.events;
export type GiFastArrowSlots = typeof __propDef.slots;
export default class GiFastArrow extends SvelteComponentTyped<GiFastArrowProps, GiFastArrowEvents, GiFastArrowSlots> {
}
export {};
