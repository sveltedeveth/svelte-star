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
export type GiBrokenBottleProps = typeof __propDef.props;
export type GiBrokenBottleEvents = typeof __propDef.events;
export type GiBrokenBottleSlots = typeof __propDef.slots;
export default class GiBrokenBottle extends SvelteComponentTyped<GiBrokenBottleProps, GiBrokenBottleEvents, GiBrokenBottleSlots> {
}
export {};
