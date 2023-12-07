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
export type GiNuclearProps = typeof __propDef.props;
export type GiNuclearEvents = typeof __propDef.events;
export type GiNuclearSlots = typeof __propDef.slots;
export default class GiNuclear extends SvelteComponentTyped<GiNuclearProps, GiNuclearEvents, GiNuclearSlots> {
}
export {};
