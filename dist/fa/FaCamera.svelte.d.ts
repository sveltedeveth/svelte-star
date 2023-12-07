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
export type FaCameraProps = typeof __propDef.props;
export type FaCameraEvents = typeof __propDef.events;
export type FaCameraSlots = typeof __propDef.slots;
export default class FaCamera extends SvelteComponentTyped<FaCameraProps, FaCameraEvents, FaCameraSlots> {
}
export {};
