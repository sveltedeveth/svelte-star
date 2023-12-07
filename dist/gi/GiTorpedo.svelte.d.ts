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
export type GiTorpedoProps = typeof __propDef.props;
export type GiTorpedoEvents = typeof __propDef.events;
export type GiTorpedoSlots = typeof __propDef.slots;
export default class GiTorpedo extends SvelteComponentTyped<GiTorpedoProps, GiTorpedoEvents, GiTorpedoSlots> {
}
export {};
