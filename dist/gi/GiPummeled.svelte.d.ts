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
export type GiPummeledProps = typeof __propDef.props;
export type GiPummeledEvents = typeof __propDef.events;
export type GiPummeledSlots = typeof __propDef.slots;
export default class GiPummeled extends SvelteComponentTyped<GiPummeledProps, GiPummeledEvents, GiPummeledSlots> {
}
export {};
