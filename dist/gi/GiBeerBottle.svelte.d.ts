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
export type GiBeerBottleProps = typeof __propDef.props;
export type GiBeerBottleEvents = typeof __propDef.events;
export type GiBeerBottleSlots = typeof __propDef.slots;
export default class GiBeerBottle extends SvelteComponentTyped<GiBeerBottleProps, GiBeerBottleEvents, GiBeerBottleSlots> {
}
export {};
