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
export type GiEnlightenmentProps = typeof __propDef.props;
export type GiEnlightenmentEvents = typeof __propDef.events;
export type GiEnlightenmentSlots = typeof __propDef.slots;
export default class GiEnlightenment extends SvelteComponentTyped<GiEnlightenmentProps, GiEnlightenmentEvents, GiEnlightenmentSlots> {
}
export {};
