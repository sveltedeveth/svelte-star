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
export type GoZapProps = typeof __propDef.props;
export type GoZapEvents = typeof __propDef.events;
export type GoZapSlots = typeof __propDef.slots;
export default class GoZap extends SvelteComponentTyped<GoZapProps, GoZapEvents, GoZapSlots> {
}
export {};
