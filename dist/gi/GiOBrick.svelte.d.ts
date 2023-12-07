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
export type GiOBrickProps = typeof __propDef.props;
export type GiOBrickEvents = typeof __propDef.events;
export type GiOBrickSlots = typeof __propDef.slots;
export default class GiOBrick extends SvelteComponentTyped<GiOBrickProps, GiOBrickEvents, GiOBrickSlots> {
}
export {};
