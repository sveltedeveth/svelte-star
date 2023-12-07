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
export type GoTasklistProps = typeof __propDef.props;
export type GoTasklistEvents = typeof __propDef.events;
export type GoTasklistSlots = typeof __propDef.slots;
export default class GoTasklist extends SvelteComponentTyped<GoTasklistProps, GoTasklistEvents, GoTasklistSlots> {
}
export {};
