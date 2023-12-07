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
export type GiSlowBlobProps = typeof __propDef.props;
export type GiSlowBlobEvents = typeof __propDef.events;
export type GiSlowBlobSlots = typeof __propDef.slots;
export default class GiSlowBlob extends SvelteComponentTyped<GiSlowBlobProps, GiSlowBlobEvents, GiSlowBlobSlots> {
}
export {};
