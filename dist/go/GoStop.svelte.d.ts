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
export type GoStopProps = typeof __propDef.props;
export type GoStopEvents = typeof __propDef.events;
export type GoStopSlots = typeof __propDef.slots;
export default class GoStop extends SvelteComponentTyped<GoStopProps, GoStopEvents, GoStopSlots> {
}
export {};
