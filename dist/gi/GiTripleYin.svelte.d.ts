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
export type GiTripleYinProps = typeof __propDef.props;
export type GiTripleYinEvents = typeof __propDef.events;
export type GiTripleYinSlots = typeof __propDef.slots;
export default class GiTripleYin extends SvelteComponentTyped<GiTripleYinProps, GiTripleYinEvents, GiTripleYinSlots> {
}
export {};
