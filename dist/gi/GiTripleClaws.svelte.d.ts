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
export type GiTripleClawsProps = typeof __propDef.props;
export type GiTripleClawsEvents = typeof __propDef.events;
export type GiTripleClawsSlots = typeof __propDef.slots;
export default class GiTripleClaws extends SvelteComponentTyped<GiTripleClawsProps, GiTripleClawsEvents, GiTripleClawsSlots> {
}
export {};
