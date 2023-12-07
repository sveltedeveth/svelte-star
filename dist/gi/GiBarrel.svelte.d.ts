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
export type GiBarrelProps = typeof __propDef.props;
export type GiBarrelEvents = typeof __propDef.events;
export type GiBarrelSlots = typeof __propDef.slots;
export default class GiBarrel extends SvelteComponentTyped<GiBarrelProps, GiBarrelEvents, GiBarrelSlots> {
}
export {};
