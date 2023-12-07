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
export type GiMountaintopProps = typeof __propDef.props;
export type GiMountaintopEvents = typeof __propDef.events;
export type GiMountaintopSlots = typeof __propDef.slots;
export default class GiMountaintop extends SvelteComponentTyped<GiMountaintopProps, GiMountaintopEvents, GiMountaintopSlots> {
}
export {};
