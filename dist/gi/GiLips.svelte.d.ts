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
export type GiLipsProps = typeof __propDef.props;
export type GiLipsEvents = typeof __propDef.events;
export type GiLipsSlots = typeof __propDef.slots;
export default class GiLips extends SvelteComponentTyped<GiLipsProps, GiLipsEvents, GiLipsSlots> {
}
export {};
