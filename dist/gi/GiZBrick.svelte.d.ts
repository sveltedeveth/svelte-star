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
export type GiZBrickProps = typeof __propDef.props;
export type GiZBrickEvents = typeof __propDef.events;
export type GiZBrickSlots = typeof __propDef.slots;
export default class GiZBrick extends SvelteComponentTyped<GiZBrickProps, GiZBrickEvents, GiZBrickSlots> {
}
export {};
