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
export type GiMushroomHouseProps = typeof __propDef.props;
export type GiMushroomHouseEvents = typeof __propDef.events;
export type GiMushroomHouseSlots = typeof __propDef.slots;
export default class GiMushroomHouse extends SvelteComponentTyped<GiMushroomHouseProps, GiMushroomHouseEvents, GiMushroomHouseSlots> {
}
export {};
