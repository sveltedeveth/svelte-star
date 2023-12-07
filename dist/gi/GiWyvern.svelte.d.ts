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
export type GiWyvernProps = typeof __propDef.props;
export type GiWyvernEvents = typeof __propDef.events;
export type GiWyvernSlots = typeof __propDef.slots;
export default class GiWyvern extends SvelteComponentTyped<GiWyvernProps, GiWyvernEvents, GiWyvernSlots> {
}
export {};
