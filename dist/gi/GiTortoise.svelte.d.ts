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
export type GiTortoiseProps = typeof __propDef.props;
export type GiTortoiseEvents = typeof __propDef.events;
export type GiTortoiseSlots = typeof __propDef.slots;
export default class GiTortoise extends SvelteComponentTyped<GiTortoiseProps, GiTortoiseEvents, GiTortoiseSlots> {
}
export {};
