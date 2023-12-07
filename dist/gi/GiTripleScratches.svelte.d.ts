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
export type GiTripleScratchesProps = typeof __propDef.props;
export type GiTripleScratchesEvents = typeof __propDef.events;
export type GiTripleScratchesSlots = typeof __propDef.slots;
export default class GiTripleScratches extends SvelteComponentTyped<GiTripleScratchesProps, GiTripleScratchesEvents, GiTripleScratchesSlots> {
}
export {};
