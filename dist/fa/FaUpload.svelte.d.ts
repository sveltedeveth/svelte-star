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
export type FaUploadProps = typeof __propDef.props;
export type FaUploadEvents = typeof __propDef.events;
export type FaUploadSlots = typeof __propDef.slots;
export default class FaUpload extends SvelteComponentTyped<FaUploadProps, FaUploadEvents, FaUploadSlots> {
}
export {};
