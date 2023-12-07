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
export type GiLBrickProps = typeof __propDef.props;
export type GiLBrickEvents = typeof __propDef.events;
export type GiLBrickSlots = typeof __propDef.slots;
export default class GiLBrick extends SvelteComponentTyped<GiLBrickProps, GiLBrickEvents, GiLBrickSlots> {
}
export {};
