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
export type GiIonicColumnProps = typeof __propDef.props;
export type GiIonicColumnEvents = typeof __propDef.events;
export type GiIonicColumnSlots = typeof __propDef.slots;
export default class GiIonicColumn extends SvelteComponentTyped<GiIonicColumnProps, GiIonicColumnEvents, GiIonicColumnSlots> {
}
export {};
