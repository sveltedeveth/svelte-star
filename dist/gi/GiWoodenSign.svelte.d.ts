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
export type GiWoodenSignProps = typeof __propDef.props;
export type GiWoodenSignEvents = typeof __propDef.events;
export type GiWoodenSignSlots = typeof __propDef.slots;
export default class GiWoodenSign extends SvelteComponentTyped<GiWoodenSignProps, GiWoodenSignEvents, GiWoodenSignSlots> {
}
export {};
