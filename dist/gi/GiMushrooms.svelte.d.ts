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
export type GiMushroomsProps = typeof __propDef.props;
export type GiMushroomsEvents = typeof __propDef.events;
export type GiMushroomsSlots = typeof __propDef.slots;
export default class GiMushrooms extends SvelteComponentTyped<GiMushroomsProps, GiMushroomsEvents, GiMushroomsSlots> {
}
export {};
