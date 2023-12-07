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
export type GiFrozenArrowProps = typeof __propDef.props;
export type GiFrozenArrowEvents = typeof __propDef.events;
export type GiFrozenArrowSlots = typeof __propDef.slots;
export default class GiFrozenArrow extends SvelteComponentTyped<GiFrozenArrowProps, GiFrozenArrowEvents, GiFrozenArrowSlots> {
}
export {};
