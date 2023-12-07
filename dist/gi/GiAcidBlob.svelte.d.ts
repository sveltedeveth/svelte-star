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
export type GiAcidBlobProps = typeof __propDef.props;
export type GiAcidBlobEvents = typeof __propDef.events;
export type GiAcidBlobSlots = typeof __propDef.slots;
export default class GiAcidBlob extends SvelteComponentTyped<GiAcidBlobProps, GiAcidBlobEvents, GiAcidBlobSlots> {
}
export {};
