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
export type GiBrandyBottleProps = typeof __propDef.props;
export type GiBrandyBottleEvents = typeof __propDef.events;
export type GiBrandyBottleSlots = typeof __propDef.slots;
export default class GiBrandyBottle extends SvelteComponentTyped<GiBrandyBottleProps, GiBrandyBottleEvents, GiBrandyBottleSlots> {
}
export {};
