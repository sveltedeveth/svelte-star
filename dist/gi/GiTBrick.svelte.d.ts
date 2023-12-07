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
export type GiTBrickProps = typeof __propDef.props;
export type GiTBrickEvents = typeof __propDef.events;
export type GiTBrickSlots = typeof __propDef.slots;
export default class GiTBrick extends SvelteComponentTyped<GiTBrickProps, GiTBrickEvents, GiTBrickSlots> {
}
export {};
