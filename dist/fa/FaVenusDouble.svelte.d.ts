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
export type FaVenusDoubleProps = typeof __propDef.props;
export type FaVenusDoubleEvents = typeof __propDef.events;
export type FaVenusDoubleSlots = typeof __propDef.slots;
export default class FaVenusDouble extends SvelteComponentTyped<FaVenusDoubleProps, FaVenusDoubleEvents, FaVenusDoubleSlots> {
}
export {};
