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
export type GiVampireCapeProps = typeof __propDef.props;
export type GiVampireCapeEvents = typeof __propDef.events;
export type GiVampireCapeSlots = typeof __propDef.slots;
export default class GiVampireCape extends SvelteComponentTyped<GiVampireCapeProps, GiVampireCapeEvents, GiVampireCapeSlots> {
}
export {};
