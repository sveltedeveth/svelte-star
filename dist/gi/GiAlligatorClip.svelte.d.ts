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
export type GiAlligatorClipProps = typeof __propDef.props;
export type GiAlligatorClipEvents = typeof __propDef.events;
export type GiAlligatorClipSlots = typeof __propDef.slots;
export default class GiAlligatorClip extends SvelteComponentTyped<GiAlligatorClipProps, GiAlligatorClipEvents, GiAlligatorClipSlots> {
}
export {};
