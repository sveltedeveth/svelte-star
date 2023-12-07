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
export type GiFireBottleProps = typeof __propDef.props;
export type GiFireBottleEvents = typeof __propDef.events;
export type GiFireBottleSlots = typeof __propDef.slots;
export default class GiFireBottle extends SvelteComponentTyped<GiFireBottleProps, GiFireBottleEvents, GiFireBottleSlots> {
}
export {};
