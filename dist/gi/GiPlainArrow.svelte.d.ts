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
export type GiPlainArrowProps = typeof __propDef.props;
export type GiPlainArrowEvents = typeof __propDef.events;
export type GiPlainArrowSlots = typeof __propDef.slots;
export default class GiPlainArrow extends SvelteComponentTyped<GiPlainArrowProps, GiPlainArrowEvents, GiPlainArrowSlots> {
}
export {};
