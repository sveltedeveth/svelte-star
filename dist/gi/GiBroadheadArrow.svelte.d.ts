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
export type GiBroadheadArrowProps = typeof __propDef.props;
export type GiBroadheadArrowEvents = typeof __propDef.events;
export type GiBroadheadArrowSlots = typeof __propDef.slots;
export default class GiBroadheadArrow extends SvelteComponentTyped<GiBroadheadArrowProps, GiBroadheadArrowEvents, GiBroadheadArrowSlots> {
}
export {};
