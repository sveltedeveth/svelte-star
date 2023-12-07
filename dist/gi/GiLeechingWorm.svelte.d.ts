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
export type GiLeechingWormProps = typeof __propDef.props;
export type GiLeechingWormEvents = typeof __propDef.events;
export type GiLeechingWormSlots = typeof __propDef.slots;
export default class GiLeechingWorm extends SvelteComponentTyped<GiLeechingWormProps, GiLeechingWormEvents, GiLeechingWormSlots> {
}
export {};
