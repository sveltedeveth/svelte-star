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
export type GiScalpelProps = typeof __propDef.props;
export type GiScalpelEvents = typeof __propDef.events;
export type GiScalpelSlots = typeof __propDef.slots;
export default class GiScalpel extends SvelteComponentTyped<GiScalpelProps, GiScalpelEvents, GiScalpelSlots> {
}
export {};
