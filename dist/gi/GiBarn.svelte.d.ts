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
export type GiBarnProps = typeof __propDef.props;
export type GiBarnEvents = typeof __propDef.events;
export type GiBarnSlots = typeof __propDef.slots;
export default class GiBarn extends SvelteComponentTyped<GiBarnProps, GiBarnEvents, GiBarnSlots> {
}
export {};
