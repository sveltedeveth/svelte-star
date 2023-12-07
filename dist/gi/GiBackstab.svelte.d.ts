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
export type GiBackstabProps = typeof __propDef.props;
export type GiBackstabEvents = typeof __propDef.events;
export type GiBackstabSlots = typeof __propDef.slots;
export default class GiBackstab extends SvelteComponentTyped<GiBackstabProps, GiBackstabEvents, GiBackstabSlots> {
}
export {};
