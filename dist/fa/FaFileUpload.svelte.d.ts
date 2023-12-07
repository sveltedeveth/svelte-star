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
export type FaFileUploadProps = typeof __propDef.props;
export type FaFileUploadEvents = typeof __propDef.events;
export type FaFileUploadSlots = typeof __propDef.slots;
export default class FaFileUpload extends SvelteComponentTyped<FaFileUploadProps, FaFileUploadEvents, FaFileUploadSlots> {
}
export {};
