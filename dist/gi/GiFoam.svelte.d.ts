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
export type GiFoamProps = typeof __propDef.props;
export type GiFoamEvents = typeof __propDef.events;
export type GiFoamSlots = typeof __propDef.slots;
export default class GiFoam extends SvelteComponentTyped<GiFoamProps, GiFoamEvents, GiFoamSlots> {
}
export {};
