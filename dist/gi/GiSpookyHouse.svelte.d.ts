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
export type GiSpookyHouseProps = typeof __propDef.props;
export type GiSpookyHouseEvents = typeof __propDef.events;
export type GiSpookyHouseSlots = typeof __propDef.slots;
export default class GiSpookyHouse extends SvelteComponentTyped<GiSpookyHouseProps, GiSpookyHouseEvents, GiSpookyHouseSlots> {
}
export {};
