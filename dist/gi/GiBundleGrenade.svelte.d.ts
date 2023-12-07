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
export type GiBundleGrenadeProps = typeof __propDef.props;
export type GiBundleGrenadeEvents = typeof __propDef.events;
export type GiBundleGrenadeSlots = typeof __propDef.slots;
export default class GiBundleGrenade extends SvelteComponentTyped<GiBundleGrenadeProps, GiBundleGrenadeEvents, GiBundleGrenadeSlots> {
}
export {};
