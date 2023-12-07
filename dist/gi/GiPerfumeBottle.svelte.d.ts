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
export type GiPerfumeBottleProps = typeof __propDef.props;
export type GiPerfumeBottleEvents = typeof __propDef.events;
export type GiPerfumeBottleSlots = typeof __propDef.slots;
export default class GiPerfumeBottle extends SvelteComponentTyped<GiPerfumeBottleProps, GiPerfumeBottleEvents, GiPerfumeBottleSlots> {
}
export {};
