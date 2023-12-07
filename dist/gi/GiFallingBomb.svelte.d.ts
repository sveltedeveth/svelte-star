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
export type GiFallingBombProps = typeof __propDef.props;
export type GiFallingBombEvents = typeof __propDef.events;
export type GiFallingBombSlots = typeof __propDef.slots;
export default class GiFallingBomb extends SvelteComponentTyped<GiFallingBombProps, GiFallingBombEvents, GiFallingBombSlots> {
}
export {};
