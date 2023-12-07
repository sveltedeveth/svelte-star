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
export type GiHouseProps = typeof __propDef.props;
export type GiHouseEvents = typeof __propDef.events;
export type GiHouseSlots = typeof __propDef.slots;
export default class GiHouse extends SvelteComponentTyped<GiHouseProps, GiHouseEvents, GiHouseSlots> {
}
export {};
