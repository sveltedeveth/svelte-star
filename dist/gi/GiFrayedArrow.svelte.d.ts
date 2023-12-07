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
export type GiFrayedArrowProps = typeof __propDef.props;
export type GiFrayedArrowEvents = typeof __propDef.events;
export type GiFrayedArrowSlots = typeof __propDef.slots;
export default class GiFrayedArrow extends SvelteComponentTyped<GiFrayedArrowProps, GiFrayedArrowEvents, GiFrayedArrowSlots> {
}
export {};
