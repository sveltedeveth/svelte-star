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
export type GiFleshyMassProps = typeof __propDef.props;
export type GiFleshyMassEvents = typeof __propDef.events;
export type GiFleshyMassSlots = typeof __propDef.slots;
export default class GiFleshyMass extends SvelteComponentTyped<GiFleshyMassProps, GiFleshyMassEvents, GiFleshyMassSlots> {
}
export {};
