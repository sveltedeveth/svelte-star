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
export type FaCuttlefishProps = typeof __propDef.props;
export type FaCuttlefishEvents = typeof __propDef.events;
export type FaCuttlefishSlots = typeof __propDef.slots;
export default class FaCuttlefish extends SvelteComponentTyped<FaCuttlefishProps, FaCuttlefishEvents, FaCuttlefishSlots> {
}
export {};
