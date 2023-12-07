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
export type GiBoulderDashProps = typeof __propDef.props;
export type GiBoulderDashEvents = typeof __propDef.events;
export type GiBoulderDashSlots = typeof __propDef.slots;
export default class GiBoulderDash extends SvelteComponentTyped<GiBoulderDashProps, GiBoulderDashEvents, GiBoulderDashSlots> {
}
export {};
