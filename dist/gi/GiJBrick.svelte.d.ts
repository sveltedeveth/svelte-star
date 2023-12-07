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
export type GiJBrickProps = typeof __propDef.props;
export type GiJBrickEvents = typeof __propDef.events;
export type GiJBrickSlots = typeof __propDef.slots;
export default class GiJBrick extends SvelteComponentTyped<GiJBrickProps, GiJBrickEvents, GiJBrickSlots> {
}
export {};
