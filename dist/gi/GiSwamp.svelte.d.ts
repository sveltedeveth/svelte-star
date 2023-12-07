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
export type GiSwampProps = typeof __propDef.props;
export type GiSwampEvents = typeof __propDef.events;
export type GiSwampSlots = typeof __propDef.slots;
export default class GiSwamp extends SvelteComponentTyped<GiSwampProps, GiSwampEvents, GiSwampSlots> {
}
export {};
