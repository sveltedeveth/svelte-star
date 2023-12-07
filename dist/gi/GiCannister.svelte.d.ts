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
export type GiCannisterProps = typeof __propDef.props;
export type GiCannisterEvents = typeof __propDef.events;
export type GiCannisterSlots = typeof __propDef.slots;
export default class GiCannister extends SvelteComponentTyped<GiCannisterProps, GiCannisterEvents, GiCannisterSlots> {
}
export {};
