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
export type GiSugarCaneProps = typeof __propDef.props;
export type GiSugarCaneEvents = typeof __propDef.events;
export type GiSugarCaneSlots = typeof __propDef.slots;
export default class GiSugarCane extends SvelteComponentTyped<GiSugarCaneProps, GiSugarCaneEvents, GiSugarCaneSlots> {
}
export {};
