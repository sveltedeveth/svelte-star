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
export type GiOnSightProps = typeof __propDef.props;
export type GiOnSightEvents = typeof __propDef.events;
export type GiOnSightSlots = typeof __propDef.slots;
export default class GiOnSight extends SvelteComponentTyped<GiOnSightProps, GiOnSightEvents, GiOnSightSlots> {
}
export {};
