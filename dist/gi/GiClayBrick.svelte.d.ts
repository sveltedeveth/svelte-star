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
export type GiClayBrickProps = typeof __propDef.props;
export type GiClayBrickEvents = typeof __propDef.events;
export type GiClayBrickSlots = typeof __propDef.slots;
export default class GiClayBrick extends SvelteComponentTyped<GiClayBrickProps, GiClayBrickEvents, GiClayBrickSlots> {
}
export {};
