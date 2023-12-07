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
export type GiBlockHouseProps = typeof __propDef.props;
export type GiBlockHouseEvents = typeof __propDef.events;
export type GiBlockHouseSlots = typeof __propDef.slots;
export default class GiBlockHouse extends SvelteComponentTyped<GiBlockHouseProps, GiBlockHouseEvents, GiBlockHouseSlots> {
}
export {};
