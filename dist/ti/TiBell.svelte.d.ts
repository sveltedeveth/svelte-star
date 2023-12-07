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
export type TiBellProps = typeof __propDef.props;
export type TiBellEvents = typeof __propDef.events;
export type TiBellSlots = typeof __propDef.slots;
export default class TiBell extends SvelteComponentTyped<TiBellProps, TiBellEvents, TiBellSlots> {
}
export {};
