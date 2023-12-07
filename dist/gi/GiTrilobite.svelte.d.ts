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
export type GiTrilobiteProps = typeof __propDef.props;
export type GiTrilobiteEvents = typeof __propDef.events;
export type GiTrilobiteSlots = typeof __propDef.slots;
export default class GiTrilobite extends SvelteComponentTyped<GiTrilobiteProps, GiTrilobiteEvents, GiTrilobiteSlots> {
}
export {};
