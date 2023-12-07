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
export type GiTripleNeedleProps = typeof __propDef.props;
export type GiTripleNeedleEvents = typeof __propDef.events;
export type GiTripleNeedleSlots = typeof __propDef.slots;
export default class GiTripleNeedle extends SvelteComponentTyped<GiTripleNeedleProps, GiTripleNeedleEvents, GiTripleNeedleSlots> {
}
export {};
