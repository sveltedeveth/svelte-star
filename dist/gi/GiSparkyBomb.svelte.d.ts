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
export type GiSparkyBombProps = typeof __propDef.props;
export type GiSparkyBombEvents = typeof __propDef.events;
export type GiSparkyBombSlots = typeof __propDef.slots;
export default class GiSparkyBomb extends SvelteComponentTyped<GiSparkyBombProps, GiSparkyBombEvents, GiSparkyBombSlots> {
}
export {};
