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
export type GiFlipFlopsProps = typeof __propDef.props;
export type GiFlipFlopsEvents = typeof __propDef.events;
export type GiFlipFlopsSlots = typeof __propDef.slots;
export default class GiFlipFlops extends SvelteComponentTyped<GiFlipFlopsProps, GiFlipFlopsEvents, GiFlipFlopsSlots> {
}
export {};
