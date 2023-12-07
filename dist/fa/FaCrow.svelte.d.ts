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
export type FaCrowProps = typeof __propDef.props;
export type FaCrowEvents = typeof __propDef.events;
export type FaCrowSlots = typeof __propDef.slots;
export default class FaCrow extends SvelteComponentTyped<FaCrowProps, FaCrowEvents, FaCrowSlots> {
}
export {};
