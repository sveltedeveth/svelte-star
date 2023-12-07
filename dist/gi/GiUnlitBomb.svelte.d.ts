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
export type GiUnlitBombProps = typeof __propDef.props;
export type GiUnlitBombEvents = typeof __propDef.events;
export type GiUnlitBombSlots = typeof __propDef.slots;
export default class GiUnlitBomb extends SvelteComponentTyped<GiUnlitBombProps, GiUnlitBombEvents, GiUnlitBombSlots> {
}
export {};
