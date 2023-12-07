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
export type GoClockProps = typeof __propDef.props;
export type GoClockEvents = typeof __propDef.events;
export type GoClockSlots = typeof __propDef.slots;
export default class GoClock extends SvelteComponentTyped<GoClockProps, GoClockEvents, GoClockSlots> {
}
export {};
