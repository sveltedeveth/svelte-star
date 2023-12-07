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
export type GiAstronautHelmetProps = typeof __propDef.props;
export type GiAstronautHelmetEvents = typeof __propDef.events;
export type GiAstronautHelmetSlots = typeof __propDef.slots;
export default class GiAstronautHelmet extends SvelteComponentTyped<GiAstronautHelmetProps, GiAstronautHelmetEvents, GiAstronautHelmetSlots> {
}
export {};
