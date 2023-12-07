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
export type GiBurningMeteorProps = typeof __propDef.props;
export type GiBurningMeteorEvents = typeof __propDef.events;
export type GiBurningMeteorSlots = typeof __propDef.slots;
export default class GiBurningMeteor extends SvelteComponentTyped<GiBurningMeteorProps, GiBurningMeteorEvents, GiBurningMeteorSlots> {
}
export {};
