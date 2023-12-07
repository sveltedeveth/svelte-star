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
export type GiPiranhaProps = typeof __propDef.props;
export type GiPiranhaEvents = typeof __propDef.events;
export type GiPiranhaSlots = typeof __propDef.slots;
export default class GiPiranha extends SvelteComponentTyped<GiPiranhaProps, GiPiranhaEvents, GiPiranhaSlots> {
}
export {};
