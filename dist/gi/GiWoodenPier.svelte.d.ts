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
export type GiWoodenPierProps = typeof __propDef.props;
export type GiWoodenPierEvents = typeof __propDef.events;
export type GiWoodenPierSlots = typeof __propDef.slots;
export default class GiWoodenPier extends SvelteComponentTyped<GiWoodenPierProps, GiWoodenPierEvents, GiWoodenPierSlots> {
}
export {};
