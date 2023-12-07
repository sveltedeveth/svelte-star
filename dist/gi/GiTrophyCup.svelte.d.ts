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
export type GiTrophyCupProps = typeof __propDef.props;
export type GiTrophyCupEvents = typeof __propDef.events;
export type GiTrophyCupSlots = typeof __propDef.slots;
export default class GiTrophyCup extends SvelteComponentTyped<GiTrophyCupProps, GiTrophyCupEvents, GiTrophyCupSlots> {
}
export {};
