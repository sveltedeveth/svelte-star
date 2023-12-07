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
export type GiGrenadeProps = typeof __propDef.props;
export type GiGrenadeEvents = typeof __propDef.events;
export type GiGrenadeSlots = typeof __propDef.slots;
export default class GiGrenade extends SvelteComponentTyped<GiGrenadeProps, GiGrenadeEvents, GiGrenadeSlots> {
}
export {};
