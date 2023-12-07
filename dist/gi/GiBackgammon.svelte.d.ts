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
export type GiBackgammonProps = typeof __propDef.props;
export type GiBackgammonEvents = typeof __propDef.events;
export type GiBackgammonSlots = typeof __propDef.slots;
export default class GiBackgammon extends SvelteComponentTyped<GiBackgammonProps, GiBackgammonEvents, GiBackgammonSlots> {
}
export {};
