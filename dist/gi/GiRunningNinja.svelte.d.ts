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
export type GiRunningNinjaProps = typeof __propDef.props;
export type GiRunningNinjaEvents = typeof __propDef.events;
export type GiRunningNinjaSlots = typeof __propDef.slots;
export default class GiRunningNinja extends SvelteComponentTyped<GiRunningNinjaProps, GiRunningNinjaEvents, GiRunningNinjaSlots> {
}
export {};
