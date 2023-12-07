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
export type GiBottleCapProps = typeof __propDef.props;
export type GiBottleCapEvents = typeof __propDef.events;
export type GiBottleCapSlots = typeof __propDef.slots;
export default class GiBottleCap extends SvelteComponentTyped<GiBottleCapProps, GiBottleCapEvents, GiBottleCapSlots> {
}
export {};
