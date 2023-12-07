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
export type FaVenusMarsProps = typeof __propDef.props;
export type FaVenusMarsEvents = typeof __propDef.events;
export type FaVenusMarsSlots = typeof __propDef.slots;
export default class FaVenusMars extends SvelteComponentTyped<FaVenusMarsProps, FaVenusMarsEvents, FaVenusMarsSlots> {
}
export {};
