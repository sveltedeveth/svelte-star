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
export type GiUluruProps = typeof __propDef.props;
export type GiUluruEvents = typeof __propDef.events;
export type GiUluruSlots = typeof __propDef.slots;
export default class GiUluru extends SvelteComponentTyped<GiUluruProps, GiUluruEvents, GiUluruSlots> {
}
export {};
