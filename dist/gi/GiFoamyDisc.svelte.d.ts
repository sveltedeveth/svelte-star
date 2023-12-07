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
export type GiFoamyDiscProps = typeof __propDef.props;
export type GiFoamyDiscEvents = typeof __propDef.events;
export type GiFoamyDiscSlots = typeof __propDef.slots;
export default class GiFoamyDisc extends SvelteComponentTyped<GiFoamyDiscProps, GiFoamyDiscEvents, GiFoamyDiscSlots> {
}
export {};
