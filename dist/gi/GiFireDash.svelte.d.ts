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
export type GiFireDashProps = typeof __propDef.props;
export type GiFireDashEvents = typeof __propDef.events;
export type GiFireDashSlots = typeof __propDef.slots;
export default class GiFireDash extends SvelteComponentTyped<GiFireDashProps, GiFireDashEvents, GiFireDashSlots> {
}
export {};
