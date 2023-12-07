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
export type GiEncirclementProps = typeof __propDef.props;
export type GiEncirclementEvents = typeof __propDef.events;
export type GiEncirclementSlots = typeof __propDef.slots;
export default class GiEncirclement extends SvelteComponentTyped<GiEncirclementProps, GiEncirclementEvents, GiEncirclementSlots> {
}
export {};
