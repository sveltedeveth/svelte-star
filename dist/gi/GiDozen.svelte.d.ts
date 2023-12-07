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
export type GiDozenProps = typeof __propDef.props;
export type GiDozenEvents = typeof __propDef.events;
export type GiDozenSlots = typeof __propDef.slots;
export default class GiDozen extends SvelteComponentTyped<GiDozenProps, GiDozenEvents, GiDozenSlots> {
}
export {};
