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
export type GiTrampleProps = typeof __propDef.props;
export type GiTrampleEvents = typeof __propDef.events;
export type GiTrampleSlots = typeof __propDef.slots;
export default class GiTrample extends SvelteComponentTyped<GiTrampleProps, GiTrampleEvents, GiTrampleSlots> {
}
export {};
