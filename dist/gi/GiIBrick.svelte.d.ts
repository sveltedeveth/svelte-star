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
export type GiIBrickProps = typeof __propDef.props;
export type GiIBrickEvents = typeof __propDef.events;
export type GiIBrickSlots = typeof __propDef.slots;
export default class GiIBrick extends SvelteComponentTyped<GiIBrickProps, GiIBrickEvents, GiIBrickSlots> {
}
export {};
