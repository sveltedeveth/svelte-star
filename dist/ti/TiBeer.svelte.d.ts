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
export type TiBeerProps = typeof __propDef.props;
export type TiBeerEvents = typeof __propDef.events;
export type TiBeerSlots = typeof __propDef.slots;
export default class TiBeer extends SvelteComponentTyped<TiBeerProps, TiBeerEvents, TiBeerSlots> {
}
export {};
