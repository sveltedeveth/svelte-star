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
export type GiKlingonProps = typeof __propDef.props;
export type GiKlingonEvents = typeof __propDef.events;
export type GiKlingonSlots = typeof __propDef.slots;
export default class GiKlingon extends SvelteComponentTyped<GiKlingonProps, GiKlingonEvents, GiKlingonSlots> {
}
export {};
