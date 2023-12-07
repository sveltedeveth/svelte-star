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
export type GiUnicycleProps = typeof __propDef.props;
export type GiUnicycleEvents = typeof __propDef.events;
export type GiUnicycleSlots = typeof __propDef.slots;
export default class GiUnicycle extends SvelteComponentTyped<GiUnicycleProps, GiUnicycleEvents, GiUnicycleSlots> {
}
export {};
