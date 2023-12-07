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
export type GoXProps = typeof __propDef.props;
export type GoXEvents = typeof __propDef.events;
export type GoXSlots = typeof __propDef.slots;
export default class GoX extends SvelteComponentTyped<GoXProps, GoXEvents, GoXSlots> {
}
export {};
