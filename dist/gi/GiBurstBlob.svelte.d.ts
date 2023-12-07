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
export type GiBurstBlobProps = typeof __propDef.props;
export type GiBurstBlobEvents = typeof __propDef.events;
export type GiBurstBlobSlots = typeof __propDef.slots;
export default class GiBurstBlob extends SvelteComponentTyped<GiBurstBlobProps, GiBurstBlobEvents, GiBurstBlobSlots> {
}
export {};
