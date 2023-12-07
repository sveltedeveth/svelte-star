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
export type GiEelProps = typeof __propDef.props;
export type GiEelEvents = typeof __propDef.events;
export type GiEelSlots = typeof __propDef.slots;
export default class GiEel extends SvelteComponentTyped<GiEelProps, GiEelEvents, GiEelSlots> {
}
export {};
