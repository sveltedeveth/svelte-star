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
export type GiFallingBlobProps = typeof __propDef.props;
export type GiFallingBlobEvents = typeof __propDef.events;
export type GiFallingBlobSlots = typeof __propDef.slots;
export default class GiFallingBlob extends SvelteComponentTyped<GiFallingBlobProps, GiFallingBlobEvents, GiFallingBlobSlots> {
}
export {};
