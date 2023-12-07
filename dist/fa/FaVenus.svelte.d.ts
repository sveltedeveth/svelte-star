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
export type FaVenusProps = typeof __propDef.props;
export type FaVenusEvents = typeof __propDef.events;
export type FaVenusSlots = typeof __propDef.slots;
export default class FaVenus extends SvelteComponentTyped<FaVenusProps, FaVenusEvents, FaVenusSlots> {
}
export {};
