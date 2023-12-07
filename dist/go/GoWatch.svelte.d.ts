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
export type GoWatchProps = typeof __propDef.props;
export type GoWatchEvents = typeof __propDef.events;
export type GoWatchSlots = typeof __propDef.slots;
export default class GoWatch extends SvelteComponentTyped<GoWatchProps, GoWatchEvents, GoWatchSlots> {
}
export {};
