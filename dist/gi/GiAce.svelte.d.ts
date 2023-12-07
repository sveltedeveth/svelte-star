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
export type GiAceProps = typeof __propDef.props;
export type GiAceEvents = typeof __propDef.events;
export type GiAceSlots = typeof __propDef.slots;
export default class GiAce extends SvelteComponentTyped<GiAceProps, GiAceEvents, GiAceSlots> {
}
export {};
