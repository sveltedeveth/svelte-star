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
export type GiSBrickProps = typeof __propDef.props;
export type GiSBrickEvents = typeof __propDef.events;
export type GiSBrickSlots = typeof __propDef.slots;
export default class GiSBrick extends SvelteComponentTyped<GiSBrickProps, GiSBrickEvents, GiSBrickSlots> {
}
export {};
