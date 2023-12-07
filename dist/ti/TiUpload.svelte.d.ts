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
export type TiUploadProps = typeof __propDef.props;
export type TiUploadEvents = typeof __propDef.events;
export type TiUploadSlots = typeof __propDef.slots;
export default class TiUpload extends SvelteComponentTyped<TiUploadProps, TiUploadEvents, TiUploadSlots> {
}
export {};
