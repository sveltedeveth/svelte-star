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
export type GoDashboardProps = typeof __propDef.props;
export type GoDashboardEvents = typeof __propDef.events;
export type GoDashboardSlots = typeof __propDef.slots;
export default class GoDashboard extends SvelteComponentTyped<GoDashboardProps, GoDashboardEvents, GoDashboardSlots> {
}
export {};
