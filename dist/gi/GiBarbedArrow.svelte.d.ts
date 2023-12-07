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
export type GiBarbedArrowProps = typeof __propDef.props;
export type GiBarbedArrowEvents = typeof __propDef.events;
export type GiBarbedArrowSlots = typeof __propDef.slots;
export default class GiBarbedArrow extends SvelteComponentTyped<GiBarbedArrowProps, GiBarbedArrowEvents, GiBarbedArrowSlots> {
}
export {};
