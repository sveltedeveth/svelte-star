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
export type GiWoodenCrateProps = typeof __propDef.props;
export type GiWoodenCrateEvents = typeof __propDef.events;
export type GiWoodenCrateSlots = typeof __propDef.slots;
export default class GiWoodenCrate extends SvelteComponentTyped<GiWoodenCrateProps, GiWoodenCrateEvents, GiWoodenCrateSlots> {
}
export {};
