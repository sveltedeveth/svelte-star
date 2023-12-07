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
export type GiMirrorMirrorProps = typeof __propDef.props;
export type GiMirrorMirrorEvents = typeof __propDef.events;
export type GiMirrorMirrorSlots = typeof __propDef.slots;
export default class GiMirrorMirror extends SvelteComponentTyped<GiMirrorMirrorProps, GiMirrorMirrorEvents, GiMirrorMirrorSlots> {
}
export {};
