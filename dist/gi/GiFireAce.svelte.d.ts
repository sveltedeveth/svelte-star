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
export type GiFireAceProps = typeof __propDef.props;
export type GiFireAceEvents = typeof __propDef.events;
export type GiFireAceSlots = typeof __propDef.slots;
export default class GiFireAce extends SvelteComponentTyped<GiFireAceProps, GiFireAceEvents, GiFireAceSlots> {
}
export {};
