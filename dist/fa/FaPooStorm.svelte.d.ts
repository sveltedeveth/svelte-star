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
export type FaPooStormProps = typeof __propDef.props;
export type FaPooStormEvents = typeof __propDef.events;
export type FaPooStormSlots = typeof __propDef.slots;
export default class FaPooStorm extends SvelteComponentTyped<FaPooStormProps, FaPooStormEvents, FaPooStormSlots> {
}
export {};
