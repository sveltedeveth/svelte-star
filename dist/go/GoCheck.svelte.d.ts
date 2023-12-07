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
export type GoCheckProps = typeof __propDef.props;
export type GoCheckEvents = typeof __propDef.events;
export type GoCheckSlots = typeof __propDef.slots;
export default class GoCheck extends SvelteComponentTyped<GoCheckProps, GoCheckEvents, GoCheckSlots> {
}
export {};
