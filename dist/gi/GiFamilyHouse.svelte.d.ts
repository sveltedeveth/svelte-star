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
export type GiFamilyHouseProps = typeof __propDef.props;
export type GiFamilyHouseEvents = typeof __propDef.events;
export type GiFamilyHouseSlots = typeof __propDef.slots;
export default class GiFamilyHouse extends SvelteComponentTyped<GiFamilyHouseProps, GiFamilyHouseEvents, GiFamilyHouseSlots> {
}
export {};
