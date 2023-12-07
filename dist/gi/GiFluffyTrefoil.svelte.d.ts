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
export type GiFluffyTrefoilProps = typeof __propDef.props;
export type GiFluffyTrefoilEvents = typeof __propDef.events;
export type GiFluffyTrefoilSlots = typeof __propDef.slots;
export default class GiFluffyTrefoil extends SvelteComponentTyped<GiFluffyTrefoilProps, GiFluffyTrefoilEvents, GiFluffyTrefoilSlots> {
}
export {};
