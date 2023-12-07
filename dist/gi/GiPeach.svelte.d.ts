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
export type GiPeachProps = typeof __propDef.props;
export type GiPeachEvents = typeof __propDef.events;
export type GiPeachSlots = typeof __propDef.slots;
export default class GiPeach extends SvelteComponentTyped<GiPeachProps, GiPeachEvents, GiPeachSlots> {
}
export {};
