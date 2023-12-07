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
export type GiBowArrowProps = typeof __propDef.props;
export type GiBowArrowEvents = typeof __propDef.events;
export type GiBowArrowSlots = typeof __propDef.slots;
export default class GiBowArrow extends SvelteComponentTyped<GiBowArrowProps, GiBowArrowEvents, GiBowArrowSlots> {
}
export {};
