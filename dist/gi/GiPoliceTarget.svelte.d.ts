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
export type GiPoliceTargetProps = typeof __propDef.props;
export type GiPoliceTargetEvents = typeof __propDef.events;
export type GiPoliceTargetSlots = typeof __propDef.slots;
export default class GiPoliceTarget extends SvelteComponentTyped<GiPoliceTargetProps, GiPoliceTargetEvents, GiPoliceTargetSlots> {
}
export {};
