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
export type GiStickGrenadeProps = typeof __propDef.props;
export type GiStickGrenadeEvents = typeof __propDef.events;
export type GiStickGrenadeSlots = typeof __propDef.slots;
export default class GiStickGrenade extends SvelteComponentTyped<GiStickGrenadeProps, GiStickGrenadeEvents, GiStickGrenadeSlots> {
}
export {};
