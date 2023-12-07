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
export type GiTightropeProps = typeof __propDef.props;
export type GiTightropeEvents = typeof __propDef.events;
export type GiTightropeSlots = typeof __propDef.slots;
export default class GiTightrope extends SvelteComponentTyped<GiTightropeProps, GiTightropeEvents, GiTightropeSlots> {
}
export {};
