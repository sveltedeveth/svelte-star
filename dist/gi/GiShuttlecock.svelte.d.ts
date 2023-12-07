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
export type GiShuttlecockProps = typeof __propDef.props;
export type GiShuttlecockEvents = typeof __propDef.events;
export type GiShuttlecockSlots = typeof __propDef.slots;
export default class GiShuttlecock extends SvelteComponentTyped<GiShuttlecockProps, GiShuttlecockEvents, GiShuttlecockSlots> {
}
export {};
